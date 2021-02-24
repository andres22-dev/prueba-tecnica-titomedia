const url = `https://rickandmortyapi.com/api/character/`;

const maximun = 1;
const minimun = 20;
const random = () => Math.floor(Math.random()*(maximun - minimun)+ minimun);
const search = document.querySelector('#search');
const searchClass = document.querySelector('.items__search');
const searchKeyword = document.querySelector('#searchKeyword');

const searchSomething = () => {

  if(searchKeyword.style.display === 'none'){

    searchKeyword.style.display = 'block';
    
    

  }else{


    searchKeyword.style.display = 'none';
    

  }

}
searchClass.addEventListener('click',searchSomething);

const petitionCharacter = async (url) =>{

  const petition = await fetch(url);
  const response = await petition.json();
  const character = await response;

  return character;

}

const addCharacter = async() =>{

  const rick = await petitionCharacter(`${url}`);
  //const img = document.querySelector('#img1')
  const containers = document.querySelectorAll('.portafolio__item');
  let array = [...containers];

  array.forEach(container=>{
    let createImage = document.createElement('img');
    createImage.src = rick.results[random()].image;
    container.append(createImage);
  }) 

  
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
