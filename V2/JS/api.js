/* var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR&sort_by=with_genres=18%26primary_release_year=2014&include_adult=true&include_video=true&page=2');
xhr.onload = function() {
    if (xhr.status === 200) {
        var e =JSON.parse(xhr.responseText);
        console.log('coucou');
        e.results.forEach(element =>{
            let article = document.createElement('article');
            let para = document.createElement('p');
            para.textContent="titre"+element.title;
            article.appendChild(para);
            document.querySelector('#film').appendChild(article);
        })
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
}; */
let article;
let para;
let img;
let div;
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        
      if (this.readyState == 4 && this.status == 200) {    
          let e = JSON.parse(this.responseText);
          console.log(e);
          e.results.forEach(element =>{
             article = document.createElement('article');
             // texte
             para = document.createElement('p');
             para.textContent= element.title;
             para.classList='titre';
             desc = document.createElement('p');
             desc.textContent= element.overview;
             // image
             img = document.createElement('img');
             img.src="https://image.tmdb.org/t/p/w200"+element.poster_path;
             div = document.createElement('div'); // grande
             div.classList = 'desciption-film';
             
             article.onmouseenter = function(){
                 this.querySelector('img').style.visibility ='hidden';           
                this.querySelector('div').style.visibility ='visible';
            }
            article.onmouseleave=function(){
                this.querySelector('img').style.visibility ='visible';  
                this.querySelector('div').style.visibility ='hidden';
            }
           
            article.appendChild(img);
            article.className ='taille';                     
            div.appendChild(para);
            div.appendChild(desc);
            article.appendChild(div);
            document.querySelector('#film').appendChild(article);
        })
      }
    };
    xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR&sort_by=with_genres=18%26primary_release_year=2014&include_adult=true&include_video=true&page=2", true);
    xhttp.send();
   
  };
 /*  var test = document.querySelectorAll('article');
  test.onmouseenter=function(){
        img.style.display ='hidden';
}  */
loadDoc();
/* $('img').hover(
    function(){
        console.log('salut')
    }
); */
