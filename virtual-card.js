
/*Customize Card */
let isOpen = false;
    
    const customize = document.getElementById('customize-card');
    const container = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.cards');

    customize.addEventListener('click',(e)=>{
    e.stopPropagation();
    
      if(!isOpen){
      container.style.height = '100px';
      cards.forEach(cards =>{
      cards.style.display = 'block';
      });
  }else{
    container.style.height = '0px';
      cards.forEach(cards =>{
      cards.style.display = 'none';
      });
  }
     isOpen = !isOpen;
 });
 
 
 const card1 = document.getElementById('card-1');
  const card2 = document.getElementById('card-2');
  const card3 = document.getElementById('card-3');
  const card4 = document.getElementById('card-4');
  const card5 = document.getElementById('card-5');
  const virtualCard = document.querySelector('.virtual-card');
  const span = document.getElementById('span');
  
  card1.addEventListener('click', ()=>{
    virtualCard.style.backgroundImage = "url('image/card-1.jpeg')";
    virtualCard.style.color = "white";
    span.style.background = "green";
  });
  
  card2.addEventListener('click', ()=>{
    virtualCard.style.backgroundImage = "url('image/card-2.jpeg')";
    virtualCard.style.color = "white";
    span.style.background = "green";
  });
  
  card3.addEventListener('click', ()=>{
    virtualCard.style.backgroundImage = "url('image/card-3.jpeg')";
    virtualCard.style.color = "white";
    span.style.background = "green";
  });
  
  card4.addEventListener('click', ()=>{
    virtualCard.style.backgroundImage = "url('image/card-4.jpeg')";
    virtualCard.style.color = "white";
    span.style.background = "green";
  });
  
  card5.addEventListener('click', ()=>{
    virtualCard.style.backgroundImage = "url('image/card-5.jpeg')";
    virtualCard.style.color = "green";
    span.style.background = "gainsboro";
  });
  
  
  /*Card Type*/
  const cardTypeIcon = document.getElementById('card-type-icon');
  const cardType = document.querySelector('.card-type');
  
  cardTypeIcon.addEventListener('click', ()=>{
   cardType.style.height = "100vh";
  });
  
  function hello(){
  cardType.style.height = "0vh";
  }
  
  let opened = false;

const notificationBtn = document.getElementById('notification-btn');
const notificationContainer = document.getElementById('notification-container');


notificationBtn.addEventListener('click', (e) =>{
  e.stopPropagation();
  
  if(!opened){
  notificationContainer.style.opacity = "1";
  notificationContainer.pointerEvents = "auto";
  notificationContainer.style.height = "100vh";
  notificationContainer.textContent = "No notification";
  notificationContainer.style.paddingTop = '50px';
  notificationContainer.style.textAlign = 'center';
  notificationContainer.style.pointerEvents = 'auto';
  }else{
  notificationContainer.style.opacity = "0";
  notificationContainer.pointerEvents = "none";
  notificationContainer.style.height = "0";
  }
  opened = !opened;
});