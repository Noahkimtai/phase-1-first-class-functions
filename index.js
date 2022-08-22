
function functionToCall(){
    console.log('I am being called inside a function')
}
function receivesAFunction(func){
     return func();
}
function returnsANamedFunction(){
    const returnedFucntion = function(){conseole.log('This is a returned function')}
    return returnedFucntion
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('This is an anonymous function returned by another function')
    }
}