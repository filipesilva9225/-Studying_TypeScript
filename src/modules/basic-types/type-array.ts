let films = ['moana', 'finding nemo', 'toy story'];

// let films: string[] = ['moana', 'finding nemo', 'toy story'];
// let numbers: number[] = [1, 2, 3, 4, 5];

// let films: Array<string> = ['moana', 'finding nemo', 'toy story'];
// let numbers: Array<number> = [1, 2, 3, 4, 5];

export function toUpperCaseStriings(arr: string[]) {
  return arr.map((value) => value.toUpperCase());
}

console.log(toUpperCaseStriings(films));
