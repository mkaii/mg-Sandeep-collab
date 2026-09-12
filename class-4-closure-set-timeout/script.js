let m = 1;


{

 var a = 10; // hoisted in global scope 
 let b = 20; 
 const c = 30;

 console.log(a)
 console.log(b)
 console.log(c)

}

 //The reason is that in the block scope, we get B and C inside it initialized as `undefined` as part of hoisting at the beginning, while A is stored in the global scope. For the same reason, `let` and `const` are also usually called block-scoped data types, right? They are stored in a separate memory space which is reserved for this block, as we saw in the browsers (what do we call it? Inspector?).

//Also, they can't be accessed outside this block, which is also what we saw, but `var` A can be accessed anywhere, as it is part of the global scope, right? 



