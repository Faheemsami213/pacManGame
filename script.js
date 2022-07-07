const width = 28 ;
const scoreDisplay = document.querySelector("#scoreDisplay")
let score = 0 
const gridBox = document.querySelector("#grid")
const squares = []
const layout =  [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
function creatBoard(){

    for (let i = 0 ; i < layout.length ; i++){
        const addElemToGrid = document.createElement("div")
        gridBox.appendChild(addElemToGrid)
        squares.push(addElemToGrid)
        if(layout[i] === 0){
            squares[i].classList.add("pac-dot") 
        }
        else if (layout[i] === 1) {
            squares[i].classList.add('wall')
          }
          else if(layout[i] === 2){
            squares[i].classList.add("ghost-layer")
        }
        else if(layout[i] === 3){
            squares[i].classList.add("power-pallet")
        }
        else if(layout[i] === 4){
            squares[i].classList.add("empyt-box")
        }
   
    }
}
creatBoard()
 
let pacmanCurrentIndex = 490 ;
squares[pacmanCurrentIndex].classList.add("pacman")
 
function movepacman(e){
    squares[pacmanCurrentIndex].classList.remove("pacman")
  switch(e.keyCode){
      case 37:
          if(pacmanCurrentIndex % width !==0 &&
            !squares[pacmanCurrentIndex - 1].classList.contains("wall"))
          pacmanCurrentIndex -= 1 
          if(squares[pacmanCurrentIndex - 1] === squares[363]){
            pacmanCurrentIndex = 391 
          }
          break ;
         case 38:
            if(pacmanCurrentIndex - width >=0 &&
            !squares[pacmanCurrentIndex - width].classList.contains("wall") )
            pacmanCurrentIndex -= width 
            break ;
          case 39:
            if(pacmanCurrentIndex % width < width - 1 &&
            !squares[pacmanCurrentIndex + 1 ].classList.contains("wall"))
            pacmanCurrentIndex += 1 ;
            if(squares[pacmanCurrentIndex + 1] === squares[392]){
                pacmanCurrentIndex = 364
            }
            break ;
          case 40:
            if(pacmanCurrentIndex + width < width* width &&
            !squares[pacmanCurrentIndex + width ].classList.contains("wall") &&
            !squares[pacmanCurrentIndex - width].classList.contains("empyt-box"))
            pacmanCurrentIndex += width
            break ;
  }
  squares[pacmanCurrentIndex].classList.add("pacman")
  removePacDots()
  removPowerpellet()
  cheakforWinTheGame()
  cheakGameover()
 

}
document.addEventListener("keyup",movepacman)
// what happens when you eat a pac-dot
function removePacDots(){
    if(squares[pacmanCurrentIndex].classList.contains("pac-dot")){
        score++
        scoreDisplay.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove("pac-dot")
    }
}
 //what happens when you eat a power-pellet
function removPowerpellet(){
    if(squares[pacmanCurrentIndex].classList.contains("power-pallet")){
        score +=10 
        scoreDisplay.innerHTML = score
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unScaredGhost,10000)
        squares[pacmanCurrentIndex].classList.remove("power-pallet")
     
    }
}
//make the ghosts stop flashing
function unScaredGhost(){
    ghosts.forEach(ghost => ghost.isScared = false )                       
}
//create ghosts using Constructors
class  ghost{
    constructor(className,startIndex,speed){
        this.className      =  className,
        this.startIndex     =  startIndex ,
        this.speed          =  speed,
        this.isScared       =  false ,
        this.currentIndex   =  startIndex ,
        this.timerId        =   NaN 
 
    }
}
  //all my ghosts
 let ghosts = [
    new ghost('blinky', 348, 250),
    new ghost('pinky', 376, 400),
    new ghost('inky', 351, 300),
    new ghost('clyde', 379, 500)
]
 //draw my ghosts onto the grid
ghosts.forEach(ghost =>{squares[ghost.currentIndex].classList.add(ghost.className)
                        squares[ghost.currentIndex].classList.add("ghost")  
})
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    })

ghosts.forEach(ghost => moveghotsTonextIndex(ghost))
  //move the Ghosts randomly
function moveghotsTonextIndex(ghost){
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random()*directions.length)]
  
   
    ghost.timerId = setInterval(function(){
        if(!squares[ghost.currentIndex + direction].classList.contains("wall") &&
        !squares[ghost.currentIndex + direction].classList.contains("ghost") ){
    //remove the ghosts classes
       
            squares[ghost.currentIndex].classList.remove(ghost.className,"ghost","scared-ghost")
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className,"ghost")


        }
        else direction = directions[Math.floor(Math.random()*directions.length)]
        
        if(ghost.isScared){
            squares[ghost.currentIndex].classList.add("scared-ghost")
          }
        if(ghost.isScared && squares[ghost.currentIndex].classList.contains("pacman")){
            score += 100
            scoreDisplay.innerHTML = score  
            squares[ghost.currentIndex].classList.remove(ghost.className,"ghost","scared-ghost")
            ghost.currentIndex = ghost.startIndex
            squares[ghost.currentIndex].classList.add(ghost.className,"ghost")

        }
        cheakGameover()
    },ghost.speed)
   
}

// cheak for Game Over  
function cheakGameover(){
    if(squares[pacmanCurrentIndex].classList.contains("ghost") &&
        !squares[pacmanCurrentIndex].classList.contains("scared-ghost")){
        ghosts.forEach(ghost=>clearInterval(ghost.timerId))
        document.removeEventListener("keyup",movepacman)
        setTimeout(function(){ alert(" Game Over Faheem "); }, 500)

    }
        
}
function cheakforWinTheGame(){
    if(score==240){
        ghosts.forEach(ghost=>clearInterval(ghost.timerId))
        document.removeEventListener("keyup",movepacman)
        setTimeout(function(){ alert(" You Won the Game Faheem "); }, 500)
    }
}
