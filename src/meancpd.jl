"""
    mcppv(ts::AbstractVector; shuffle::Int = 500)

return p-value of a change point in mean in `ts`
`shuffle` is number of randomization used to generate p-value
uses global random number generator
"""
function mcppv(ts::AbstractVector; shuffle::Int = 500)
    length(ts) <= 1 && return 1.0                   # large pvalue is no change

    dev = ts .- mean(ts)                            # centered
    cusum = Vector{Float64}(undef, length(ts))
    cumsum!(cusum, dev)                             # observed cumsum
    cmax_obs = maximum(abs, cusum)                  # max abs cumsum observed

    n = 0
    for _ = 1:shuffle
        shuffle!(dev)
        cumsum!(cusum, dev)
        cmax = maximum(abs, cusum)
        if cmax >= cmax_obs
            n += 1
        end
    end

    (n + 1) / (shuffle + 1)                         # p-value
end


"""
    mcptime(ts::AbstractVector; minlen::Int = 1)

return index of start of new segment via minimum ssq in `ts`
`minlen` is minimum length of a segment you want
0 is returned if minlen is not least twice length of ts
"""
function mcptime(ts::AbstractVector; minlen::Int = 3)
    minlen < 1 && return 0
    len = length(ts)
    len < 2 * minlen && return 0

    chgpoint = 0
    minssq = Inf
    @inbounds for brk = minlen+1:len+1-minlen
        @views ssqtot = ssq(ts[1:brk-1]) + ssq(ts[brk:len])
        if ssqtot < minssq
            minssq = ssqtot
            chgpoint = brk
        end
    end

    chgpoint
end


"""
ssq(v) returns sum of squares
"""
@inline ssq(v::AbstractVector) = var(v) * (length(v) - 1)


"""
    mcpoint(ts::AbstractVector; pcut=0.05, shuffle=500, minlen=3)

return index of change point in mean in `ts` if it exists, 0 otherwise
`pcut` is p-value threshold of existence of a change point, default is 0.05
`shuffle` is number of randomizations to use
`minlen` is minimum allowed length for a segment (prevent short segments)
"""
function mcpoint(ts::AbstractVector; pcut = 0.05, shuffle::Int = 500, minlen::Int = 3)
    minlen < 1 && return 0
    len = length(ts)
    len < 2 * minlen && return 0

    chgpoint = 0
    if mcppv(ts; shuffle = shuffle) <= pcut
        brk = mcptime(ts; minlen = minlen)
        if minlen < brk <= (len - minlen + 1)
            chgpoint = brk
        end
    end

    chgpoint
end


"""
    mcplast(ts::AbstractVector; pcut=0.05, shuffle=500, minlen=3)

return index of rightmost change point in `ts` if any, 0 otherwise
`pcut` is p-value threshold of existence of a change point, default is 0.05
`shuffle` is number of randomizations to use
`minlen` is minimum allowed length for a segment (prevent short segments)
"""
function mcplast(ts::AbstractVector; pcut = 0.05, shuffle::Int = 500, minlen::Int = 3)
    minlen < 1 && return 0
    len = length(ts)
    len < 2 * minlen && return 0

    head = 1
    brk = mcpoint(ts[head:len]; pcut = pcut, minlen = minlen, shuffle = shuffle)
    while brk > 0
        head += brk - 1         # keep checking right hand segment
        brk = mcpoint(ts[head:len]; pcut = pcut, minlen = minlen, shuffle = shuffle)
    end

    head == 1 ? 0 : head
end

##---   all change points if they exist

"""
    mcpall(ts::AbstractVector; pcut = 0.05, shuffle = 500, minlen = 3)

return vector of index of all change points in `ts` via recursive partitioning
`pcut` is p-value threshold of existence of a change point, default is 0.05
`shuffle` is number of randomizations to use
`minlen` is minimum allowed length for a segment (prevent short segments)
"""
function mcpall(ts::AbstractVector; pcut = 0.05, shuffle::Int = 500, minlen::Int = 3)
    chgpts = Vector{Int}(undef, 0)
    minlen < 1 && return chgpts
    len = length(ts)
    len < 2 * minlen && return chgpts

    _mcpall!(chgpts, 1, ts; pcut = pcut, shuffle = shuffle, minlen = minlen)
    sort!(chgpts)
end

function _mcpall!(
    chgpts::AbstractVector,
    head::Int,
    ts::AbstractVector;
    pcut = 0.05,
    shuffle::Int = 500,
    minlen::Int = 3,
)
    len = length(ts)
    chg = mcpoint(ts; pcut = pcut, shuffle = shuffle, minlen = minlen)
    chg == 0 && return                      # no change point, stop
    append!(chgpts, head + chg - 1)         # remember change point
    _mcpall!(chgpts, head, ts[1:chg-1]; pcut = pcut, shuffle = shuffle, minlen = minlen)
    _mcpall!(
        chgpts,
        head + chg - 1,
        ts[chg:len];
        pcut = pcut,
        shuffle = shuffle,
        minlen = minlen,
    )

    nothing
end

##---   mcplot

"""
    mcplot(ts::AbstractVector; chgpts=Int[], palette=:seaborn_bright)

returns plot of `ts` with `chgpts` as change points (default is none)
`palette` is the default color scheme to use

`mcplot(ts)` is a plain plot of the time series,
`mcplot(ts, chgpts=mcpall(ts))` is plot of ts with all change points
"""
function mcplot(ts::AbstractVector; chgpts = Int[], palette = :seaborn_bright)
    len = length(ts)
    plt = plot(
        size = (600, 400),
        bar_width = 0.9,
        xlims = (0.5, len + 0.5),
        titlefont = (8),
        xtickfontsize = 6,
        palette = palette,
    )

    vline!(-0.5 .+ chgpts, lc = :blue, ls = :dash, lw = 1, label = false)

    n = 0
    for (t1, t2) in zip(reverse([1; chgpts]), reverse([chgpts .- 1; length(ts)]))
        n += 1
        m = mean(ts[t1:t2])
        plot!(t1:t2, ts[t1:t2], st = :bar, lc = nothing, label = false, fc = n)
        plot!([t1 - 0.5, t2 + 0.5], [m, m], lc = :blue, ls = :dot, lw = 2, label = false)
    end

    plt
end
