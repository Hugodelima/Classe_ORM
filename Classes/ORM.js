const chalk = require('chalk');
const {ORM_Erro,
    ObjetoInvalido,
    ArrayVazio,
    ObjetoNaoEncontrado} = require('../Erro_customizado/Erro');

class ORM {
  constructor() {
    if (this.constructor === ORM) {
        throw new ORM_Erro(chalk.red('Classe abstrata não pode ser instancia diretamente'))
    }
  }

  static criar(objeto) {
    if (typeof objeto !== 'object' || objeto === null) {
      throw new ObjetoInvalido();
    }

    try {
      this.id++;
      const novoObjeto = { id: this.id, ...objeto };
      this.vetor.push(novoObjeto);
    } catch (error) {
      console.error(chalk.red(error.message));
    }
  }
  static remover(id){
    if (typeof id !== 'number' || id < 1) {
      throw new ObjetoInvalido();
    }

    if (this.vetor.length === 0) {
      throw new ArrayVazio();
    }
    try{
      this.vetor.forEach(element => {
        if (element.id === this.id){
          this.vetor.splice(id-1, 1);
        }
      })
    }catch (error) {
      console.error(chalk.red(error.message));
    }
  };

  static atualizar(id, objeto) {
    if (this.vetor.length === 0) {
      throw new ArrayVazio();
    }

    const elemento = this.vetor.find(element => element.id === id);

    if (!elemento) {
      throw new ObjetoNaoEncontrado();
    }

    try {
      const objetoAtualizado = { id, ...objeto };
      this.vetor[id - 1] = objetoAtualizado;
    } catch (error) {
      console.error(chalk.red(error.message));
    }
  }

  static listar() {
    if (this.vetor.length === 0) {
      throw new ArrayVazio();
    }

    try {
      console.log(chalk.green('--- ' + this.name + ' ---'));
      console.table(this.vetor);
    } catch (error) {
      console.error(chalk.red(error.message));
    }
  }
}

module.exports = ORM;