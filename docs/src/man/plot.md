# Visualization

`mcplot` is a utility function to visualize change points.
If you plot the time series without any change points,
you get a plain plot:

```@example multi
using ChangePointMean
using Plots

ts = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3]
mcplot(ts)
png("plot-1.png"); nothing # hide
```

![](plot-1.png)

If you call it with change points, the plot is divided into
segments:

```@example multi
mcplot(ts; chgpts = mcpall(ts))
png("plot-2.png"); nothing # hide
```

![](plot-2.png)
