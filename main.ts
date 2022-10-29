controller.combos.attachCombo("uuddlrlrb", function () {
    mySprite.destroy()
    mySprite = sprites.create(assets.image`goku i thinkui`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay += 200
    scaling.scaleByPixels(mySprite, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scene.cameraFollowSprite(mySprite)
    mySprite2.sayText("WHAT THE-")
    timer.after(1000, function () {
        mySprite2.sayText("KAKAROT WHAT IS THIS POW-")
        timer.after(500, function () {
            mySprite2.sayText("AAAAAAA---")
            UIkamehameha = 1
        })
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("KA-")
    timer.after(1000, function () {
        mySprite.sayText("ME-")
        mySprite2.sayText("What are you doing?")
        timer.after(1000, function () {
            mySprite.sayText("HA-")
            timer.after(1000, function () {
                mySprite.sayText("ME")
                mySprite2.sayText("OH WAIT-")
                timer.after(1000, function () {
                    mySprite.sayText("HAAAAA!")
                    kamehameha = 1
                })
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite2.sayText("AAAA MY PRIDE")
    timer.after(1000, function () {
        mySprite2.startEffect(effects.spray)
        mySprite2.destroy()
        kamehameha = 0
        UIkamehameha = 0
    })
})
let projectile2: Sprite = null
let projectile: Sprite = null
let kamehameha = 0
let UIkamehameha = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`goku i think`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scaling.scaleByPixels(mySprite, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
scaling.scaleByPixels(mySprite2, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
tiles.setCurrentTilemap(tilemap`level4`)
mySprite2.setPosition(136, 91)
scene.cameraFollowSprite(mySprite)
mySprite.ay += 200
mySprite2.sayText("You will NEVER defeat the mighty vegeta!")
forever(function () {
    while (kamehameha == 1) {
        pause(10)
        projectile = sprites.createProjectileFromSide(assets.image`ki i guess`, 50, -50)
        projectile.x = mySprite.x
        projectile.y = mySprite.y
    }
})
forever(function () {
    while (UIkamehameha == 1) {
        projectile2 = sprites.createProjectileFromSprite(assets.image`ki i guess1`, mySprite, 50, -50)
        pause(10)
    }
})
