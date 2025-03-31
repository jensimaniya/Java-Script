function rollDice() {
  let diceFaces = ["1", "2", "3", "4", "5", "6"];
  let roll= Math.floor(Math.random() * 6);
 

  document.getElementById("player1").textContent = diceFaces[roll];
  
}
