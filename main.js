function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  const currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
  }

  let cidSummedUp = [];

  cid.forEach(arr => {
    arr.forEach(item => console.log(item));
  })
  
  // for (let i=0; i<cid.length; i++){
    // cidSummedUp.push(cid[0][1]);
  // };
  

    // if( change < cidSummedUp){

    // }else if (change == cidSummedUp){

    // }else{

    // }

  }
  

  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);