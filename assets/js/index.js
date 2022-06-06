var listaGuias = [
    {
        id: 1,
        nome: 'JavaScript',
        descricao: ' Consiste em uma das linguagens de programação mais populares do mundo',
        imgUrl: "assets/img/javascript1.png"
    },

    {
        id: 2,
        nome: 'HTML e CSS',
        descricao: ' Consiste em uma das linguagens de programação mais populares do mundo',
        imgUrl: "assets/img/css1.png"
    },

    {
        id: 3,
        nome: 'NodeJs',
        descricao: ' Consiste em uma das linguagens de programação mais populares do mundo',
        imgUrl: "assets/img/nodejs.png"
    },

    {
        id: 4,
        nome: 'Banco de Dados',
        descricao: ' Consiste em uma das linguagens de programação mais populares do mundo',
        imgUrl: "assets/img/mysql.png"
    }

];

document.addEventListener('DOMContentLoaded', function() {
    // Obtém a div.class = 'produtos-lista'
    var coluna1 = document.querySelector('.guias');
    // Obtém a div.id = 'listaProd'
    var divRow = document.getElementById('listaGuias');
    
    // Percorrer todo array de produtos
    for (var i = 0; i < listaGuias.length; i++) {
  
      // Clona coluna 1 e cria uma nova div
      var colunaClone = coluna1.cloneNode(true);
      // Procura dentro da div clonada pelo elemento que tem a class = card
      var card = colunaClone.querySelector('.card');
  
      // Procura pelo elemento que tem a tag img e remove de dentro do array
      var img = card.getElementsByTagName('img')[0];
      img.setAttribute('src', listaGuias[i].imgUrl)
  
      var cardTitle = card.getElementsByClassName('card-title')[0];
      cardTitle.innerHTML = listaGuias[i].nome;
  
      // INCLUIR DESCRICAO E VALOR no CARD
      var p = card.getElementsByClassName('card-text')[0];
      var span = p.getElementsByTagName('span')[0];
  
      p.innerHTML = listaGuias[i].descricao
      p.appendChild(span)
  
      divRow.appendChild(colunaClone);
    }
  
    coluna1.style.display = 'none';
});

