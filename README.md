# ::ng-deep

Alterações feitas no css de um component não alteram o css do component filho, pois há o view encapsulation. para isso é usado ::ng-deep

::ng-deep .card-cancel-button{
  background-color: red !important;
} = Fará com que todos os components (globalmente), que possuam a classe especificada recebam o background, é possivel fazer um filtro mais seletivo
por meio da seleção do css

# :host
usando junto com o ::ng-deep para que as alterações permaneçam apenas 
no component utilizado, afeta apenas os components filhos e os elementos
do host

# :host ::ng-deep
Util quando desejamos alterar os components vindos de bibliotecas

# view encapsulation 

`none`: faz com que o css de um component afete todos os outros components


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
