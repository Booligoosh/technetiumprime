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
    var cookiesList = document.cookie.split("|");
    var num = Number(cookiesList[1]);
    var df = 1;
    var done = false;
    var prime = false;
    var primecount = Number(cookiesList[2]);
    var testNumSqurt = 0;
    var primes = cookiesList[3].split(',');
    var addListI = 0;
    addtolist(2);
    addtolist(3);
    while (addListI <= primes.length) {
        addtolist(primes[addListI]);
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

function save() {
    document.cookie = "cookies= |" + num + "|" + primecount + "|" + primes.join();
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
    save();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = document.cookie + cname + "=" + cvalue + "; " + expires;
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
    //return "";
}
