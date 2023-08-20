fetch('./src/public/js/next.json') 
  .then(response => response.json()) 
  .then(data => {
    const nextGame = document.querySelector('#nextGame');

    data.forEach(i => {
      let p = document.createElement('p');
      p.classList.add('titleNextGame');
      p.innerHTML = i.title
      nextGame.appendChild(p)
     })
  })

  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });




