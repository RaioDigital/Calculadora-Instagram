//Calcular a formula - ((curtidas + comentarios) / seguidores) * 100
//console.log('Flavio Teste')
const curtidas = document.querySelector("#curtidas")
const comentarios = document.querySelector("#comentarios")
const seguidores = document.querySelector("#seguidores")
const resultado = document.querySelector("#resultado")

function calcular(){
  //console.log(curtidas.value)
  //console.log(comentarios.value)
  //console.log(seguidores.value)  

  resultado.value = ((parseInt(curtidas.value) + parseInt(comentarios.value)) / parseInt(seguidores.value)) * 100
  //console.log(seguidores.value)
  document.getElementById("resultado").innerHTML = resultado.value  
}

function limparCampos(){
    //agora aqui vê primeiro se não é vazio
    
}