var n = 30; //x
var m = 30; //y
var side = 25;
var xotqanak = 25;
var xotakerqanak = 15;
var gishatich = 7;
var magicqanak = 1;
var antimagqanak = 1;
//________________________________________MATRIX______________________________________
var matrix = [];
for (i = 0; i < m; ++i) {
    matrix[i] = [];
    for (j = 0; j < n; ++j) {
        matrix[i][j] = 0;
    }
}

for (var i = 0; i < xotqanak; i++) {
    var x = Math.floor(Math.random() * m);
    var y = Math.floor(Math.random() * n);
    if (matrix[y][x] == 0) {
        matrix[y][x] = 1;
    }
    else {
        i--;
        continue;
    }
}

for (var i = 0; i < xotakerqanak; i++) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
    }
    else {
        i--;
        continue;
    }
}

for (var i = 0; i < gishatich; i++) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
    }
    else {
        i--;
        continue;
    }
}


for (var i = 0; i < magicqanak; i++) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0) {
        matrix[y][x] = 4;
    }
    else {
        i--;
        continue;
    }
}


for (var i = 0; i < antimagqanak; i++) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0) {
        matrix[y][x] = 5;
    }
    else {
        i--;
        continue;
    }
}








// __________________________________Stugarqayin Matrix____________________________________________


// var n=5;
// var m=5;
// var side=25;
// var xotqanak = 1;
// var xotakerqanak = 1;
// var gishatich = 1;
// var magicqanak = 1;
// var antimagqanak = 1;
// matrix = [
//     [3, 0, 3, 0, 0],
//     [0, 0, 3, 0, 0],
//     [0, 0, 5, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//   ];




















































// ______________________________________________________________________________________




var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var magicArr = [];
var antimagArr = [];


// ______________________________________________SETUP______________________________________

function setup() {
    frameRate(30);
    createCanvas(n * side, m * side);
    background('#acacac');

    for (var y = 0; y < n; ++y) {
        for (var x = 0; x < m; ++x) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                magicArr.push(new Magic(x, y));
            }
            else if (matrix[y][x] == 5) {
                antimagArr.push(new AntiMag(x, y));
            }
        }
    }
}
// ________________________________________________________________________________________________






// _________________________________________________DRAW__________________________________________
function draw() {

    for (var y = 0; y < m; y++) {
        for (var x = 0; x < n; x++) {

            if (matrix[y][x] == 1) {
                stroke(51);
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                noStroke();
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                stroke(51);
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                stroke(51);
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                stroke(51);
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                stroke(51);
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }


    //-----------------------------------------------


    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }


    for (var i in magicArr) {
        magicArr[i].balance();
        magicArr[i].sharjvel();
        magicArr[i].mahanal();
    }

    for (var i in antimagArr) {
        antimagArr[i].balance();
        antimagArr[i].utel();
        antimagArr[i].sharjvel();
        antimagArr[i].mahanal();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        if (!xotakerArr[i].mahanal()) {
            xotakerArr[i].bazmanal();
        }
    }



    for (var i in gishatichArr) {
        gishatichArr[i].utel();
    }

}
