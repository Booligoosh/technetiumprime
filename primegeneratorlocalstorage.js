if (localStorage === Storage {length: 0}) {
    var num = 3;
    var df = 1;
    var done = false;
    var prime = false;
    var primecount = 0;
    var testNumSqurt = 0;
    var primes = ["filler"];
    addtolist(2);
    addtolist(3);
}
else {
    var num = Number(localStorage.sNum);
    var df = 1;
    var done = false;
    var prime = false;
    var primecount = Number(localStorage.sPrimecount);
    var testNumSqurt = 0;
    //must use Number() whenever referring to a value of primes[]
    var primes = localStorage.sPrimes.split(',');
    var addListI = 0;
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
    ///clear cookies
    checkprime();
}

function checkprime() {
    num = num;
    testNumSqurt = Math.sqrt(num);
    done = false;
    prime = false;
    for (df = 1; done === false && Number(primes[df]) < testNumSqurt; df = df + 1) {

        //if evenly divisible
        if (num / Number(primes[df]) % 1 != 0) {
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
        addtolist(num);
    }
}

function save() {
    localStorage.sNum = num;
    localStorage.sPrimecount = primecount;
    localStorage.sPrimes = primes.join();
}

function addtolist(data) {
    primecount = primecount + 1;
    rawListAdd(data);
    primes.push(data);
    save();
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
