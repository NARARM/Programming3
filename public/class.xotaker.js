// ______________________________________________________Xotaker___________________________________________________
class Xotaker extends apush{
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







