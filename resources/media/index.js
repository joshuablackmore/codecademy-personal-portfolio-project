const newDrummingText = document.querySelector('p')
newDrummingText.innerHTML = "When I first taught myself the drums I played open handed"

const newTextForTroykaButton = document.getElementById('troyka-close');
newTextForTroykaButton.innerHTML = "Close Troyka Video";




//Troyka box open and close function

let readMoreTroyka = document.getElementById('read-more-troyka');
let troykaBiog = document.getElementById('troyka-biog');
let closeTroyka = document.getElementById('troyka-close');

let open = function() {
    troykaBiog.style.display = 'block';
    closeTroyka.style.display = 'block';
    readMoreTroyka.style.display = 'none';
    //readMore.innerHTML = "Troyka Biog";
}

let close = function() {
    troykaBiog.style.display = 'none';
    closeTroyka.style.display = 'none';
    readMoreTroyka.style.display = 'block';
    //readMore.innerHTML = "2007-2017";
}

readMoreTroyka.addEventListener('click', open);
closeTroyka.addEventListener('click', close);

//Stobes box open and close

let readMoreStrobes = document.getElementById('read-more-strobes');
let strobesBiog = document.getElementById('strobes-biog');
let closeStrobes = document.getElementById('strobes-close');

let openStrobesBiog = function() {
    strobesBiog.style.display = 'block';
    closeStrobes.style.display = 'block';
    readMoreStrobes.style.display = 'none';
}

let closeStrobesBiog = function() {
    strobesBiog.style.display = 'none';
    closeStrobes.style.display = 'none';
    readMoreStrobes.style.display = 'block';
}

readMoreStrobes.addEventListener('click', openStrobesBiog);
closeStrobes.addEventListener('click', closeStrobesBiog);

//SiZE box open and close

let readMoreSize = document.getElementById('read-more-size');
let sizeBiog = document.getElementById('size-biog');
let closeSize = document.getElementById('size-close');

let openSizeBiog = function() {
    sizeBiog.style.display = 'block';
    closeSize.style.display = 'block';
    readMoreSize.style.display = 'none';
}

let closeSizeBiog = function() {
    sizeBiog.style.display = 'none';
    closeSize.style.display = 'none';
    readMoreSize.style.display = 'block';
}

readMoreSize.addEventListener('click', openSizeBiog);
closeSize.addEventListener('click', closeSizeBiog);

// Oasis box open and close

let readMoreOasis = document.getElementById('read-more-oasis');
let oasisBiog = document.getElementById('oasis-biog');
let closeOasis = document.getElementById('oasis-close');

let openOasisBiog = function() {
    oasisBiog.style.display = 'block';
    closeOasis.style.display = 'block';
    readMoreOasis.style.display = 'none';
    
}

let closeOasisBiog = function() {
    oasisBiog.style.display = 'none';
    closeOasis.style.display = 'none';
    readMoreOasis.style.display = 'block';

}

readMoreOasis.addEventListener('click', openOasisBiog);
closeOasis.addEventListener('click', closeOasisBiog);


// timer thing

const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "01-04-2022";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000 / 60
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);


// burger menu

const menu = document.querySelector(".nav-items");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )