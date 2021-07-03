using ChangePointMean
using Documenter

DocMeta.setdocmeta!(ChangePointMean, :DocTestSetup, :(using ChangePointMean); recursive=true)

makedocs(;
    modules=[ChangePointMean],
    authors="Daymond Ling",
    repo="https://github.com/DaymondLing/ChangePointMean.jl/blob/{commit}{path}#{line}",
    sitename="ChangePointMean.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://DaymondLing.github.io/ChangePointMean.jl",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "User's Guide" => [
            "Single change" => "man/singlechg.md",
            "Multiple changes" => "man/multichg.md",
            "Plot routine" => "man/plot.md",
            ],
        "Function Reference" => "Reference.md",
    ],
)

deploydocs(;
    repo = "github.com/DaymondLing/ChangePointMean.jl.git",
    devbranch = "main"
)
