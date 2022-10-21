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
    //readMore.innerHTML = "Troyka Biog";
}

let close = function() {
    troykaBiog.style.display = 'none';
    closeTroyka.style.display = 'none';
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
}

let closeStrobesBiog = function() {
    strobesBiog.style.display = 'none';
    closeStrobes.style.display = 'none';
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
}

let closeSizeBiog = function() {
    sizeBiog.style.display = 'none';
    closeSize.style.display = 'none';
}

readMoreSize.addEventListener('click', openSizeBiog);
closeSize.addEventListener('click', closeSizeBiog);