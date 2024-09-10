// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()



let apText = document.querySelector('.ap-text');
let apMeter = document.getElementById('ap-meter');
let hpText = document.querySelector('.hp-text');
let hpMeter = document.getElementById('hp-meter');
let fungusElement = document.querySelector('.freaky-fungus');

let attackButtons = document.querySelectorAll('.attack-btn');

let playerAP = 100;
let fungusHP = 100;

const attacks = {
    'arcane-scepter': { apCost: 12, damage: 14 },
    'entangle': { apCost: 23, damage: 9 },
    'dragon-blade': { apCost: 38, damage: 47 },
    'star-fire': { apCost: 33, damage: 25 }
};

function attack(event) {
    let attackType = event.target.classList[1]; 

    playerAP = Math.max(playerAP - attacks[attackType].apCost, 0);
    fungusHP = Math.max(fungusHP - attacks[attackType].damage, 0);

    

    renderTotalAP();
}

function renderTotalAP() {
    apText.textContent = `${playerAP} AP`;
    apMeter.value = playerAP;
    hpText.textContent = `${fungusHP} HP`;
    hpMeter.value = fungusHP;
    
    if (fungusHP === 0) {
        fungusElement.classList.remove('walk');
        fungusElement.classList.add('dead');
        disableAttackButtons();
        alert('You win!');
    } else if (playerAP === 0) {
        fungusElement.classList.remove('walk');
        fungusElement.classList.add('jump');
        disableAttackButtons();
        alert('You lose!');
    }
}

function disableAttackButtons() {
    attackButtons.forEach(button => button.disabled = true);
}

attackButtons.forEach(button => {
    button.addEventListener('click', attack);
});

renderTotalAP();
