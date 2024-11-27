// Récupération des éléments HTML5
const zoomableContainer = document.querySelector(".zoomable__container");
const zoomableImg = document.querySelector(".zoomable__container__img");

// Déclaration de la fonction imageZoom qui va permettre de zoome sur l'image
const imageZoom = (e) => {
  const zoomableContainerInfo = zoomableContainer.getBoundingClientRect(); // Donne des informations sur la taille et la position de l'élément par rapport au viewport

  // Position sur x de la souris dans le container
  const x = e.clientX - zoomableContainerInfo.left;
  // Position sur y de la souris dans le container
  const y = e.clientY - zoomableContainerInfo.top;
  //console.log(x, y);

  // Position sur X en pourcentage
  const positionXInContainer = (x / zoomableContainerInfo.width) * 100;
  // Position sur Y en pourcentage
  const positionYInContainer = (y / zoomableContainerInfo.height) * 100;
  // console.log(positionXInContainer, positionYInContainer);

  zoomableImg.style.transformOrigin = `${positionXInContainer}% ${positionYInContainer}%`;
};

// Ecoute de l'événement "mousemove" et appel de la fonction imageZoom
zoomableContainer.addEventListener("mousemove", imageZoom);
