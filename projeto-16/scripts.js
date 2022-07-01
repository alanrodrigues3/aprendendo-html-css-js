const URL_BASE_DO_GOOGLE_SEARCH = "https://www.google.com/search?q=";
const URL_BASE_DO_GOOGLE_DOODLES = "https://www.google.com/doodles";
const URL_INSTAGRAM_PROFILES = "https://www.instagram.com/ewallann/";
/**
 * Pesquisa no google através do campo digitado na barra de pesquisa
 */
function pesquisarNoGoogle() {
  // Pega o valor do campo pelo ID
  // let barraDePesquisa = document.getElementById("pesquisa");

  // Pega pelo nome do campo
  // let barraDePesquisa = document.getElementsByName("barra")[0];

  // Pega pela class
  // let barraDePesquisa = document.getElementsByClassName('barra-de-pesquisa')[0];

  // Pega o elemento do HTML pelo seletor (neste caso # -> ID)
  let barraDePesquisa = document.querySelector("#pesquisa");

  // Pega o valor do campo selecionado acima
  let valorDoCampo = barraDePesquisa.value;

  // Tipos de igualdade
  // = -> Atribuição
  // == -> comparação
  // === -> comparação (também do tipo)

  // Estrutura condicional
  if (valorDoCampo == "") {
    alert("Por favor, digite a pesquisa antes de continuar!");
  } else {
    console.log("barraDePesquisa", barraDePesquisa);
    console.log("valorDoCampo", valorDoCampo);

    // Redirecionamento para o site do Google
    let url = URL_BASE_DO_GOOGLE_SEARCH + valorDoCampo;
    window.location.replace(url);
  }
}

/**
 * Envia para a página do Google doodles
 */
function estouComSorte() {
  const url = URL_BASE_DO_GOOGLE_DOODLES;
  window.location.replace(url);
}

//*/

function Instagram() {
  const url = URL_INSTAGRAM_PROFILES;
  window.location.replace(url);
}
