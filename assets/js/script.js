// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName('button');

    //for(let i=0; i < button.length; i++)
    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('You clicked the Submit button');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`you have clicked ${gameType}`);
            }
        });
    }
});

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
    
}