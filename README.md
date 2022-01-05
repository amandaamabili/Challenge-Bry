# Challenge-Bry





## Sobre o Projeto


 Implementar uma API REST para realizar o gerenciamento de funcionários e empresas de um sistema.
Neste cenário, cada funcionário pode pertencer a uma ou mais empresas, assim como cada empresa
pode possuir um ou mais funcionários. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Construído com


### FRONT

* [Angular](https://angular.io/)
* [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
* [TypeScript](https://www.typescriptlang.org/)

### BACK

* [PHP](https://www.php.net/)
* [Composer](https://www.npmjs.com/package/composer)
* [Laravel](https://laravel.com/)
* [PostgreSql](https://www.postgresql.org/)



### Pré-requisitos

### BACK

* npm
  ```sh
  npm install npm@latest -g
  ```

* php
  ```sh
  sudo apt install php libapache2-mod-php
  ```
* Composer
  ```sh
  npm install --save composer
  ```  
* Laravel
  ```sh
  composer create-project laravel/laravel laravelapp --prefer-dist
  ```
  
* PostgreSQL
  ```sh
  sudo apt-get -y install postgresql
  ```
  
### FRONT  
  
* Angular CLI

  ```sh
  npm install -g @angular/cli
  ```
  <br/>
  
  

### Instalação



2. Clone o repositório
   ```sh
   git@github.com:amandaamabili/Challenge-Bry.git
   ```
3. Instale Pacotes NPM
   ```sh
   npm install 
   ```

4. Rodando o Servidor
<ul> 
  <li> 
   Abra o terminal na pasta /BACK
   </li>
  <li> 
   Ela responderá na porta 8000
   </li></ul>

```sh
 php artisan serve
  
   ```

Coloque os headers Accept e ContentType para json em todas as requisições de API

A API tem os seguintes entrypoints:

=> Empresa

```sh
(GET)     http://0.0.0.0:8000/empresa/
(GET)     http://0.0.0.0:8000/empresa/{id}
(POST)    http://0.0.0.0:8000/empresa/
(PUT)     http://0.0.0.0:8000/empresa/{id}
(DELETE)  http://0.0.0.0:8000/empresa/{id}
   ```
   
GET obtém uma lista de empresas ou obtém os dados de uma única  empresa.

A API retorna um JSON com o seguinte formato:

```sh
   {
    id: uuid,
    nome: string,
    cnpj: string,
    endereco: string
    }
   ```
   
POST adiciona uma nova empresa, passe-o pelo corpo da requisição com o seguinte formato: 
 
 ```sh
   {
    nome: string,
    cnpj: string,
    endereco: string
    }
   ```
A api retornará a empresa completa como o id atribuído.

PUT altera uma empresa existente, passe o id na URL e a os dados da empresa completo pelo corpo da requisição de acordo com o formato: 
 
 ```sh
   {
    id: uuid(o mesmo passado na URL),
    nome: string,
    cnpj: string,
    endereco: string
    }
   ```
A api retornará a empresa completa que foi salva.

DELETE remove uma empresa existente, passe o id na URL.

A API retornará a lista das empresas que sobraram (igual ao GET).

```sh
   {
    id: uuid,
    nome: string,
    cnpj: string,
    endereco: string
    }
   ```
 
=> Funcionário

```sh
(GET)     http://0.0.0.0:8000/funcionarios/
(GET)     http://0.0.0.0:8000/funcionarios/{id}
(POST)   http://0.0.0.0:8000/funcionarios/
(PUT)     http://0.0.0.0:8000/funcionarios/{id}
(DELETE)  http://0.0.0.0:8000/funcionarios/{id}
   ```
GET obtém uma lista de funcionários ou obtém os dados de um único funcionário.

A API retorna um JSON com o seguinte formato:

```sh
   {
    id: uuid,
    login: string,
    nome: string,
    cpf: string,
    email: string,
    endereco: string,
    senha: string,
    empresa: integer (é do Id retornado no cadastro empresas pelo POST, é necessário ao menos uma empresa ter sido cadastrada para não dar erro 500  (Internal         Server Error já que ambas API's são relacionadas)
    }
   ```
   
POST adiciona um novo funcionário, passe-o pelo corpo da requisição com o seguinte formato: 
 
 ```sh
   {
    login: string,
    nome: string,
    cpf: string,
    email: string,
    endereco: string,
    senha: string,
    empresa: integer
    }
   ```
A api retornará o funcionário completo como o id atribuído.

PUT altera um funcionário existente, passe o id na URL e a os dados do funcionário completo pelo corpo da requisição de acordo com o formato: 
 

```sh
   {
    id: uuid,
    login: string,
    nome: string,
    cpf: string,
    email: string,
    endereco: string,
    senha: string,
    empresa: integer 
    }
   ```
A api retornará o funcionário completo que foi salvo.

DELETE remove um funcionário existente, passe o id na URL.

A API retornará a lista dos funcionários que sobraram (igual ao GET).


```sh
   {
    id: uuid,
    login: string,
    nome: string,
    cpf: string,
    email: string,
    endereco: string,
    senha: string,
    empresa: integer 
    }
   ```
   
Atenção: As rotas tem validações e retornos diferentes dependendo do resultado:

POST e PUT retornam 400 se os dados forem avaliados como falsy.

PUT também retorna 400 se o id passado na URL não for igual ao do objeto passado no corpo da requisição e 500 se o id da empresa não for encontrado.

PUT e DELETE retornam 404 se não encontrarem um funcionário ou empresa com o id passado na URL.

### Requisitos

A API deve ser usada para persistência dos dados (ela trabalha com persistência em memória) e não deve ser alterada.

6. Rodando o Front
<ul> 
  <li> 
   Abra o terminal na pasta /FRONT
   </li>
  <li> 
   Ela responderá na porta http://localhost:4200/
   </li></ul>


```sh
 ng serve  
   ```
   
  
