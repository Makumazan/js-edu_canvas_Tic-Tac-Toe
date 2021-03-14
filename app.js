let canvas = document.getElementById("box1");
let ctx = canvas.getContext('2d');

let step = 0;

canvas.onclick = function(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    // console.log(x,y)
    x = Math.floor(x/100);
    y = Math.floor(y/100);

    if (step % 2 == 0){
        mas[y][x] = "X";
    } else {
        mas[y][x] = "O";
    }
    // console.log(mas)
    step++;
    
    drawSimbol();

    setTimeout(() => {
        checkWinner();
    }, 100);
   
} ;

let mas = [];

function pole() {
    let x = 3, y = 3;
    for (let i = 0; i < y; i++){
        mas[i] = [];
        for(let j = 0; j < x; j++) {
            mas[i][j] = 0;
            
        }
    }
}
pole();


function drawSimbol() {
    ctx.clearRect(0, 0, 300, 300); 
    for (let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++) {
            ctx.textBaseline="hanging";
            ctx.textAlign = "start";
            ctx.font = "50pt Arial";
            if (mas[i][j] == "X"){
                ctx.fillText("X", j*100 + 25, i*100 + 25);
            } else if (mas[i][j] == "O"){
                ctx.fillText("O", j*100 + 25, i*100 + 25);
            }
        }
    }
};

function checkWinner() {
   
    var messageX = "Победили КРЕСТИКИ"    

        if ( mas[0][0]=='X' && mas[0][1]=='X' && mas[0][2]=='X') alert(messageX);
        if ( mas[1][0]=='X' && mas[1][1]=='X' && mas[1][2]=='X') alert(messageX);
        if ( mas[2][0]=='X' && mas[2][1]=='X' && mas[2][2]=='X') alert(messageX);

        if ( mas[0][0]=='X' && mas[1][0]=='X' && mas[2][0]=='X') alert(messageX);
        if ( mas[0][1]=='X' && mas[1][1]=='X' && mas[2][1]=='X') alert(messageX);
        if ( mas[0][2]=='X' && mas[1][2]=='X' && mas[2][2]=='X') alert(messageX);

        if ( mas[0][0]=='X' && mas[1][1]=='X' && mas[2][2]=='X') alert(messageX);
        if ( mas[0][2]=='X' && mas[1][1]=='X' && mas[2][0]=='X') alert(messageX);
 

    var messageY = "Победили НОЛИКИ"

        if ( mas[0][0]=='O' && mas[0][1]=='O' && mas[0][2]=='O') alert(messageY);
        if ( mas[1][0]=='O' && mas[1][1]=='O' && mas[1][2]=='O') alert(messageY);
        if ( mas[2][0]=='O' && mas[2][1]=='O' && mas[2][2]=='O') alert(messageY);

        if ( mas[0][0]=='O' && mas[1][0]=='O' && mas[2][0]=='O') alert(messageY);
        if ( mas[0][1]=='O' && mas[1][1]=='O' && mas[2][1]=='O') alert(messageY);
        if ( mas[0][2]=='O' && mas[1][2]=='O' && mas[2][2]=='O') alert(messageY);

        if ( mas[0][0]=='O' && mas[1][1]=='O' && mas[2][2]=='O') alert(messageY);
        if ( mas[0][2]=='O' && mas[1][1]=='O' && mas[2][0]=='O') alert(messageY);

};