const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

//Access the image of map
const image = new Image()
image.src = './img/Pellet Town.png'

//Access the image of playerDown.png
const playerImage = new Image()
playerImage.src = './img/playerDown.png'

/**
 * Draws the map and player on the canvas
 */
// image.onload = () => {
//     ctx.drawImage(image, -736, -600)
//     ctx.drawImage(
//         playerImage,
//         0,  //x -> starting point of a tile in spritesheet
//         0,  //y -> starting point of a tile in spritesheet
//         playerImage.width / 4,  //crop-width
//         playerImage.height,     //crop-height
//         canvas.width / 2 - (playerImage.width / 4) / 2,     //For placing the player in the center of the canvas(width-wise)
//         canvas.height / 2 - playerImage.height / 2,    //For placing the player in the center of the canvas(height-wise)
//         playerImage.width / 4,  //where to place the image
//         playerImage.height      //where to place the image
//     )
// }


/**
 * Class used for initializing the player img as well as the background img i.e map
 */
class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.image = image
    }

    //this method will draw the map on the canvas
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({
    position: {
        x: -736,
        y: -600
    },
    image: image
})

const keys = {
    w: {
        pressed: false  //Default value for pressed is false
    },
    a: {
        pressed: false  //Default value for pressed is false
    },
    s: {
        pressed: false  //Default value for pressed is false
    },
    d: {
        pressed: false  //Default value for pressed is false
    }
}

function animate() {
    window.requestAnimationFrame(animate)   //loading the image in a never ending loop
    background.draw()
    ctx.drawImage(
        playerImage,
        0,  //x -> starting point of a tile in spritesheet
        0,  //y -> starting point of a tile in spritesheet
        playerImage.width / 4,  //crop-width
        playerImage.height,     //crop-height
        canvas.width / 2 - (playerImage.width / 4) / 2,     //For placing the player in the center of the canvas(width-wise)
        canvas.height / 2 - playerImage.height / 2,    //For placing the player in the center of the canvas(height-wise)
        playerImage.width / 4,  //where to place the image
        playerImage.height      //where to place the image
    )

    if (keys.w.pressed)
        background.position.y = background.position.y + 3   //when 'w' is pressed the background will move down by 3 coords in y axis
    else if (keys.s.pressed)
        background.position.y = background.position.y - 3   //when 's' is pressed the background will move up by 3 coords in y axis
    else if (keys.a.pressed)
        background.position.x = background.position.x + 3   //when 'a' is pressed the background will move right by 3 coords in x axis
    else if (keys.d.pressed)
        background.position.x = background.position.x - 3   //when 'd' is pressed the background will move left by 3 coords in x axis
}
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})
