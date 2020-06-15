# Este é o projeto de desafio Salesfy, etapa Backend.

Projeto de backend para dado uma requisição via query params de um numero, é retornado um json com o mesmo por extenso.

## Getting Started

### Pré-requisitos

Para usar vc precisará ter o node instalado na sua maquina, bem como o yarn, mas os comandos também podem ser executados usando o npm. Também o uso de uma maquina tendo como sistema operacional de base Linux.

### Instalação

Instalando dependências

```
yarn ou npm install
```

Executando o projeto

```
sudo yarn nodemon
```

Rodando os testes

```
yarn test
```
OBS:
Para rodar corretamente com maior produtividade para desenvolvimento, rode em terminais diferentes os seguintes comandos:

$ sudo yarn compile-watch
-- Este comando é responsável por manter seu typescript sendo compilado a cada save. Você pode acompanhar neste terminal qualquer erro de escrita no seu programa.

$ sudo yarn nodemon
-- A cada compilação bem sucedida, o Backend lança novamente e automaticamente uma nova versão no ar. Mantendo a execução sempre com a versão mais atualizada do código.

Caso esteja usando vsCode, é recomendado o uso da execução com debug, o que pode ser alcançado via arquivo launch.json. Em posse do arquivo, execute no vsCode o botão F5.


## Construido com

* [NodeJS](https://nodejs.org/en/docs/) - Plataforma da aplicação
* [Typescript](https://www.typescriptlang.org/docs/home.html) - "Linguagem"
* [Mocha](https://mochajs.org/) - Framework de teste
* [Chai](https://www.chaijs.com/) - Framework de teste

## Authors

* **Fernando Taranto** - *Initial work* - [taranto](https://github.com/taranto)
* **Gabriel de Souza** - [Gabriel3421](https://github.com/Gabriel3421)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
