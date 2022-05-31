const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const ball =  document.getElementById("ball");
let keypress = [];
let player1x = 350
let player2x = 350

let positionxball = 390
let positionyball = 290

let width = 104
let pointplayer1 = document.querySelector("#point1") 
let pointplayer2 = document.querySelector("#point2")

let = point1 = 0
let = point2 = 0

let pause= true

let velocityx = 1
let velocityy = 1
console.log (width)
main ();

function main (){
    
    key();
  
}

function movleft1(){
    if ( player1x>0){

        player1x-=5
    }
    
}
function movrigth1(){
    if(player1x < 700){

        player1x+=5
    }
}
function movleft2(){
    if( player2x>0){
        player2x-=5

    }
    
}
function movrigth2(){
    if (player2x < 700){

        player2x+=5
    }

}
function loadpositionplayer1 (){
    
    player1.style.left = `${player1x}px`
}

function loadpositionplayer2(){
    player2.style.left = `${player2x}px`

}
function key(){
    addEventListener("keydown", function (event){
        if (event.key == 'a'){
          keypress [0] = 'a'; 
        }
        if (event.key == 'd'){
            keypress [1] = 'd';
          }
    })
    addEventListener("keyup", function (event){
        if (event.key == 'a'){
          keypress [0] = '';  
        }
        if (event.key == 'd'){
            keypress [1] = '';  
          }
    })
    addEventListener("keydown", function (event){
        if (event.key == 'j'){
          keypress [2] = 'j';  
        }
        if (event.key == 'l'){
            keypress [3] = 'l';
          }
    })
    addEventListener("keyup", function (event){
        if (event.key == 'j'){
          keypress [2] = '';  
        }
        if (event.key == 'l'){
            keypress [3] = '';  
          }
    })
    addEventListener("keydown", function (event){
        if (event.key == 'r'){
          keypress [4] = 'r';  
        }

    })
    addEventListener("keyup", function (event){
        if (event.key == 'r'){
            keypress [4] = '';  
          }
    })
}
   
setInterval(function (){
    if (keypress [0]=='a'){
        movleft1();
    }
    if (keypress [1]=='d'){
        movrigth1();
    }
    if (keypress [2]=='j'){
        movleft2();
    }
    if (keypress [3]=='l'){
        movrigth2();
    }
    
    loadpositionplayer1 ()
    loadpositionplayer2 ()
    loadpositionball ()

    if (positionxball > 800-20 || positionxball < 0 ){
        velocityx*=-1
    }
    // if (positionyball >= 560 || positionyball < 0-20){
       
    //     velocityy*=-1
    // }
    if (positionyball == -10 && (positionxball+20 >= player1x && positionxball <= player1x + width)){
        velocityy*=-1
    }

    if (positionyball == 550 && (positionxball+10 >= player2x && positionxball <= player2x + width)){
        velocityy*=-1
    }
    point()
   
       
    

},1)
function point(){
    if (positionyball < -20 ){
        
        document.body.style.backgroundColor='purple'
        point2++
        pointplayer2.innerHTML = point2
        velocityx = 0
        velocityy = 0
        positionxball = 390
        positionyball = 290
        pause = true
    }
    if (positionyball >=560 ){
       

        document.body.style.backgroundColor='blue'
        point1++
        pointplayer1.innerHTML = point1
        velocityx = 0
        velocityy = 0 
        positionxball = 390
        positionyball = 290
        pause = true
       

    }
    if (pause==true){
    if (keypress [4]== 'r'){
        document.body.style.backgroundColor='black' 
        setvelocity()
        pause = false
    }
}
    
}


function setvelocity (){
    velocityy = 1
    velocityx = 1
} 


function loadpositionball () {
    positionxball += velocityx
    positionyball += velocityy
    ball.style.left = `${positionxball}px` 
    ball.style.top = `${positionyball}px`

}









