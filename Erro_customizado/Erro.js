const chalk = require('chalk');

class ORM_Erro extends Error {
    constructor(mensagem) {
      super(mensagem);
      this.name = this.constructor.name;
    }
  
}
  
class ObjetoInvalido extends ORM_Erro {
    constructor(mensagem) {
        super(mensagem || chalk.red("Objeto inserido não é válido."));
    }
}

class ArrayVazio extends ORM_Erro {
    constructor(mensagem) {
        super(mensagem || chalk.red("Array está vazio. Não é possível atualizar."));
    }
}

class ObjetoNaoEncontrado extends ORM_Erro {
    constructor(mensagem) {
        super(mensagem || chalk.red("Objeto não encontrado. Não é possível atualizar."));
    }
}

module.exports = {ORM_Erro,
    ObjetoInvalido,
    ArrayVazio,
    ObjetoNaoEncontrado
};
  