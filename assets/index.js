const url = `https://rickandmortyapi.com/api/character/`;




const petitionCharacter = async (url) =>{

  const petition = await fetch(url);
  const response = await petition.json();
  const character = await response;

  return character;

}

const addCharacter = async() =>{

  const rick = await petitionCharacter(`${url}1`);
  const img = document.querySelector('#img1')
  const createImage = document.createElement('img');
  createImage.src = rick.image
  img.append(createImage);
  
  

  
}

addCharacter();

addEventListener('DOMContentLoaded', () => {

  const botonMenu = document.querySelector('#buttonR');
  if(botonMenu){

    botonMenu.addEventListener('click', () =>{

      const menuItems = document.querySelector('#items');
      menuItems.classList.toggle('show');

    })

  }


})
