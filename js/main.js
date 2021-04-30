document.getElementById('formulario').addEventListener('submit', pesquisarPersonagem);

function pesquisarPersonagem (e){
	
	var personagemPesquisar = document.getElementById('pesquisar').value;
    buscarpersonagem(personagemPesquisar);
	e.preventDefault();
}

function buscarpersonagem(personagemPesquisar){

// Procura por nome
axios.get('https://rickandmortyapi.com/api/character/?name=' + personagemPesquisar)
  .then(function (response) {
    // handle success
    console.log(response);
    var personagem = response.data.results;
     var mostrarPersonagem = '';
    
    for(var i =0;i<personagem.length; i++){
        mostrarPersonagem += `
<div class ="col-sm-6 col-md-4">
<div class="thumbnail">
<img src="${personagem[i].image}" class="img-thumbnail">
<h4>${personagem[i].name}</h4>
<p><a href="#" class="btn btn-primary">Ver Detalhes</a></p>    
</div>
</div>`;
    }
    
    document.getElementById('personagem').innerHTML = mostrarPersonagem;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Procura por status
 axios.get('https://rickandmortyapi.com/api/character/?status=' + personagemPesquisar)
  .then(function (response) {
    // handle success
    console.log(response);
     var personagem = response.data.results;
     var mostrarPersonagem = '';
    
    for(var i =0;i<personagem.length; i++){
        mostrarPersonagem += `
<div class ="col-sm-6 col-md-4">
<div class="thumbnail">
<img src="${personagem[i].image}" class="img-thumbnail">
<h4>${personagem[i].name}</h4>
<p><a href="#" class="btn btn-primary">Ver Detalhes</a></p>    
</div>
</div>`;
    }
    
    document.getElementById('personagem').innerHTML = mostrarPersonagem;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    
    //Procura por gênero
    axios.get('https://rickandmortyapi.com/api/character/?gender=' + personagemPesquisar)
  .then(function (response) {
    // handle success
    console.log(response);
    var personagem = response.data.results;
     var mostrarPersonagem = '';
    
    for(var i =0;i<personagem.length; i++){
        mostrarPersonagem += `
<div class ="col-sm-6 col-md-4">
<div class="thumbnail">
<img src="${personagem[i].image}" class="img-thumbnail">
<h4>${personagem[i].name}</h4>
<p><a href="#" class="btn btn-primary" role="button">Ver Detalhes</a></p>    
</div>
</div>`;
    }
    
    document.getElementById('personagem').innerHTML = mostrarPersonagem;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}