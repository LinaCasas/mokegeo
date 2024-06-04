
let attackPlayer 
let attackEnemy
let livesPlayer = 3
let livesEnemy = 3

function startGame() {
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'none'
    
    let buttonMonsterPlayer = document.getElementById('button-monster')
    buttonMonsterPlayer.addEventListener('click', selectMonsterPlayer) 

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', attackFire)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', attackWater)
    let buttonEarth = document.getElementById('button-earth')
    buttonEarth.addEventListener('click', attackEarth)

    let buttonRestart = document.getElementById('button-restart')
    buttonRestart.addEventListener('click', restartGame)

}

function selectMonsterPlayer() {

    let sectionSelectMonster = document.getElementById('select-monster')
    sectionSelectMonster.style.display = 'none'
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'flex'

    let sectionRestart = document.getElementById('button-restart')
    sectionRestart.style.display = 'none'

    let inputGnar = document.getElementById('Gnar')
    let inputZork = document.getElementById('Zork')
    let inputBlix = document.getElementById('Blix') 
    let spamMonsterPlayer = document.getElementById('monster-player')
    

    if (inputGnar.checked) {
        spamMonsterPlayer.innerHTML = 'Gnar'
    }else if(inputZork.checked){
        spamMonsterPlayer.innerHTML = 'Zork'
    }else if(inputBlix.checked){
        spamMonsterPlayer.innerHTML = 'Blix'
    }else{
        alert('Please choose a monster')
    } 
    
    selectMonsterEnemy()
}

function selectMonsterEnemy() {
    let randomMonster = random(1, 3)
    let spamMonsterEnemy = document.getElementById('monster-enemy')

    if (randomMonster == 1) {
        spamMonsterEnemy.innerHTML = 'Gnar'
    } else if (randomMonster == 2){
        spamMonsterEnemy.innerHTML = 'Zork' 
    }else{
        spamMonsterEnemy.innerHTML = 'Blix'
    } 
}
function attackFire() {
    attackPlayer = '/images/fire.png'
    randomAttackEnemy()
}
function attackWater() {
    attackPlayer = '/images/water.png' 
    randomAttackEnemy()
}
function attackEarth() {
    attackPlayer = '/images/earth.png' 
    randomAttackEnemy()
}

function randomAttackEnemy (){
    let attackRandom = random(1,3)
    if (attackRandom == 1) {
        attackEnemy = '/images/fire.png' 
    } else if(attackRandom == 2){
        attackEnemy = '/images/water.png'
    }else{
        attackEnemy = '/images/earth.png'
    }
    
    combat() 
        
}

function combat(){
    let spamLivesPlayer = document.getElementById('lives-player')
    let spanLivesEnemy = document.getElementById('lives-enemy')

    if (attackEnemy == attackPlayer) {
        createMessage("It's a tie!")

    }else if(attackPlayer == '🔥' && attackEnemy == '🌱'){
        createMessage(  "Player wins!")
        livesEnemy--
        spanLivesEnemy.innerHTML = livesEnemy

    }else if ( attackPlayer == '💧' && attackEnemy == '🔥'){
        createMessage("Player wins!") 
        livesEnemy--
        spanLivesEnemy.innerHTML = livesEnemy 

    }else if (attackPlayer == '🌱' && attackEnemy == '💧') {
        createMessage(" Player wins!")
        livesEnemy--
        spanLivesEnemy.innerHTML = livesEnemy

    }else{
        createMessage("Enemy wins!")
        livesPlayer--
        spamLivesPlayer.innerHTML = livesPlayer
    }

    checkLives()

}

function checkLives() {
    if (livesEnemy == 0 ) {
        createFinalMessage(' 🏆 CONGRATULATIONS, YOU WIN 🏆 ')
    }else if (livesPlayer ==0) {
        createFinalMessage(' 😢 GAME OVER, YOU LOSE  😢')
        
    } 
}

function createMessage(result) {

    let sectionMessage = document.getElementById('result')
    let attackPlayer = document.getElementById('attack-player')
    let attackEnemy = document.getElementById('attack-enemy')

    let newAttackPlayer = document.createElement('p')
    let newAttackEnemy = document.createElement('p')
    
    sectionMessage.innerHTML = result
    newAttackPlayer.innerHTML = attackPlayer
    newAttackEnemy.innerHTML = attackEnemy
   
    attackPlayer.appendChild(newAttackPlayer)
    attackEnemy.appendChild(newAttackEnemy)

    }


function createFinalMessage(finalResult) {

    let sectionMessage = document.getElementById('result')
    sectionMessage.innerHTML = finalResult
     
        
    let buttonFire = document.getElementById('button-fire')
    buttonFire.disabled = true
    let buttonWater = document.getElementById('button-water')
    buttonWater.disabled = true
    let buttonEarth = document.getElementById('button-earth')
    buttonEarth.disabled = true

    let sectionRestart = document.getElementById('button-restart')
    sectionRestart.style.display = 'block'
    }

function restartGame() {
    location.reload()
}


function random(min, max) {
    return Math.floor(Math.random() *(max - min + 1) + min)  
}

window.addEventListener('load', startGame)
