const Pessoa = require("./Classes/Pessoa");
const Carro = require("./Classes/Carro");

Pessoa.criar('gdfsg');
Pessoa.criar({ nome: 'Bob', idade: 25, cidade: 'Rio de Janeiro', email: 'bob@example.com', telefone: '987-654-3210' });
Pessoa.criar({ nome: 'Carol', idade: 28, cidade: 'Belo Horizonte', email: 'carol@example.com', telefone: '555-123-4567' });

Pessoa.atualizar(3, {nome:'pessoa teste'})

Pessoa.remover(2)

Pessoa.listar()


/*-------------------------------------------------------------------------*/



Carro.criar({ marca: 'Toyota', modelo: 'Corolla', ano: 2022 });
Carro.criar({ marca: 'Ford', modelo: 'Mustang', ano: 2021 });
Carro.criar({ marca: 'Honda', modelo: 'Civic', ano: 2023 });

Carro.atualizar(3, { marca: 'Tesla', modelo: 'Model Y', ano: 2022 })

Carro.remover(2)

Carro.listar()