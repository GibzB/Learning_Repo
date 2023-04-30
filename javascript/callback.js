// callback is a way of passing a function into another function as a parameter.

function displayDone() {
    console.log('Done!');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);

setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)