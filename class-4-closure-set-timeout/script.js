function x(){

    var a = 8;

    function y(){
        console.log(a);
    }
    
    return y;
}

var z = x();


z();