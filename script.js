var counter = 50
var timer = setInterval(function(){
    counter -= 5;
    document.querySelector("#counter").textContent = counter + ' seconds till launch';
    if(counter < 0){
        clearInterval(timer)
        alert("blast off")
    }
    if(counter < 25){
        document.querySelector("#warning").textContent = 'warning, less then haflway to blast off'
    }
},300)


/*unrelated function example */

// important queries
