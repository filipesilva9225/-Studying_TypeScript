type Salary = number | string;

type Programmer = {
  name: string;
  age?: number;
  skills: string[];
  contact: { email: string; phone: string };
  salary?: Salary;
};

export function showProgrammer(programmer: Programmer) {
  console.log(programmer);
}

showProgrammer({
  name: 'ana',
  skills: ['php'],
  contact: { email: 'filipesilva9225@gmail.com', phone: '75 991781075' },
  salary: 5000,
});
