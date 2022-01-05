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
(POST)   http://0.0.0.0:8000/empresa/
(PUT)     http://0.0.0.0:8000/empresa/{id}
(DELETE)  http://0.0.0.0:8000/empresa/{id}
   ```
=> Funcionário

```sh
(GET)     http://0.0.0.0:8000/funcionarios/
(POST)   http://0.0.0.0:8000/funcionarios/
(PUT)     http://0.0.0.0:8000/funcionarios/{id}
(DELETE)  http://0.0.0.0:8000/funcionarios/{id}
   ```

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
   
  
