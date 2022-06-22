
    var counter = 50;
    setInterval(function(e){
        if(counter >= 0){
            document.querySelector("#counter").innerText = 'blast off in ' + counter;
            counter -= 10
            console.log(document.querySelector("#counter").innerText)
            console.log(counter)
        }
        if(counter < 0){
            //alert('blasssssst off')
        }
    },1000)\