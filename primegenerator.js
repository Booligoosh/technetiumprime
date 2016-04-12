var num = 0;
var df = 1;
var done = false;
var prime = false;
start();
function start() {

    x = 0;  // 0 Seconds

    nextprime()
    setTimeout(start, x*1000);
}

function nextprime() {

    num = num + 1;
    checkprime();
}

function checkprime() {
    num = num;
    done = false;
    prime = false;
    for (df = Math.floor(Math.sqrt(num)); done === false && num - df > 1; df = df + 1) {
        //if evenly divisible
        if (num / (num - df) % 1 != 0) {
            prime = true;
            done = false;
            //println(num / (num - df) % 1 != 0);
            //println(num / (num - df));
            //println("divisor:");
            //println(num - df);
            //println("df: " + df);
            //println("num: " + num);
            //println("ed");
            //println(prime);
            //println("===================");
            
        }
        //if not evenly divisible
        else {
            prime = false;
            done = true;
            //println(num / (num - df) % 1 != 0);
            //println(num / (num - df));
            //println("divisor:");
            //println(num - df);
            //println("df: " + df);
            //println("num: " + num);
            //println(prime);
            //println("===================");
        }
}
    if (prime === true) {
        //println(num);
        addtolist(num);
    }
}

function addtolist(data) {
    var li = document.createElement("LI");
    var t = document.createTextNode(data);
    li.appendChild(t);
    document.getElementById("primeslist").appendChild(li);
}
