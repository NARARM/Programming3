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





