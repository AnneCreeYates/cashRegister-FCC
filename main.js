function checkCashRegister(price, cash, cid) {
  //items needed for solving the calculation
  //the current unit object that will be used for comparison - currency unit matrix
    const currencyUnit = {
      "ONE HUNDRED": 100,
      "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.10,
      "NICKEL": 0.05,
      "PENNY": 0.01,
    }
  
  //the amount of change we need to give
    let exactChange = cash * 100 - price * 100;
    //console.log(exactChange);
    let notesAndCoins = []; //placehgolder for new change outcome that is to be bills and notes that are to be given our(change is to be pushed here) 
    
  //amount the cid summes up to
    let cidTotal = 0;
    for (let i=0; i < cid.length; i++){
      cidTotal += cid[i][1];
    }
    cidTotal = cidTotal*100; //times 100 because js has issues with calculating floats
    //console.log(cidTotal)
  
    //compare the change to give with the cid sum - 3 outcomes expected
    
    // 1. there is not enough change in the cid; another logic to try ->  cid[0][1]*100 !== exactChange <- seems to be working better than -> cidTotal < exactChange
    if (cid[0][1]*100 !== exactChange){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    //2. there is exactly enough change in the cid
    else if (cidTotal === exactChange){
      return {status: "CLOSED", change: cid}
    }
    //3. there is more than needed - push the reversed (if the matrix is from smallest to biggest) array containing the notes and coins to the solution
    else {
      cid = cid.reverse(); //causes the originam cid array to be reversed from highest to lowest
    for(let item in cid){
      
      let temp = [item[0],0];
      while(exactChange >= currencyUnit[item[0]] && item[1] > 0){
        temp[1] += currencyUnit[item[0]];
        item[1] -= currencyUnit[item[0]];
        exactChange = exactChange.toFixed(2);
      }
      if (temp[1] > 0){
      notesAndCoins.push(temp);
      }
    }
  }
  return {status: "OPEN", change: notesAndCoins} 
    
    
    
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);