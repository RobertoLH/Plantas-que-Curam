function pesquisar() {
  let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos
  //console.log(section); Loga a seção no console para fins de depuração

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value

  //se campoPesquisa for uma string sem nada
  
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado, você precisa digitar o nome da planta.</p>"
    return

  }
  campoPesquisa = campoPesquisa.toLowerCase(); 
  let resultados = ""; 
  let título = "";
  let descricao = "";
  let tags = "";
  
  
  // Inicializa uma string vazia para armazenar os resultados da pesquisa

  // Itera sobre cada dado na lista de dados e constrói o HTML para cada resultado
  
  for (let dado of dados) {
    título = dado.título.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    //se título includes campoPesquisa então faça..
       
    if (título.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria um novo elemento
      resultados += `    
      <div class="item-resultado"> 
      <h2><a href="#" target="_blank">${dado.título}</a> </h2>       
              <p class="descrição-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais Informações</a> 
              </div>     
     `;
    }  
    
    }
  if (!resultados){
      resultados  = "<p>Nada foi encontrado</p>"
  }
// Insere os resultados construídos no HTML da seção
  section.innerHTML = resultados; 
}
