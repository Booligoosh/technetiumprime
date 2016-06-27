if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    alert("You are not using an awesome browser.\nThis means that we cannot save your primes you generate :(\nTo be able to save your primes, use a supported browser such as Chrome or Firefox.");
}

if (localStorage.primes == undefined) {
    localStorage.primes = true;
    var num = 3;
    var primecount = 0;
    var primes = ["filler"];
    addtolist(2);
    addtolist(3);
}
else {
    var num = Number(localStorage.primesNum);
    var primecount = Number(localStorage.primesPrimecount);
    //must use Number() whenever referring to a value of primes[]
    var primes = localStorage.primesPrimes.split(',');
    var addListI = 1;
    while (addListI <= primes.length) {
        rawListAdd(Number(primes[addListI]));
        addListI = addListI + 1;
    }
}

start();
function start() {
    var x = 0;  // 0 Seconds
    nextprime();
    setTimeout(start, x*1000);
}

function nextprime() {
    num = num + 2;
    checkprime(num);
}

function checkprime(value) {
    var testNumSqurt = Math.sqrt(value);
    var done = false;
    var prime = false;
    var df = 1;
    for (df = 1; done === false && Number(primes[df]) < value; df = df + 1) {

        //if evenly divisible
        if (value / Number(primes[df]) % 1 != 0) {
            prime = true;
            done = false;
            
        }
        //if not evenly divisible
        else {
            prime = false;
            done = true;
        }
    }
    if (prime === true) {
        addtolist(value);
    }
}

function save() {
    if (typeof(Storage) !== "undefined") {
        localStorage.primesNum = num;
        localStorage.primesPrimecount = primecount;
        localStorage.primesPrimes = primes.join();
    } else {
        //cannot save primes :(
    }
}

function addtolist(data) {
    primecount = primecount + 1;
    rawListAdd(data);
    primes.push(data);
    save();
    if (document.getElementById("autoscroll").checked === true) {
        window.scrollTo(0, 99999999999999999999999999999999999);
    }
}

//the following functions have been taken or modified from http://www.w3schools.com/


/*
body.onbeforeunload=function(){
    save();
    alert("Your primes have been saved.");
};
*/

function rawListAdd (data) {
    var li = document.createElement("LI");
    var t = document.createTextNode(data);
    li.appendChild(t);
    document.getElementById("primeslist").appendChild(li);
    document.getElementById("primecount").innerHTML = primecount + " primes calculated so far";
}
