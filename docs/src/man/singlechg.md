# Single change

Detecting change point is a two step process:

1. Is there a change point?

2. When did the change happen?

## Is there a change

`mcppv` uses randomization to calculate the p-value of 
observing the particular sequence.
It uses `shuffle!` to re-arrange the centered time series.
For repeatable results,
set the random number seed first.

```@example pv
using ChangePointMean
using Random

ts = [1, 2, 1, 2, 1, 2, 10, 11, 10, 11, 10]
for _ in 1:10
    Random.seed!(888)
    println(mcppv(ts))
end
```

If the random number seed is not set, the results will not be
repeatable:

```@example pv
ts = [1, 2, 1, 2, 1, 2, 10, 11, 10, 11, 10]
Random.seed!(888)
for _ in 1:10
    println(mcppv(ts))
end
```

## When is the change

`mcptime` estimates the location of the change point by finding
the location of minimum sum of squares when the time series is split into
two halves.

```@example pv
mcptime(ts)
```

## A single change point

`mcpoint` uses `mcppv` and `mcptime` together to return
the location of a change point, the start of a new shifted sub-series:

```@example pv
mcpoint(ts)
```

If there is no change point, `mcpoint` returns 0:

```@example pv
mcpoint([1, 1, 1, 1, 1, 1, 1, 1, 1])
```

You can use `minlen` to control the length of segments:
```@example pv
mcptime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 10])
```

```@example pv
mcptime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 10]; minlen = 4)
```
