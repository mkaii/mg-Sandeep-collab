var a = 10; 
const c = 100;

function x(){
    const c = 10;

    {
        const c = 0;
        console.log(c)
        var a = 20;
        console.log(a);


        {
            console.log(c);
        }

    }

    console.log("Mainak creating a scenario")

    

    console.log(c)
}



x();
console.log(c)