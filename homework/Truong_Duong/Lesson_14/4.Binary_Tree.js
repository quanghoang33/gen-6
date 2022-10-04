const input = [
  { id: 1, pid: 2 },
  { id: 3, pid: 2 },
  { id: 6, pid: 8 },
  { id: 9, pid: 8 },
  { id: 2, pid: 5 },
  { id: 8, pid: 5 },
  { id: 5, pid: null },
];

function solution(input) {
  const ids = input.map(row => row.id);
  const pidMap = {};

  let root = 1;
  input.forEach(row => {
    if(row.pid) {
      pidMap[row.pid] = 1;
    } else {
      root = row.id;
    }
  });

  ids.sort((x, y) => x - y);

  for(let id of ids) {
    if(id === root) {
      console.log(`${id} ROOT`);
    } else if (id in pidMap) {
      console.log(`${id} INNER`);
    } else {
      console.log(`${id} LEAF`);
    }
  }
}

solution(input);