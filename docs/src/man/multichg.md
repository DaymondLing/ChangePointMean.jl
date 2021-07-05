# Multiple changes

In general, a time series can have any number of changes.
There are two use cases:

1. Interest is in the most recent change

2. All change points are interesting to study

## The most recent change point

`mcplast` calls `mcpoint` repeatedly on the most recent segment
until no more changes are found and returns the starting index
of that segment. If there are no change points, 0 is returned.

```@example multi
using ChangePointMean

ts = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 8, 8, 8, 8, 3, 3, 3, 3]
mcplast(ts)
```

## All change points

`mcpall` calls `mcpoint` repeatedly on all segments recursively
until no more changes can be found. It returns a vector of
starting indices, if no changes are found, an empty vector is returned.

```@example multi
mcpall(ts)
```
