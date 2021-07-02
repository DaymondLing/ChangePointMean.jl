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
            "KS Test" => "man/kstest.md",
            "ROC" => "man/roc.md",
            "Plots and Tables" => "man/bcdiag.md",
        ],

    ],
)

deploydocs(;
    repo = "github.com/DaymondLing/ChangePointMean.jl.git",
    devbranch = "main"
)
