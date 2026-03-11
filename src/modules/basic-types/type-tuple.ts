let filmArray: (number | string | boolean)[] = [1, 'The Matrix', true];

let filmTuple: [number, string, boolean] = [1, 'The Matrix', true];

let filmTupleOp: [number, string, boolean?] = [1, 'The Matrix', true];

const [idArr, titleArr, avaliableArr] = filmArray;
const [id, title, avaliable] = filmTuple;

console.log(id);
