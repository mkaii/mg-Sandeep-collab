// I want to print 1 in 1 sec, 2 in 2 sec,  3 in 3 sec so on till 5 

function x(){

    for(let i=1; i <= 5 ;i++){
        setTimeout(function(){
            console.log(i)
        }, i*1000)
    }

    console.log("sandeep testing var in a loop")
}

x();

// async code is pushed to a queue
// js is single threaded , it doesnt wait for anyone



