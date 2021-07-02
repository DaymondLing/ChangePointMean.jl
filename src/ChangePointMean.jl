module ChangePointMean

using Random
using Statistics
using Plots

export mcppv                # p-value of existence of change point
export mcptime              # index of change point (new segment)
export mcpoint              # Single change point in Mean
export mcplast              # Most recent change point (rightmost)
export mcpall               # All change point
export mcplot               # plotting routine

include("meancpd.jl")

end
