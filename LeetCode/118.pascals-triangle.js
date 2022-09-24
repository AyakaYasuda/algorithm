/*

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

      1
    1   1
   1  2  1
  1  3  3  1
1  4  6  4  1


Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]

*/

/*
1: [1]
2: [1,1]
3: [1,2,1]
4: [1,3,3,1] 
5: [1,4,6,4,1]            
6: [1,5,10,10,5,1]


ans = [[1]]
ans = [[1], [1,1]]
        1     2
ans =[[1], [1,1], [1,2,1]]
       1     2       3
newRow = [ans[numRow-2][0], ans[numRow-2][i] + ans[numRow-2][i+1], [numRow-2][(ans[numRow-2].length)-1]]
i = 0; i < ans[numRow-2].length - 1
*/

const generate = (numRows) => {
  let ans = [];
  if (numRows === 1) ans = [[1]];
  
  if (numRows >= 2) {
    ans = [[1], [1, 1]];
    let i = 2;
    while (i < numRows) {
      let newRow = [];

      newRow.push(1);

      for (let j = 1; j < ans[i - 1].length; j++) {
        const prevRow = ans[i - 1];
        newRow.push(prevRow[j - 1] + prevRow[j]);
      }

      newRow.push(1);

      ans[i] = newRow;
      i++;
    }
  }

  return ans;
};

console.log(generate(1));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));
