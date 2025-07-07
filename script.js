
console.log('Welcome to Tic Tac Toe');
let music= new Audio("music.mp3")
let audioTurn= new Audio("ting.mp3")
let gameover= new Audio("gameover.mp3")
let turn = 'X';
let isgameover = false;

//function to chsnge the turn
const changeTurn = () =>{

  return turn=== "X"?"0": "X"
}

//function to check for a Win
const checkWin = ()=>{
  let boxText = document.getElementsByClassName('boxText');

  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

  ]
  wins.forEach(e =>{
   if((boxText[e[0]].innerText == boxText[e[1]].innerText) &&
    (boxText[e[2]].innerText == boxText[e[1]].innerText) && 
    (boxText[e[0]].innerText !==  '')
  )
  {
   document.querySelector('.info').innerText = boxText[e[0]].innerText + "  Won"
   isgameover = true;
    music.play();
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
  //  DocumentFragment.querySelector('.line').style.transform= "Translate(23vw,39vw) rotate(90deg)"
  }
  });
}

//Game Logic 
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
  element.addEventListener('click', () => {
    let boxText = element.querySelector('.boxText');
    if (boxText.innerText === '') {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if(!isgameover){
             document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
      }
     
    }
  });
});

//Add omclick listner to reset button
reset.addEventListener('click', ()=>{
      let boxTexts = document.querySelectorAll('.boxText');
      Array.from(boxTexts).forEach(element => {
        element.innerText = ''
      });
      turn = 'X'
      isgameover = false
        document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        music.pause();        // Stop the music
        music.currentTime = 0; // Reset to beginning
})