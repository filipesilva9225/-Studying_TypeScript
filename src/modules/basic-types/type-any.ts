export function handleFileUp(file: any) {
  console.log(`nome: ${file.name}`);
  console.log(`Tamanho: ${file.size}`);
}

const file = { name: 'lista de funcionario', size: 42134214 };

handleFileUp(file);
