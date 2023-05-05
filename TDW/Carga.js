



document.addEventListener('DOMContentLoaded', function() {
  var sesionExitosa = localStorage.getItem('sesionExitosa');
 
  const formularioLogin = document.getElementById('formulario-login');
  const logoutBtn = document.getElementById('logout-btn');
 

      if(!sesionExitosa){
        localStorage.setItem('datos', JSON.stringify(datos));
      }
      
      localStorage.setItem('login', JSON.stringify(login));
      
      construirProgramas(sesionExitosa);
      construirPersonas(sesionExitosa);
      construirEmpresas(sesionExitosa);
 
      if (!sesionExitosa) {
        console.log("Sesion no EZito");
  document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
    
    
    
      var user = document.querySelector("input[name='usuario']").value;
      var password = document.querySelector("input[name='password']").value;
      const usuarios = JSON.parse(localStorage.getItem("login"));
      const usuarioEncontrado = usuarios.find(usuario => usuario.usuario === user && usuario.password === password);
      
    
      if (usuarioEncontrado) {
        localStorage.setItem('sesionExitosa', 'true');
        alert('Inicio de sesión exitoso');
        
        formularioLogin.classList.add('d-none');
        logoutBtn.classList.remove('d-none');
      
        construirBotonesEliminar();
        construirBotonesAgregar();
    
      } else {
        alert('El correo electrónico o la contraseña son incorrectos');
      }
    
      logoutBtn.addEventListener('click', () => {
      window.location.href = "Index.html";
      });
    });
  }
  else{
    console.log("EZITO");

    formularioLogin.classList.add('d-none');
    logoutBtn.classList.remove('d-none');
  
    construirBotonesEliminar();
    construirBotonesAgregar();
  }
  });




function construirProgramas(sesionExitosa) {

  var programas = [];
  if (sesionExitosa) {
    datos = JSON.parse(localStorage.getItem("datos"));
    programas = datos.programas;
  } else {
    programas =  datos.programas;
  }

  var html = crearHTML(programas);
  document.getElementById("programas").innerHTML = html;
}


function construirPersonas(sesionExitosa) {

  var personas = [];
  if (sesionExitosa) {
    datos = JSON.parse(localStorage.getItem("datos"));
    personas = datos.personas;
  } else {
    personas =  datos.personas;
  }

  var html = crearHTML(personas);
  document.getElementById("personas").innerHTML = html;
}

function construirEmpresas(sesionExitosa) {
 
  var empresas = [];
  if (sesionExitosa) {
    datos = JSON.parse(localStorage.getItem("datos"));
    empresas = datos.empresas;
  } else {
 
    empresas =  datos.empresas;
  }

  var html = crearHTML(empresas);
  document.getElementById("empresas").innerHTML = html;
}

function crearHTML(datos) {
    var html = "";
    for (var i = 0; i < datos.length; i++) {
      html += "<p class='card-text eliminar' data-nombre='" + datos[i].nombre + "'>";
      html += "<img src='" + datos[i].imagen + "' width='10%' />";
      if (datos[i].link) {
        html += "<a class='programa-link' href='" + datos[i].link + "' onclick='guardarNombre(\"" + datos[i].nombre + "\")'>" + datos[i].nombre + "</a>";
      } else {
        html += datos[i].nombre;
      }
      html += "</p>";
    }
    return html;
  }


  function guardarNombre(nombre) {
    localStorage.setItem('Seleccionado', nombre);
  }

  function eliminarPorNombre(nombre) {
    var datosJson = localStorage.getItem('datos');
    var datos = JSON.parse(datosJson);
  
    var categoria = 'programas';
    var index = datos[categoria].findIndex(function(item) {
      return item.nombre === nombre;
    });
    
    if (index !== -1) {
      datos[categoria].splice(index, 1);
      localStorage.setItem('datos', JSON.stringify(datos));
      return true;
    } 
  
  

    index = datos.empresas.findIndex(function(item) {
      return item.nombre === nombre;
    });
    if (index !== -1) {
      datos.empresas.splice(index, 1);
      const datosJson = JSON.stringify(datos.empresas);
      localStorage.setItem('datos', datosJson);
      return true;
    }
  
    index = datos.personas.findIndex(function(item) {
      return item.nombre === nombre;
    });
    if (index !== -1) {
      datos.personas.splice(index, 1);
      const datosJson = JSON.stringify(datos.personas);
      localStorage.setItem('datos', datosJson);
      return true;
    }
  
    return false;
  }

  function construirBotonesEliminar() {
    $('.card-body .eliminar').each(function() {
      var $this = $(this);
  
      var button = $('<button/>', {
        text: 'Eliminar',
        class: 'btn btn-danger ml-2',
        click: function() { 
          var nombreEliminado = $this.attr('data-nombre');
          if (eliminarPorNombre(nombreEliminado)) {
            $(this).parent().remove();
          }
        }
      });
  
      $this.append(button);
    });
  }
  
  function construirBotonesAgregar() {
    $('.container-btn').each(function() {
      var addButton = $('<button/>', {
        text: 'Añadir elemento',
        class: 'btn btn-success mt-3',
        click: function() {
          var categoria = $(this).parent().data('categoria');
          localStorage.setItem('categoria', categoria);
          window.location.href = 'nuevo.html';
        }
      });
  
      $(this).append(addButton);
    });
  }
  
 
  

const loginForm = document.getElementById('login-form');

  

