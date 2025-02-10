function BillMethod() {
  let units = document.getElementById("AnyNumber").value;

  
  
  let bill = 0;
  let fees = 100;
  if (units <= 50)
  {
    bill = units * 5;
  } else if (units > 50 && units <= 100)
  {
    bill = 50 * 5 + (units - 50) * 10;
  }
  else if (units >= 101 && units <= 150)
  {
    bill = 50 * 5 + 50 * 10 + (units - 100) * 15;
  } else if (units > 151) {
    bill = 50 * 5 + 50 * 10 + 50 * 15 + (units - 150) * 20;
  }

  lastAmount = bill + fees;
  console.log(lastAmount);

  document.getElementById("result").innerHTML = (lastAmount);

  
}
