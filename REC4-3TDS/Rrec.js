const estagio = "trabalhoX";
let idade = 18;
const nome = "Olivia Ribeiro Costa";
const documento = false;
const habilidades = ["HTML", "CSS", "JS", "PYTHON"];

// Condicional 1
if (documento === false) {
  console.log(`A funcionária não entregou o documento.`);
} else {
  console.log(`Documento OK.`);
}

// Condicional 2 (adicionada para cumprir o item 4)
if (idade >= 18) {
  console.log(`Maior de idade.`);
} else {
  console.log(`Menor de idade.`);
}

// Saídas finais
console.log(`A funcionária ${nome}, de ${idade} anos, está no estágio ${estagio}. Documento entregue: ${documento}.`);
console.log(`Habilidades: ${habilidades}`);
