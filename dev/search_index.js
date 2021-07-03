var documenterSearchIndex = {"docs":
[{"location":"man/plot/#Visualization","page":"Plot routine","title":"Visualization","text":"","category":"section"},{"location":"man/plot/","page":"Plot routine","title":"Plot routine","text":"mcplot","category":"page"},{"location":"man/multichg/#High-level","page":"Multiple changes","title":"High level","text":"","category":"section"},{"location":"man/multichg/#The-most-recent-change-point","page":"Multiple changes","title":"The most recent change point","text":"","category":"section"},{"location":"man/multichg/","page":"Multiple changes","title":"Multiple changes","text":"mcplast","category":"page"},{"location":"man/multichg/#All-change-points","page":"Multiple changes","title":"All change points","text":"","category":"section"},{"location":"man/multichg/","page":"Multiple changes","title":"Multiple changes","text":"mcpall","category":"page"},{"location":"man/singlechg/#Single-change","page":"Single change","title":"Single change","text":"","category":"section"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"Detecting change point  is a two step process:","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"Is there a change point?\nWhen did the change happen?","category":"page"},{"location":"man/singlechg/#Is-there-a-change-point","page":"Single change","title":"Is there a change point","text":"","category":"section"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"mcppv uses randomization to calculate the p-value of  observing the particular sequence.","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"It uses shuffle! to re-arrange the centered time series. To guarantee repeatable results, you should set the random number seed first.","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"using Random\n\nts = [1, 2, 1, 2, 1, 2, 10, 11, 10, 11, 10]\nfor _ in 1:10\n    Random.seed!(888)\n    println(mcpoint(ts))\nend","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"If the random number seed is not set, the results will not be repeatable:","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"using Random\n\nts = [1, 2, 1, 2, 1, 2, 10, 11, 10, 11, 10]\nRandom.seed!(888)\nfor _ in 1:10\n    println(mcpoint(ts))\nend","category":"page"},{"location":"man/singlechg/#When-is-the-change-point","page":"Single change","title":"When is the change point","text":"","category":"section"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"mcptime estimates the location of the change point by finding the location of minimum sum of squares when the time series is split into two halves.","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"mcptime(ts)","category":"page"},{"location":"man/singlechg/#A-single-change-point","page":"Single change","title":"A single change point","text":"","category":"section"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"mcpoint uses mcppv and mcptime together to return the location of a change point, the start of a new shifted sub-series:","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"mcptime(ts)","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"If there is no change point, mcpoint returns 0:","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"mcptime([1, 1, 1, 1, 1, 1, 1, 1, 1])","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"You can use minlen to control the length of segments:","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"mcptime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 10])","category":"page"},{"location":"man/singlechg/","page":"Single change","title":"Single change","text":"mcptime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 10]; minlen = 4)","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ChangePointMean","category":"page"},{"location":"#ChangePointMean.jl","page":"Home","title":"ChangePointMean.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ChangePointMean.","category":"page"},{"location":"","page":"Home","title":"Home","text":"<img src=\"images/chgpoint.png\" width=\"500\" />","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package detects changes in the mean of a time series via randomization test of the cumsum of the centered time series.","category":"page"},{"location":"","page":"Home","title":"Home","text":"References can be found below:","category":"page"},{"location":"","page":"Home","title":"Home","text":"https://variation.com/wp-content/uploads/change-point-analyzer/change-point-analysis-a-powerful-new-tool-for-detecting-changes.pdf\nhttps://support.sas.com/resources/papers/proceedings17/1489-2017.pdf","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is installable via its URL:","category":"page"},{"location":"","page":"Home","title":"Home","text":"] add https://github.com/DaymondLing/ChangePointMean.jl","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#autodocs","page":"Home","title":"autodocs","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [ChangePointMean]","category":"page"},{"location":"#ChangePointMean.mcpall-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcpall","text":"mcpall(ts::AbstractVector; pcut = 0.05, shuffle = 500, minlen = 3)\n\nreturn vector of index of all change points in ts via recursive partitioning pcut is p-value threshold of existence of a change point, default is 0.05 shuffle is number of randomizations to use minlen is minimum allowed length for a segment (prevent short segments)\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcplast-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcplast","text":"mcplast(ts::AbstractVector; pcut=0.05, shuffle=500, minlen=3)\n\nreturn index of rightmost change point in ts if any, 0 otherwise pcut is p-value threshold of existence of a change point, default is 0.05 shuffle is number of randomizations to use minlen is minimum allowed length for a segment (prevent short segments)\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcplot-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcplot","text":"mcplot(ts::AbstractVector; chgpts=Int[], palette=:seaborn_bright)\n\nreturns plot of ts with chgpts as change points (default is none) palette is the default color scheme to use\n\nmcplot(ts) is a plain plot of the time series, mcplot(ts, chgpts=mcpall(ts)) is plot of ts with all change points\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcpoint-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcpoint","text":"mcpoint(ts::AbstractVector; pcut=0.05, shuffle=500, minlen=3)\n\nreturn index of change point in mean in ts if it exists, 0 otherwise pcut is p-value threshold of existence of a change point, default is 0.05 shuffle is number of randomizations to use minlen is minimum allowed length for a segment (prevent short segments)\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcppv-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcppv","text":"mcppv(ts::AbstractVector; shuffle::Int = 500)\n\nreturn p-value of a change point in mean in ts shuffle is number of randomization used to generate p-value uses global random number generator\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.mcptime-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.mcptime","text":"mcptime(ts::AbstractVector; minlen::Int = 1)\n\nreturn index of start of new segment via minimum ssq in ts minlen is minimum length of a segment you want 0 is returned if minlen is not least twice length of ts\n\n\n\n\n\n","category":"method"},{"location":"#ChangePointMean.ssq-Tuple{AbstractVector{T} where T}","page":"Home","title":"ChangePointMean.ssq","text":"ssq(v) returns sum of squares\n\n\n\n\n\n","category":"method"}]
}
