//   Number of Islands
// Solution
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3



var numIslands = function(grid) {
    //1s = land
    //0 =water 
    if( grid === null || grid.length == 0){
        return 0;
        
    }
    var islandCounter = 0;
    
    for (let i =0; i<grid.length; i++){
        for (let j= 0; j<grid[i].length; j++){
            if (grid[i][j] =='1'){
                islandCounter += checkSides(grid,i,j);
            }
        }
    }
    return islandCounter;


function checkSides(grid, i, j){
    if(i< 0 || i >= grid.length || j < 0 ||j >= grid[i].length || grid[i][j] == '0'){
        return 0;
    }
 
        grid[i][j] ='0';
        //checkSides(grid, i+1, j);
        checkSides(grid, i-1, j);
        checkSides(grid, i+1, j);
        //checkSides(grid, i, j+1);
        checkSides(grid, i, j+1);
        checkSides(grid, i, j-1);
        return 1;
}

}


