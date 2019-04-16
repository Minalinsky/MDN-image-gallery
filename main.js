var showingImg = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

//loop entre as imagens
for(var i = 1; i <= 5; i++) {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImg);
  newImg.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

function displayImage(imgSrc) {
  showingImg.setAttribute('src', imgSrc);
}

//Botao de Darken/Lighten
btn.onclick = function() {
  var btnClass = btn.getAttribute('class'); 
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}