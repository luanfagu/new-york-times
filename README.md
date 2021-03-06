# new-york-times

## Conteudo
1. [Descrição](#descricao)
2. [Desenvolvimento](#desenvolvimento)
    1. [Utilizacao de bibliotecas](#libs)
3. [Testes](#testes)
4. [Execução da aplicação](#execucaoapp)
    1. [Instalação](#instalacao)
    2. [Execução](#execucao)

## Descrição <a name="descricao"></a>

Este projeto foi desenvolvido com o intuito de consumir a API disponibilizada pelo site de notícias The New York Times e
apresentar estas noticias 

## O Desenvolvimento <a name="desenvolvimento"></a>

Este projeto foi construido utilizando ReactJs para o frontend e NodeJs para uma API intermediária que cuida da abstração da API do NYT.

Optei por utilizar a linguagem Typescript para o desenvolvimento devido a minha familiaridade e anos de experiencia.

Pelo mesmo motivo acima optei por utilizar SCSS como linguagem para os estilos.

### Utilização de bibliotecas <a name="libs"></a>

Além das bibliotecas padrões foram utilizadas diversas bibliotecas para auxiliar no desenvolvimento da aplicação, algumas delas são: 

* **react-bootstrap** - Foi utilizada como abstração do framework CSS Bootstrap, principalmente na parte do componente de modal, onde facilitou a interação.
* **node-sass** - Foi utilizada para a interpretação da linguagem de estilos utilizada (SCSS)
* **express** - Foi utilizada para implementar a API NodeJs devido a sua simplicidade e facilidade de utilização.
* **axios** - Foi utilizada para realizar as chamadas http tanto na aplicação React quanto na aplicação NodeJs.
* **axios-mock-adapter** - Foi utilizada como auxiliar nos testes desenvolvidos para simular as chamadas do axios que foram utilizadas.

### Testes <a name="testes"></a>

Para os testes foram utilizados somente testes unitarios, para realizar a testagem do comportamento dos componentes.

Todos os testes, tanto no projeto web quanto no projeto api foram feitos utilizando a biblioteca Jest.

Optei por não desenvolver testes e2e devido ao curto tempo disponível para o desenvolvimento do projeto.

## Execução da aplicação <a name="execucaoapp"></a>

Para executar a aplicação optei por uma abordagem mais simples, onde com apenas dois comandos podemos ter a aplicação rodando.

### Instalação <a name="instalacao"></a>

O primeiro comando será para instalar as dependencias, nos dois projetos, para isso foi utilizado encadeamento de comandos. (a solução pode ser conferida no arquivo **package.json** que se encontra na raiz da aplicação)

**Yarn:**
```
yarn installer:yarn
```

**NPM:**
```
npm run installer:npm
```

### Execução <a name="execucao"></a>

Para simplificar a execução dos projetos foi utilizada uma biblioteca chamada **[concurrently](https://www.npmjs.com/package/concurrently)**, que serve para que possamos executar mais de um comando simultaneamente.

**Yarn:**
```
yarn application:yarn
```

**NPM:**
```
npm run application:npm
```

Caso deseje executar os projetos separamente foram criados os comandos:

**API:**

**Yarn:**
```
yarn api:yarn
```

**NPM:**
```
npm run api:npm
```

**Web:**

**Yarn:**
```
yarn web:yarn
```

**NPM:**
```
npm run web:npm
```