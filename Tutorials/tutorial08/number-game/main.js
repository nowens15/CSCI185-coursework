// Global variables:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let count = 0;


function check() {
    count++;
    document.querySelector("#num-guesses").innerHTML = 'Number of guesses so far: ' + count;

    // your code here.
    console.log("your code here!");
    // 1. get the number they entered from the DOM. Store in the variable.
    let guess = document.querySelector('#guess').value;
    console.log(guess);
    // 2. convert the guess to a number
    guess = Number(guess);
    // 3. check if they won:
    //   * if guess === secret -> You win!
    if (guess === secret) {
        console.log('You Win!');
        document.querySelector('#message').textContent = 'You Win!';
        document.querySelector('#celebrate').className = ' ';
        //   * if guess == < secret -> Too low!
    } else if (guess < secret) {
        console.log('Too Low!');
        document.querySelector('#message').textContent = 'Too Low!';
       //   * otherwise: too high!  
    } else {
        console.log('Too High!');
        document.querySelector('#message').textContent = 'Too High!';
    }
 
}