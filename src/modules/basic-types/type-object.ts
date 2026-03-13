let programmer = {
  // let programmer: { name: string; age: number; skills: string[] } = {
  name: 'filipe',
  age: 20,
  skills: ['javascript', 'typescript', 'react'],
};

programmer.name = 'joão';
programmer.age = 23;

export function showProgrammer(programmer: {
  name?: string;
  age?: number;
  skills: string[];
}) {
  console.log(programmer);
}

showProgrammer(programmer);
showProgrammer({ name: 'ana', skills: ['php'] });
