
/* Efecto en los DIV del CV */

const divs = document.querySelectorAll('formatosec3');

divs.forEach((div) => {
  const originalBackgroundColor = div.style.backgroundColor;
  const originalBorder = div.style.border;

  div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = 'turquoise';
    div.style.border = '5px solid black';
  });

  div.addEventListener('mouseleave', () => {
    div.style.backgroundColor = originalBackgroundColor;
    div.style.border = originalBorder;
  });
});


/* Botones de redes sociales */

const facebookLink = document.querySelector('a[href="https://www.facebook.com/DanyLagger"]');
facebookLink.addEventListener('click', function(event) {
  event.preventDefault(); // previene que el enlace se abra automáticamente
  
  window.open(this.href, '_blank'); // abre la página de Facebook en una nueva ventana
});



const instagramLink = document.querySelector('a[href="https://www.instagram.com/laggerdaniel/"]');
instagramLink.addEventListener('click', function(event) {
  event.preventDefault(); // previene que el enlace se abra automáticamente
  
  window.open(this.href, '_blank'); // abre la página de Facebook en una nueva ventana
});


const twitterLink = document.querySelector('a[href="https://twitter.com/laggerdaniel"]');
twitterLink.addEventListener('click', function(event) {
  event.preventDefault(); // previene que el enlace se abra automáticamente
  
  window.open(this.href, '_blank'); // abre la página de Facebook en una nueva ventana
});



/* Botones de subir */

// Cuando el usuario hace scroll hacia abajo 20px desde la parte superior de la página, mostrar el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, volver arriba de la página
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
