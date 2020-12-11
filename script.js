//function defintions
function removeVisibleClass(){
    imposters.forEach(function(imposter){
        imposter.classList.remove("visible")
    });
}
function decrementcounter(){
    //initialize counter
    let counter = 20
    //start interval 
    let id = setInterval( test, 1000);

    function test (){
        counter -=1;
        imposters__voting.innerHTML = `Voting Ends In: <span>${counter}</span>s`;
        if(counter===10) {
            imposters__voting.style.color = "red"
        }
        
        if(counter === 0){
        clearInterval(id);
        imposters__voting.innerHTML = "Voting Has Ended"
    }
}}

//Dom Cache
let imposters = document.querySelectorAll('.imposter');
let imposters__voting = document.querySelector('.imposters__voting');

imposters.forEach( function(imposter){
    imposter.addEventListener('click', function(event) {
        let imposter = event.target;
        removeVisibleClass();
        imposter.classList.add("visible");
    })    
});

//
decrementcounter();




