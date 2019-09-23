/**
 *  迷宫问题
    maze 迷宫矩阵
    pos  当前位置
    path 走出迷宫的路径
    transverse 走过的位置
 */

const maze = [
    [0, 1, 0, 0, 0, 0],
    [0 ,1, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1],
    [2, 1, 0, 0, 0, 0]
]

function rat_in_maze(maze, pos=[0,0], path=[[...pos]], transverse = []){
    const [x, y] = pos
    if(maze[x][y] === 2){
        return path
    }
    transverse[y * maze[0].length + x] = true
    const choices = [
        [x - 1, y], [x + 1, y],
        [x, y - 1], [x, y + 1]
    ].filter(([x, y]) => {
        return x >= 0 && y >= 0 && x < maze[0].length && y < maze.length && !transverse[y * maze[0].length + x] && maze[x][y] !== 1
    })

    for(let [x, y] of choices){
        const p = rat_in_maze(
            maze, [x, y], path.concat([[x, y]]), transverse
        )
        if(p) return p
    }
}


console.log(rat_in_maze(maze))