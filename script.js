const moreCount = document.querySelector("#increment");
const lessCount = document.querySelector("#decrement");
const count = document.querySelector("#count");

let counter = 0;

function incrementCount(){
moreCount.addEventListener("click", function(){
    counter++;
    console.log(counter);
    displayCount(counter);
})

}

function decrementCount(){
    lessCount.addEventListener("click", function(){
        counter--;

        if(counter >= 0){
        console.log(counter);
        displayCount(counter);
        }
        else {alert("Negative counter is restricted!!!")}
    })
    
    }


function displayCount(num) {
    count.textContent = num;
}

incrementCount();
decrementCount();