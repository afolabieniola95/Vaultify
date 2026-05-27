
const dropdowns = document.querySelectorAll("[data-dropdown]");

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector(".dropdown-toggle");

  button.addEventListener("click", (e) => {
    e.stopPropagation();

    // close others
    dropdowns.forEach(d => d.classList.remove("active"));

    // open current
    dropdown.classList.toggle("active");
  });
});

// click outside closes all
document.addEventListener("click", () => {
  dropdowns.forEach(d => d.classList.remove("active"));
});

/*Airttime Toggle*/
const networkItems = document.querySelectorAll(".dropdown-item");
const display = document.getElementById("data-type");

networkItems.forEach(item => {
  item.addEventListener("click", () => {
    const src = item.src;
    display.innerHTML = `<img src="${src}" style="width:30px; height: 30px; border-radius: 100%;">`;
    item.closest(".dropdown").classList.remove("active");
  });
});

const flashy = document.getElementById('flashy');
const bestOffer = document.getElementById('best-offer');
const daily = document.getElementById('daily');
const dailyOffer = document.getElementById('daily-offer');
const weekly = document.getElementById('weekly');
const weeklyOffer = document.getElementById('weekly-offer');
const monthly = document.getElementById('monthly');
const monthlyOffer = document.getElementById('monthly-offer');
const nighty = document.getElementById('nighty');
const nightyOffer = document.getElementById('nighty-offer');

daily.addEventListener('click',()=>{
  daily.style.border = "1px solid navy";
  daily.style.padding = "3px";
  daily.style.borderRadius = "5px";
  daily.style.textAlign = "center";
  daily.style.background = "navy"
  daily.style.color = "white";
  daily.style.fontWeight = "bold";
  
  weekly.style.border = "none";
  weekly.style.padding = "0";
  weekly.style.borderRadius = "0";
  weekly.style.textAlign = "center";
  weekly.style.background = "white"
  weekly.style.color = "black";
  weekly.style.fontWeight = "normal";
  
  monthly.style.border = "none";
  monthly.style.padding = "0";
  monthly.style.borderRadius = "0";
  monthly.style.textAlign = "center";
  monthly.style.background = "white"
  monthly.style.color = "black";
  monthly.style.fontWeight = "normal";
  
  nighty.style.border = "none";
  nighty.style.padding = "0";
  nighty.style.borderRadius = "0";
  nighty.style.textAlign = "center";
  nighty.style.background = "white"
  nighty.style.color = "black";
  nighty.style.fontWeight = "normal";
  
  bestOffer.style.opacity  = "0";
  bestOffer.style.pointerEvents = "none";
  
  dailyOffer.style.opacity  = "1";
  dailyOffer.style.pointerEvents = "auto";
  
  weeklyOffer.style.opacity  = "0";
  weeklyOffer.style.pointerEvents = "none";
  
  monthlyOffer.style.opacity  = "0";
  monthlyOffer.style.pointerEvents = "none";
  
  nightyOffer.style.opacity  = "0";
  nightyOffer.style.pointerEvents = "none";

});
flashy.addEventListener('click',()=>{
  daily.style.border = "none";
  daily.style.padding = "0";
  daily.style.borderRadius = "0";
  daily.style.textAlign = "center";
  daily.style.background = "white"
  daily.style.color = "black";
  daily.style.fontWeight = "normal";
  
  weekly.style.border = "none";
  weekly.style.padding = "0";
  weekly.style.borderRadius = "0";
  weekly.style.textAlign = "center";
  weekly.style.background = "white"
  weekly.style.color = "black";
  weekly.style.fontWeight = "normal";
  
  monthly.style.border = "none";
  monthly.style.padding = "0";
  monthly.style.borderRadius = "0";
  monthly.style.textAlign = "center";
  monthly.style.background = "white"
  monthly.style.color = "black";
  monthly.style.fontWeight = "normal";
  
  nighty.style.border = "none";
  nighty.style.padding = "0";
  nighty.style.borderRadius = "0";
  nighty.style.textAlign = "center";
  nighty.style.background = "white"
  nighty.style.color = "black";
  nighty.style.fontWeight = "normal";
  
  bestOffer.style.opacity  = "1";
  bestOffer.style.pointerEvents = "auto";
  
  dailyOffer.style.opacity  = "0";
  dailyOffer.style.pointerEvents = "none";
  
  weeklyOffer.style.opacity  = "0";
  weeklyOffer.style.pointerEvents = "none";
  
  monthlyOffer.style.opacity  = "0";
  monthlyOffer.style.pointerEvents = "none";
  
  nightyOffer.style.opacity  = "0";
  nightyOffer.style.pointerEvents = "none";
});
weekly.addEventListener('click',()=>{
  daily.style.border = "none";
  daily.style.padding = "0";
  daily.style.borderRadius = "0";
  daily.style.textAlign = "center";
  daily.style.background = "white"
  daily.style.color = "black";
  daily.style.fontWeight = "normal";
  
  weekly.style.border = "1px solid navy";
  weekly.style.padding = "3px";
  weekly.style.borderRadius = "5px";
  weekly.style.textAlign = "center";
  weekly.style.background = "navy"
  weekly.style.color = "white";
  weekly.style.fontWeight = "bold";
  
  monthly.style.border = "none";
  monthly.style.padding = "0";
  monthly.style.borderRadius = "0";
  monthly.style.textAlign = "center";
  monthly.style.background = "white"
  monthly.style.color = "black";
  monthly.style.fontWeight = "normal";
  
  nighty.style.border = "none";
  nighty.style.padding = "0";
  nighty.style.borderRadius = "0";
  nighty.style.textAlign = "center";
  nighty.style.background = "white"
  nighty.style.color = "black";
  nighty.style.fontWeight = "normal";
  
  bestOffer.style.opacity  = "0";
  bestOffer.style.pointerEvents = "none";
  
  dailyOffer.style.opacity  = "0";
  dailyOffer.style.pointerEvents = "none";
  
  weeklyOffer.style.opacity  = "1";
  weeklyOffer.style.pointerEvents = "auto";
  
  monthlyOffer.style.opacity  = "0";
  monthlyOffer.style.pointerEvents = "none";
  
  nightyOffer.style.opacity  = "0";
  nightyOffer.style.pointerEvents = "none";
});
monthly.addEventListener('click',()=>{
  daily.style.border = "none";
  daily.style.padding = "0";
  daily.style.borderRadius = "0";
  daily.style.textAlign = "center";
  daily.style.background = "white"
  daily.style.color = "black";
  daily.style.fontWeight = "normal";
  
  weekly.style.border = "none";
  weekly.style.padding = "0";
  weekly.style.borderRadius = "0";
  weekly.style.textAlign = "center";
  weekly.style.background = "white"
  weekly.style.color = "black";
  weekly.style.fontWeight = "normal";
  
  monthly.style.border = "1px solid navy";
  monthly.style.padding = "3px";
  monthly.style.borderRadius = "5px";
  monthly.style.textAlign = "center";
  monthly.style.background = "navy"
  monthly.style.color = "white";
  monthly.style.fontWeight = "bold";
  
  nighty.style.border = "none";
  nighty.style.padding = "0";
  nighty.style.borderRadius = "0";
  nighty.style.textAlign = "center";
  nighty.style.background = "white"
  nighty.style.color = "black";
  nighty.style.fontWeight = "normal";
  
  bestOffer.style.opacity  = "0";
  bestOffer.style.pointerEvents = "none";
  
  dailyOffer.style.opacity  = "0";
  dailyOffer.style.pointerEvents = "none";
  
  weeklyOffer.style.opacity  = "0";
  weeklyOffer.style.pointerEvents = "none";
  
  monthlyOffer.style.opacity  = "1";
  monthlyOffer.style.pointerEvents = "auto";
  
  nightyOffer.style.opacity  = "0";
  nightyOffer.style.pointerEvents = "none";
});
nighty.addEventListener('click',()=>{
  daily.style.border = "none";
  daily.style.padding = "0";
  daily.style.borderRadius = "0";
  daily.style.textAlign = "center";
  daily.style.background = "white"
  daily.style.color = "black";
  daily.style.fontWeight = "normal";
  
  weekly.style.border = "none";
  weekly.style.padding = "0";
  weekly.style.borderRadius = "0";
  weekly.style.textAlign = "center";
  weekly.style.background = "white"
  weekly.style.color = "black";
  weekly.style.fontWeight = "normal";
  
  monthly.style.border = "none";
  monthly.style.padding = "0";
  monthly.style.borderRadius = "0";
  monthly.style.textAlign = "center";
  monthly.style.background = "white"
  monthly.style.color = "black";
  monthly.style.fontWeight = "normal";
  
  nighty.style.border = "1px solid navy";
  nighty.style.padding = "3px";
  nighty.style.borderRadius = "5px";
  nighty.style.textAlign = "center";
  nighty.style.background = "navy"
  nighty.style.color = "white";
  nighty.style.fontWeight = "bold";
  
  bestOffer.style.opacity  = "0";
  bestOffer.style.pointerEvents = "none";
  
  dailyOffer.style.opacity  = "0";
  dailyOffer.style.pointerEvents = "none";
  
  weeklyOffer.style.opacity  = "0";
  weeklyOffer.style.pointerEvents = "none";
  
  monthlyOffer.style.opacity  = "0";
  monthlyOffer.style.pointerEvents = "none";
  
  nightyOffer.style.opacity  = "1";
  nightyOffer.style.pointerEvents = "auto";
});

let opened = false;

const historyBtn = document.getElementById('history-btn');
const historyContainer = document.getElementById('history-container');


historyBtn.addEventListener('click', (e) =>{
  e.stopPropagation();
  
  if(!opened){
  historyContainer.style.opacity = "1";
  historyContainer.pointerEvents = "auto";
  historyContainer.style.height = "100vh";
  historyContainer.textContent = "No history";
  historyContainer.style.paddingTop = '50px';
  historyContainer.style.textAlign = 'center';
  historyContainer.style.pointerEvents = 'auto';
  }else{
  historyContainer.style.opacity = "0";
  historyContainer.pointerEvents = "none";
  historyContainer.style.height = "0";
  }
  opened = !opened;
});