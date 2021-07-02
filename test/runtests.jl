using ChangePointMean
using Test

@testset "ChangePointMean.jl" begin
    s0 = [1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1]
    s1 = [10, 11, 9, 9, 10, 10, 11, 11, 18, 16, 17, 17, 17, 16, 18]
    s2 = [10, 11, 9, 9, 10, 10, 11, 11, 18, 16, 17, 17, 17, 16, 18, 21, 22, 22, 23, 22, 21, 21, 23]
          
    @test mcpoint(s0) == 0
    @test mcplast(s0) == 0
    @test mcpall(s0) == Int[]

    @test mcpoint(s1) == 9
    @test mcplast(s1) == 9
    @test mcpall(s1) == [9]
    
    @test mcpoint(s2) == 9
    @test mcplast(s2) == 16
    @test mcpall(s2) == [9, 16]
end
