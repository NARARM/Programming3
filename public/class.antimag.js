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

