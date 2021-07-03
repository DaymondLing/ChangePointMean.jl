# ChangePointMean

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://DaymondLing.github.io/ChangePointMean.jl/dev)
[![Build Status](https://github.com/DaymondLing/ChangePointMean.jl/workflows/CI/badge.svg)](https://github.com/DaymondLing/ChangePointMean.jl/actions)
[![Coverage](https://codecov.io/gh/DaymondLing/ChangePointMean.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/DaymondLing/ChangePointMean.jl)

Detect change point in the mean of a time series via randomization test of 
centered cumsum.

<img src="docs/src/images/chgpoint.png" />

## Installation

This package can be installed via its URL:

```
] add https://github.com/DaymondLing/ChangePointMean.jl
```

## Purpose

If you are looking for general purpose change point detection, e.g.,
change in mean or variance or slope, this package is not it.
[Changepoints](https://github.com/STOR-i/Changepoints.jl) is 
probably what you are looking for.

This is a simple, useful, efficient package for detecting mean shift
in a time series via cumsum randomization test. 
It is non-parametric in the sense that there are no distribution assumptions.
References can be found here:

- https://variation.com/wp-content/uploads/change-point-analyzer/change-point-analysis-a-powerful-new-tool-for-detecting-changes.pdf

- https://support.sas.com/resources/papers/proceedings17/1489-2017.pdf

## Single change

To find the most dominant change point in the mean of a time series,
use `mcpoint`:

- `mcpoint` returns the index of a change point (beginning of change)
if there is one, 0 otherwise.

You can specify the desired p-value threshold that's considered as significant,
you can also specify the minimum length of a segment in order to 
avoid detection of short segments.

`mcpoint` uses two lower level functions:

- `mcppv` calculates the p-value of existence of a mean
change point via cumsum randomization test of the centered series.

- `mcptime` estimates the location of the change point by looking for the
point with minimum overall sum of squares.

You can use these two function to better understand
how the algorithm reacts to various data patterns.

Note this package uses 1-based indexing of the time series vector.

## Multiple changes

In general, there may be multiple change points,
interest may be in the most recent change or all changes:

- `mcplast` returns the index of the most recent change point 
by repeatedly calling `mcpoint` on the more recent segment until 
no more change can be found.
If there are no change points, 0 is returned.

- `mcpall` returns a vector of all change points via recursive partitioning,
length of vector is the number of change points detected.
This function recursively calls `mcpoint` on all segments until
no more changes can be detected.
If there are no changes, an empty vector is returned.

## Plot

- `mcplot` plots the time series broken into segments to aid visualization.

For full documentation, see 
[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://DaymondLing.github.io/ChangePointMean.jl/dev)
