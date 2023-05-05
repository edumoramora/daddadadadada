$(document).ready(function() {
    
var categoria = localStorage.getItem("categoria");

if (categoria === 'personas') {
    var lugarForm = `
    </br>
      <div class="form-group">
        <label class="label" for="lugar">Lugar:</label>
        <input type="text" class="form-control" id="lugar" placeholder="Ingrese el lugar de nacimiento">
      </div>
    `;
    
    $(lugarForm).insertAfter('#Fecha');
  
  }

  $('#formAgregar').submit(function(event) {
    event.preventDefault(); 
    console.log("1");

    var nombre = $('#nombre').val();
    var imagen = $('#imagen').val();
    var fecha = $('#Fecha').val();
    var lugar = $('#lugar').val();
    var wiki = $('#wiki').val();

    var objeto = {
        "nombre": nombre,
        "imagen": imagen,
        "fecha": fecha,
        "wiki": wiki
    };

    if(categoria === 'personas'){
        objeto["lugar"] = lugar;
    }

  
    var datosJson = localStorage.getItem('datos');
    var datos = JSON.parse(datosJson);
    var arreglo = datos[categoria];

    
    arreglo.push(objeto);

    datos[categoria] = arreglo;
    localStorage.setItem('datos', JSON.stringify(datos));

    alert('Los datos se han guardado correctamente.');

    window.location.href = 'index.html';
});
  
});
