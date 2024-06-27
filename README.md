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

none: faz com que o css de um component afete todos os outros components
