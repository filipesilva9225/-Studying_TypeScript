/*const file = { name: 'lista de funcionario', size: 42134214 } as const;

file.name = 'lista de dependentes'
*/

type File = {
  readonly name: string;
  size: number;
};

const file: File = { name: 'lista de funcionario', size: 434324234 };

// file.name = 'lista de dependentes.txt'

export function handleFileUp(file: File) {
  console.log(`nome: ${file.name}`);
  console.log(`Tamanho: ${file.size}`);
}

handleFileUp(file);
