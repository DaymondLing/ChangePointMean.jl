# ChangePointMean

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://DaymondLing.github.io/ChangePointMean.jl/stable)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://DaymondLing.github.io/ChangePointMean.jl/dev)
[![Build Status](https://github.com/DaymondLing/ChangePointMean.jl/workflows/CI/badge.svg)](https://github.com/DaymondLing/ChangePointMean.jl/actions)
[![Coverage](https://codecov.io/gh/DaymondLing/ChangePointMean.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/DaymondLing/ChangePointMean.jl)

Detect change point in mean of a time series via randomization test of 
centered cumsum.

<img src="docs/src/images/chgpoint.png" />

## Installation

This package can be installed its URL:

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

## Current capabilities

There are two base functions for finding a change point:

- `mcppv` examines a vector and calculates the p-value of existence of a mean
change point via cusum randomization test of the centered series.

- `mcptime` estimates the location of the change point by looking for the
point with minimum overall sum of squares.

These two functions are useful when manually checking for
the existence of a change point and, if yes, its location.

To analyze mean shift of a time series, you should start with `mcpoint`
which returns the location of the most dominant mean change point
if there is one, 0 otherwise.
This package assumes 1-based indexing of the time series vector.

- `mcpoint` returns the index of a change point (beginning of change)
if there is one, 0 otherwise.

In general, there may be multiple change points,
interest may be in the most recent change or all changes:

- `mcplast` returns the index of the most recent change point 
by repeatedly calling `mcpoint` on the more recent segment until 
no more change can be found.
If there are no change points, 0 is returned.

- `mcpall` returns a vector of all change points, length of vector is
the number of change points detected via recursive partitioning.
This function recursively calls `mcpoint` on all segments until
no changes can be detected.
If there are no changes, an empty vector is returned.

And,

- `mcplot` plots the time series broken into segments to aid visualization.

For full documentation, see 
[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://DaymondLing.github.io/ChangePointMean.jl/stable)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://DaymondLing.github.io/ChangePointMean.jl/dev)
