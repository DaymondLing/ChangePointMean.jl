var documenterSearchIndex = {"docs":
[{"location":"man/lowlevel/#Low-level","page":"KS Test","title":"Low level","text":"","category":"section"},{"location":"man/lowlevel/#Is-there-a-change-point","page":"KS Test","title":"Is there a change point","text":"","category":"section"},{"location":"man/lowlevel/","page":"KS Test","title":"KS Test","text":"mcppv","category":"page"},{"location":"man/lowlevel/#When-is-the-change-point","page":"KS Test","title":"When is the change point","text":"","category":"section"},{"location":"man/lowlevel/","page":"KS Test","title":"KS Test","text":"mcptime","category":"page"},{"location":"man/lowlevel/#Together","page":"KS Test","title":"Together","text":"","category":"section"},{"location":"man/lowlevel/","page":"KS Test","title":"KS Test","text":"mcpoint","category":"page"},{"location":"man/plot/#Visualization","page":"KS Test","title":"Visualization","text":"","category":"section"},{"location":"man/plot/","page":"KS Test","title":"KS Test","text":"mcplot","category":"page"},{"location":"man/highlevel/#High-level","page":"KS Test","title":"High level","text":"","category":"section"},{"location":"man/highlevel/#The-most-recent-change-point","page":"KS Test","title":"The most recent change point","text":"","category":"section"},{"location":"man/highlevel/","page":"KS Test","title":"KS Test","text":"mcplast","category":"page"},{"location":"man/highlevel/#All-change-points","page":"KS Test","title":"All change points","text":"","category":"section"},{"location":"man/highlevel/","page":"KS Test","title":"KS Test","text":"mcpall","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ChangePointMean","category":"page"},{"location":"#ChangePointMean","page":"Home","title":"ChangePointMean","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ChangePointMean.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ChangePointMean]","category":"page"},{"location":"#ChangePointMean.mcpall-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcpall","text":"mcpall(ts::AbstractVector; pcut = 0.05, shuffle = 500, minlen = 3)\n\nreturn vector of index of all change points in ts via recursive partitioning pcut is p-value threshold of existence of a change point, default is 0.05 shuffle is number of randomizations to use minlen is minimum allowed length for a segment (prevent short segments)\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcplast-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcplast","text":"mcplast(ts::AbstractVector; pcut=0.05, shuffle=500, minlen=3)\n\nreturn index of rightmost change point in ts if any, 0 otherwise pcut is p-value threshold of existence of a change point, default is 0.05 shuffle is number of randomizations to use minlen is minimum allowed length for a segment (prevent short segments)\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcplot-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcplot","text":"mcplot(ts::AbstractVector; chgpts=Int[], palette=:seaborn_bright)\n\nreturns plot of ts with chgpts as change points (default is none) palette is the default color scheme to use\n\nmcplot(ts) is a plain plot of the time series, mcplot(ts, chgpts=mcpall(ts)) is plot of ts with all change points\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcpoint-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcpoint","text":"mcpoint(ts::AbstractVector; pcut=0.05, shuffle=500, minlen=3)\n\nreturn index of change point in mean in ts if it exists, 0 otherwise pcut is p-value threshold of existence of a change point, default is 0.05 shuffle is number of randomizations to use minlen is minimum allowed length for a segment (prevent short segments)\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcppv-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcppv","text":"mcppv(ts::AbstractVector; shuffle::Int = 500)\n\nreturn p-value of a change point in mean in ts shuffle is number of randomization used to generate p-value uses global random number generator\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcptime-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcptime","text":"mcptime(ts::AbstractVector; minlen::Int = 1)\n\nreturn index of start of new segment via minimum ssq in ts minlen is minimum length of a segment you want 0 is returned if minlen is not least twice length of ts\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.ssq-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.ssq","text":"ssq(v) returns sum of squares\n\n\n\n\n\n","category":"method"}]
}