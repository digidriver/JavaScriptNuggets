// Function checkCashRegister
// Returns 2D array of change to be given out by denomination
// Returns "Closed" if cash in drawer is exactly change to be given
// Returns "Insufficient Funds" if not enough money is in drawer

function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.
  
  // Find out how much is in the register
  var pennies = cid[0][1];
  var nickels = cid[1][1];
  var dimes = cid[2][1];
  var quarters = cid[3][1];
  var ones = cid[4][1];
  var fives = cid[5][1];
  var tens = cid[6][1];
  var twenties = cid[7][1];
  var hundreds = cid[8][1];
  var moneyInRegister = currentRegisterTotal(cid);
  
  // Find out how much change should be given back
  var change = cash - price;
  
  // Is there enough money in the register to give change?
  if (moneyInRegister < change){
    return "Insufficient Funds";
  }
  
  // Is all the money in the register what the change is?
  if (moneyInRegister === change){
    return "Closed";
  }
  
  // Figure out how to best return change
  var actualChangeReturned = [];
  var changeAvailable = 0;
  var changeUsed = 0;
  var changeRemaining = 0;
  var maxUse = 0;
  
  while (change > 0){
    if ((change > 100) && (hundreds !== 0)){
      changeAvailable = hundreds / 100;
      changeUsed = (change / 100) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = change - hundreds;
        actualChangeReturned.push(["ONE HUNDRED", hundreds]);
        hundreds = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = change - (changeUsed * 100);
        actualChangeReturned.push(["ONE HUNDRED", changeUsed * 100]);
      }
      
      change = changeRemaining;
    } else if ((change > 20) && (twenties !== 0)){
      changeAvailable = twenties / 20;
      changeUsed = (change / 20) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = parseFloat((change - twenties).toFixed(2));
        actualChangeReturned.push(["TWENTY", twenties]);
        twenties = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = parseFloat((change - (changeUsed * 20)).toFixed(2));        
        actualChangeReturned.push(["TWENTY", changeUsed * 20]);
      }
      
      change = changeRemaining;
    } else if ((change > 10) && (tens !== 0)){
      changeAvailable = tens / 10;
      changeUsed = (change / 10) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = parseFloat((change - tens).toFixed(2));
        actualChangeReturned.push(["TEN", tens]);
        tens = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = parseFloat((change - (changeUsed * 10)).toFixed(2));
        actualChangeReturned.push(["TEN", changeUsed * 10]);
      }
      
      change = changeRemaining;
    } else if ((change > 5) && (fives !== 0)){
      changeAvailable = fives / 5;
      changeUsed = (change / 5) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = parseFloat((change - fives).toFixed(2));
        actualChangeReturned.push(["FIVE", fives]);
        fives = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = parseFloat((change - (changeUsed * 5)).toFixed(2));
        actualChangeReturned.push(["FIVE", changeUsed * 5]);
      }
      
      change = changeRemaining;
    } else if ((change > 1) && (ones !== 0)){
      changeAvailable = ones / 1;
      changeUsed = (change / 1) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = parseFloat((change - ones).toFixed(2));
        actualChangeReturned.push(["ONE", ones]);
        ones = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = parseFloat((change - (changeUsed * 1)).toFixed(2));
        actualChangeReturned.push(["ONE", changeUsed * 1]);
      }
      
      change = changeRemaining;
    } else if ((change > 0.25) && (quarters !== 0)){
      changeAvailable = quarters / 0.25;
      changeUsed = (change / 0.25) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = parseFloat((change - quarters).toFixed(2));
        actualChangeReturned.push(["QUARTER", quarters]);
        quarters = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = parseFloat((change - (changeUsed * 0.25)).toFixed(2));
        actualChangeReturned.push(["QUARTER", changeUsed * 0.25]);
      }
      
      change = changeRemaining;
    } else if ((change > 0.10) && (dimes !== 0)){
      changeAvailable = dimes / 0.10;
      changeUsed = (change / 0.10) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = parseFloat((change - dimes).toFixed(2));
        actualChangeReturned.push(["DIME", dimes]);
        dimes = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = parseFloat((change - (changeUsed * 0.10)).toFixed(2));
        actualChangeReturned.push(["DIME", changeUsed * 0.10]);
      }
      
      change = changeRemaining;
    } else if ((change > 0.05) && (nickels !== 0)){
      changeAvailable = nickels / 0.05;
      changeUsed = (change / 0.05) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = parseFloat((change - nickels).toFixed(2));
        actualChangeReturned.push(["NICKEL", nickels]);
        nickels = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = parseFloat((change - (changeUsed * 0.05)).toFixed(2));
        actualChangeReturned.push(["NICKEL", changeUsed * 0.05]);
      }
      
      change = changeRemaining;
    } else if ((change > 0.01) && (pennies !== 0)){
      changeAvailable = pennies / 0.01;
      changeUsed = (change / 0.01) >> 0;
      if (changeAvailable - changeUsed < 0){
        changeRemaining = parseFloat((change - pennies).toFixed(2));
        actualChangeReturned.push(["PENNY", pennies]);
        pennies = 0;
      } else if (changeAvailable - changeUsed >= 0) {
        changeRemaining = parseFloat((change - (changeUsed * 0.01)).toFixed(2));
        actualChangeReturned.push(["PENNY", changeUsed * 0.01]);
      }

      change = changeRemaining;
    } else {
      return "Insufficient Funds";
    }
  }
  
  return actualChangeReturned;
}

function currentRegisterTotal(cid){
  var total = 0;
  var conversion = 0;
  var individualTotal = 0;
  cid.forEach(function(item){
    switch (item[0]){
      case "PENNY":
        conversion = 0.01;
        individualTotal = item[1];
        break;
      case "NICKEL":
        conversion = 0.05;
        individualTotal = item[1];
        break;
      case "DIME":
        conversion = 0.10;
        individualTotal = item[1];
        break;
      case "QUARTER":
        conversion = 0.25;
        individualTotal = item[1];
        break;
      case "ONE":
        conversion = 1.00;
        individualTotal = item[1];
        break;
      case "FIVE":
        conversion = 5.00;
        individualTotal = item[1];
        break;
      case "TEN":
        conversion = 10.00;
        individualTotal = item[1];
        break;
      case "TWENTY":
        conversion = 20.00;
        individualTotal = item[1];
        break;
      case "ONE HUNDRED":
        conversion = 100.00;
        individualTotal = item[1];
        break;
      default:
        break;
    }
    
    total += individualTotal;
  });
  
  return total;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

// ERRATA
//
// BOY was this one annoying. I use Math.floor (and finally >>) to fix a floating point issue...
// ...but the problem was in handling subtraction between floats and ints. (Surprising, actually.)
//
// Ultimately parsedFloat and forced precision to guarantee number behavior.
