// Returns an array of messages for each name provided to the function
function writeCards (name, celebration) {
    let array = [] ;
for (let i=0; i<name.length; i+=1) {
    array.push(`Thank you, ${name[i]}, for the wonderful ${celebration} gift!`)
} return array
}

// Logs a countdown from the number provided to zero
function countDown(n) {
    while (n+1 != 0) {
    console.log(n);
    n-=1;
}
}