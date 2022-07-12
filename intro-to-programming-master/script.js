
    var counter = 50;
    setInterval(function(e){
        if(counter >= 0){
            document.querySelector("#counter").innerText = 'blast off in ' + counter;
            counter -= 5
            //console.log(document.querySelector("#counter").innerText)
            //console.log(counter)
        }
        if(counter < 25){
            document.querySelector("#warning").textContent = 'less then 1/2 time left'
        }
        if(counter < 0){
            //alert('blasssssst off')
        }
    },1000)
    document.querySelector("#enter").addEventListener("click",function(e){
        if(document.querySelector("#first-name").children[0].value.length > 2 
            && 
            document.querySelector("#last-name").children[0].value.length > 2 
            ){
                console.log(document.querySelector("#overlay-login").style.display = 'none')
        }
    })
