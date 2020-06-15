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
Obs: Porta usada foi 3002

Rodando os testes

```
yarn test
```
OBS:
Para rodar corretamente com maior produtividade para desenvolvimento, rode em terminais diferentes os seguintes comandos:

$ sudo yarn compile-watch
* Este comando é responsável por manter seu typescript sendo compilado a cada save. Você pode acompanhar neste terminal qualquer erro de escrita no seu programa.

$ sudo yarn nodemon
* A cada compilação bem sucedida, o Backend lança novamente e automaticamente uma nova versão no ar. Mantendo a execução sempre com a versão mais atualizada do código.

Caso esteja usando vsCode, é recomendado o uso da execução com debug, o que pode ser alcançado via arquivo launch.json. Em posse do arquivo, execute no vsCode o botão F5.

## Exemplo de uso

  Após ter iniciado o servidor abra seu navegador e digite

  ```
  http://localhost:3002/?translate=1000
  ```
  no exemplo acima temos representado 1000 mas pode ser qualquer número entre 0 e 999 nonilhões

## Decisões/Detalhes de implementação

* Por motivos de maior facilidade de implementação, quando os números são recebidos eles sao quebrados de 3 em 3 para a classificação por unidade, dezena e centenas; após essa classificação ele passa pela classificação de unidades de milhar, milhões e etc.

* Por escolha minha o maior número possível foi de 999 nonilhões, pois considerei que abrangeria a maioria dos casos em que os usuários poderiam ter interesse.


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
