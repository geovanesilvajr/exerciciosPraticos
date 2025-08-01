const usuario = {
  nome: "Carlos",
  idade: 28,
  profissao: "Desenvolvedor",
  endereco: {
    cidade: "São Paulo",
    pais: "Brasil",
  },
};

const habilidades = ["Javascrip", "React", "Node.js", "CSS"];

const {
  nome,
  idade,
  endereco: { cidade },
  email = "Não informado",
} = usuario;

const [primaria, secundaria, ...outros] = habilidades;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(email);
console.log(primaria);
console.log(secundaria);
console.log(outros);
