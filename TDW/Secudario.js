var nombreSeleccionado = localStorage.getItem('Seleccionado');


var datos = JSON.parse(localStorage.getItem('datos'));

console.log(datos);

var seleccionado = datos.programas.find(programa => programa.nombre === nombreSeleccionado)
                   || datos.personas.find(persona => persona.nombre === nombreSeleccionado)
                   || datos.empresas.find(empresa => empresa.nombre === nombreSeleccionado);
console.log(seleccionado);




function construirIndex() {
    var html = ""; 
    html += '<p class="card-text eliminar">';
    html += '<h3 class="card-title">' + seleccionado.nombre + '</h3>';
    html += '<p class="card-text">' + seleccionado.fecha + '</p>';
    html += '<p class="text-center">';
    html += '<img src="' + seleccionado.imagen + '" width="200px" class="img-fluid"/>';
    html += '</p>';

    document.getElementById("seleccionado").innerHTML = html;
    document.getElementById("seleccionadoWiki").src = seleccionado.wiki;

  }

  $(document).ready(function() {
    $('#inicio').click(function(event) {
      event.preventDefault();
      window.location.href = 'index.html';
    });
  });
  