"use strict";

function Hero(name, secretIdentity, health) {
    LivingThing.call(this, name, health)
    this.secretIdentity = secretIdentity
}

Hero.prototype = {
    attack: function (monsterToAttack) {
        const monsterDamageDelt = Math.floor(Math.random() * 10)
        const heroDamageDelt = Math.floor(Math.random() * 10)
        if (this.health > 0 && monsterToAttack.health > 0) {
            console.log(
                "Attack!" +
                "\n" + this.name + "'s health" + " " + "(" + this.health + ")" + " " + "was reduced by" + " " + heroDamageDelt +
                "\n" + monsterToAttack.name + "'s health" + " " + "(" + monsterToAttack.health + ")" + " " + "was reduced by" + " " + monsterDamageDelt
            )
            this.health = this.health - heroDamageDelt
            monsterToAttack.health = monsterToAttack.health - monsterDamageDelt
            console.log(this.name + "'s health is now" + " " + "(" + this.health + ")" +
                "\n" + monsterToAttack.name + "'s health is now" + " " + "(" + monsterToAttack.health + ")"
            )
        }
        if (this.health <= 0) {
            this.isAlive = false
            console.log(this.name + " " + "is dead")

        }
        if (monsterToAttack.health <= 0) {
            monsterToAttack.isAlive = false
            console.log(monsterToAttack.name + " " + "is dead")

        }
    },
    fight: function (monsters) {
        for ( let monster of monsters) {
            console.log(monster)
            while(this.isAlive && monster.isAlive) {
                this.attack(monster)
            }
        }
    }
}


// const link = new Hero("Link", 70)
// const monster1 = new Monster("Bokoblin", 20)
// link.attack(monster1)