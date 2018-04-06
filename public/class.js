// _________________________________________________________________GRASS_________________________________________________-
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(Math.random() * 8);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    // __________________________________________________________yntrelVandak
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    // ____________________________________________________________Bazmanal
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 7 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}

















// ______________________________________________________Xotaker___________________________________________________
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dardzac = 0;
        this.gishatich = 0;
        this.energy = 5 + Math.round(Math.random() * 3);
        this.kusht = 5 + Math.round(Math.random() * 3);
        this.directions = [];
    }


    // _______________________________________________________norVandak01______________________________________
    norVandak() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    // _____________________________________________________YNTRELVANDAK___________________________________
    yntrelVandak(ch) {
        this.norVandak();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    // ________________________________________________SHARJVEL__________________________________________
    sharjvel() {
        this.energy--;
        this.kusht = 5;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
        }
    }


    // ________________________________________________BAZMANAL____________________________________________  
    bazmanal() {

        var norVandak;
        if (norVandak = random(this.yntrelVandak(0))) {
            if (this.kusht >= 10 && norVandak) {
                var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                xotakerArr.push(norXotaker);
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.kusht = 5;
                this.energy = 5;
            }
        }


        else {
            var norVandak = random(this.yntrelVandak(1));
            if (this.kusht >= 7 && norVandak) {
                var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                xotakerArr.push(norXotaker);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.kusht = 6;
            }
        }
    }


    // __________________________________________________UTEL___________________________________________
    utel() {
        var norVandak;
        if (norVandak = random(this.yntrelVandak(1))) {
            this.gishatich++;
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    this.kusht++;
                    this.energy = 5;
                    break;
                }
            }
        }
        else if (norVandak = random(this.yntrelVandak(0))) {
            this.sharjvel();
        }
    }



    // ________________________________________________MAHANAL___________________________
    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (i in xotakerArr) 
            {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    return true;
                }
            }
        }
        else return false;
    }
}






























// ______________________________________________________Gishatich___________________________________________________
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
    }


    // _______________________________________________________norVandak______________________________________
    norVandak() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],


            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],

            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],

        ];
    }


    // _____________________________________________________YNTRELVANDAK___________________________________
    yntrelVandak(ch) {
        this.norVandak();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    // ________________________________________________SHARJVEL1__________________________________________
    sharjvel() {
        var norVandak;
        if (norVandak = random(this.yntrelVandak(0))) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
        }
        else if (norVandak = random(this.yntrelVandak(1))) {

            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 3;

        }
    }



    //__________________________________________________UTEL1___________________________________________
    utel() {
        var norVandak;
        if (norVandak = random(this.yntrelVandak(2))) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (norVandak = random(this.yntrelVandak(0))) {
            this.sharjvel();
        }
    }
}



























// _____________________________________________________________Magic________________________________________________
class Magic {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.heruvandak = [];
    }


    // _______________________________________________________norVandak______________________________________
    norVandak() {
        this.directions = [

            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],

            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],


            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    // _____________________________________________________YNTRELVANDAK___________________________________
    yntrelVandak(ch) {
        this.norVandak();
        var directions = [];
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    // ________________________________________________SHARJVEL__________________________________________
    sharjvel() {
        var norVandak;
        if (norVandak = random(this.yntrelVandak(0))) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
        } else if (norVandak = random(this.yntrelVandak(1))) {
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
        }
    }



    // _________________________________________________Balance________________________________________
    balance() {
        if (xotakerArr.length == 0) {
            var norVandak;
            if (norVandak = random(this.yntrelVandak(0))) {
                if (norVandak) {
                    var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                    xotakerArr.push(norXotaker);
                    matrix[norVandak[1]][norVandak[0]] = 2;
                    norVandak = random(this.yntrelVandak(0))
                    var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                    xotakerArr.push(norXotaker);
                    matrix[norVandak[1]][norVandak[0]] = 2;
                    norVandak = random(this.yntrelVandak(0))
                    var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                    xotakerArr.push(norXotaker);
                    matrix[norVandak[1]][norVandak[0]] = 2;
                }
                // else if (norVandak = random(this.yntrelVandak(1))) {
                //     for (var i in grassArr) {
                //         if (norVandak[1] == grassArr[i].y && norVandak[0] == grassArr[i].x) {
                //             grassArr.splice(i, 1);

                //             break;
                //         }
                //     }
                //     var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                //     xotakerArr.push(norXotaker);
                //     // matrix[norVandak[1]][norVandak[0]] = 2;
                //     // var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                //     // xotakerArr.push(norXotaker);
                //     // matrix[norVandak[1]][norVandak[0]] = 2;
                //     // var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                //     // xotakerArr.push(norXotaker);
                //     // matrix[norVandak[1]][norVandak[0]] = 2;
                // }
            }
        }
    }
        // ____________________________________________Mahanal__________________________________________________

        mahanal() {
            if (antimagArr.length == 0) {
                matrix[this.y][this.x] = 0;
                for (i in magicArr)//i = 0; i < xotakerArr.length; i++) 
                {
                    if (this.y == magicArr[i].y && this.x == magicArr[i].x) {
                        magicArr.splice(i, 1);
                        return true;
                    }
                }
            }
            else return false;
        }
}
























































// _____________________________________________________________AntiMagic________________________________________________
class AntiMag {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.heruvandak = [];
    }


    // _______________________________________________________norVandak______________________________________
    norVandak() {
        this.directions = [

            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],

            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],


            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    // _____________________________________________________YNTRELVANDAK___________________________________
    yntrelVandak(ch) {
        this.norVandak();
        var directions = [];
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    //__________________________________________________UTEL1___________________________________________
    utel() {
        var norVandak;
        if (norVandak = random(this.yntrelVandak(3))) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
            for (var i in gishatichArr) {
                if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (norVandak = random(this.yntrelVandak(0))) {
            this.sharjvel();
        }
    }


    // ________________________________________________SHARJVEL__________________________________________
    sharjvel() {
        var norVandak;
        if (norVandak = random(this.yntrelVandak(0))) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
        } else if (norVandak = random(this.yntrelVandak(1))) {
            for (var i in grassArr) {
                if (this.y == grassArr[i].y && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
        }
    }



    // _________________________________________________Balance________________________________________
    balance() {
        if (grassArr.length == 0) {
            var norVandak;
            if (norVandak = random(this.yntrelVandak(0))) {
                if (norVandak) {
                    var norXot = new Grass(norVandak[0], norVandak[1]);
                    grassArr.push(norXot);
                    matrix[norVandak[1]][norVandak[0]] = 1;
                }
            }
        }
    }

    // ____________________________________________Mahanal__________________________________________________

    mahanal() {
        if (gishatichArr.length == 0) {
            matrix[this.y][this.x] = 0;
            for (i in antimagArr)//i = 0; i < xotakerArr.length; i++) 
            {
                if (this.y == antimagArr[i].y && this.x == antimagArr[i].x) {
                    antimagArr.splice(i, 1);
                    return true;
                }
            }
        }
        else return false;
    }
}

