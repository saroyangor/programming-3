class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    mul() {
        this.multiply++
        var newCell = random(this.chooseCell(0))
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1])
            grassArr.push(newGrass)
            matrix[newCell[1]][newCell[0]] = 1
            this.multiply = 0
        }
    }
}