var num = 3;
var df = 1;
var done = false;
var prime = false;
var primecount = 0;
var testNumSqurt = 0;
var primes = ["filler"];
addtolist(2);
addtolist(3);
start();
function start() {
    var x = 0;  // 0 Seconds
    nextprime();
    setTimeout(start, x*1000);
}

function nextprime() {
    num = num + 2;
    checkprime();
}

function checkprime() {
    num = num;
    testNumSqurt = Math.sqrt(num);
    done = false;
    prime = false;
    for (df = 1; done === false && primes.df < testNumSqurt; df = df + 1) {

        //if evenly divisible
        if (num / primes.df % 1 != 0) {
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

function addtolist(data) {
    primecount = primecount + 1;
    var li = document.createElement("LI");
    var t = document.createTextNode(data);
    li.appendChild(t);
    document.getElementById("primeslist").appendChild(li);
    document.getElementById("primecount").innerHTML = primecount + " primes calculated so far";
    primes.push(data);
}
