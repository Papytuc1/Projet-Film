let params = new URLSearchParams(document.location.search);//document point sur la page, location sur l'url, et search sur ce qu'il y'a apres  le ?
let name = params.get("idDeFilm");
console.log(name);

function onclickFilm(id){
    console.log('salut');
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR`,
        success: function(result){
            console.log(result);
            //image
            let img = document.createElement('img');
            img.className='uneImage';
            img.src = "https://image.tmdb.org/t/p/w500"+result.poster_path;
            //image background
            let imgBack=document.createElement('img');
            imgBack.className='backImage';
            imgBack.src = "https://image.tmdb.org/t/p/w500"+result.backdrop_path;
            //texte
            let syno = document.createElement('article');
            syno.className='synopsis';
            syno.textContent = result.overview;
            //titre
            let titre = document.createElement('h1');
            titre.className='titre';
            titre.textContent=result.title;
            $("aside").append(img);
            $("#unFilm").append(titre);
            $("#unFilm").append(syno);
            /* $("#unFilm").append(imgBack); */
      }}
      );
    };
function acteur(id){
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR`,
        success: function(credits){
            console.log(credits.cast);

        }
    });
};

    window.onload =onclickFilm(name);
    window.onload =acteur(name);