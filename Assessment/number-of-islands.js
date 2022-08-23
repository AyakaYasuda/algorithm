function SearchingChallenge(strArr) {
    const visited = [];
    for (let i = 0; i < strArr.length; i++) {
      visited.push([]);
      visited[i] = new Array(strArr[0].length).fill(false);
    }
  
    let ans = 0;
  
    for (let i = 0; i < strArr.length; i++) {
      for (let j = 0; j < strArr[0].length; j++) {
        if (strArr[i][j] === '0' && !visited[i][j]) {
          bfs(i, j, visited, strArr);
          ans++;
        }
      }
    }
    return ans;
  }
  
  const bfs = (y, x, visited, arr) => {
    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];
  
    const queue = [];
    queue.push(new Pair(y, x));
  
    while (queue.length > 0) {
      const p = queue.shift();
      visited[p.y][p.x] = true;
  
      for (let i = 0; i < 4; i++) {
        const nx = p.x + dx[i];
        const ny = p.y + dy[i];
  
        if (nx < 0 || nx >= arr[0].length || ny < 0 || ny >= arr.length) {
          continue;
        }
  
        if (visited[ny][nx]) {
          continue;
        }
  
        if (arr[ny][nx] === '0') {
          visited[ny][nx] = true;
          queue.push(new Pair(ny, nx));
        }
      }
    }
  };
  
  class Pair {
    constructor(y, x) {
      this.x = x;
      this.y = y;
    }
  }
  
  // keep this function call here
  console.log(SearchingChallenge(['101', '010']));
  