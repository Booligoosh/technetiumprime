if (document.cookie === "") {
    var num = 3;
    var df = 1;
    var done = false;
    var prime = false;
    var primecount = 0;
    var testNumSqurt = 0;
    var primes = ["filler"];
}
else {
    var num = getCookie("num");
    var df = 1;
    var done = false;
    var prime = false;
    var primecount = getCookie("primecount");
    var testNumSqurt = 0;
    var primes = getCookie("primes").split(',');
}
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
    setCookie("num",num,365);
    checkprime();
}

function checkprime() {
    num = num;
    testNumSqurt = Math.sqrt(num);
    done = false;s
    prime = false;
    for (df = 1; done === false && primes[df] < testNumSqurt; df = df + 1) {

        //if evenly divisible
        if (num / primes[df] % 1 != 0) {
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

//the following functions have been taken or modified from http://www.w3schools.com/

function addtolist(data) {
    primecount = primecount + 1;
    var li = document.createElement("LI");
    var t = document.createTextNode(data);
    li.appendChild(t);
    document.getElementById("primeslist").appendChild(li);
    document.getElementById("primecount").innerHTML = primecount + " primes calculated so far";
    primes.push(data);
    setCookie("primes",primes.join(),365);
    setCookie("primecount",primecount,365);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
