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
image.onload = () => {
    ctx.drawImage(image, -736, -600)
    ctx.drawImage(
        playerImage,
        canvas.width / 2 - playerImage.width / 2,     //For placing the player in the center of the canvas(width-wise)
        canvas.height / 2 - playerImage.height / 2    //For placing the player in the center of the canvas(height-wise)
    )
}
