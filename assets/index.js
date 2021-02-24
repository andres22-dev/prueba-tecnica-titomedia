addEventListener('DOMContentLoaded', () => {

  const botonMenu = document.querySelector('#buttonR');
  if(botonMenu){

    botonMenu.addEventListener('click', () =>{

      const menuItems = document.querySelector('#items');
      menuItems.classList.toggle('show');

    })

  }


})