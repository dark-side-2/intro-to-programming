alert('welcome')
var mainContent = document.querySelector('#content')
function randomNumber(n1,n2){
    var n1=n1 ,
        n2=n2
    return  Math.floor(Math.random()*(n2-n1))+n1
    
}
function chainRandomNumber(i,p,c,m,t){
    var initialRotation = i,// repeat first round
     probability = p, // rangin from 1-100 the passing value that determines if the iteration of loop passes
     continuation = c, // true/false the passed iteration gets passed down to be used as initialRotation for looping again.
     total = t
     condition = m,
     total += i
     passed = 0;
    for(let i = initialRotation; i >0;i--){
        var workingFile = randomNumber(1,100)
        if(randomNumber(1,100)<=probability){
            total++;
            passed++;
        }
    }
    console.log(passed + ' passed out of'+ initialRotation);
    console.log('total is ' + total)  
    
    if(passed >= 1){
        if(continuation){
            chainRandomNumber(passed,probability*condition,continuation,condition,total);
        }
    }else{
        console.log('thats it')
        console.log(total)
        return {
            'total' : total
        }
    } 
}
//console.log(chainRandomNumber(1000,50,true,1,0))