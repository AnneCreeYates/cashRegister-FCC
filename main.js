function checkCashRegister(price, cash, cid) {
  const currency = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000,
  }
   

  let cidToSumUp = [];
  for (let i=0; i<cid.length; i++){
      cidToSumUp.push(cid[i][1]);
     };
  let totalCidSum = cidToSumUp.reduce((a,b)=>a+b,0)*100/100;

  let change = cash * 100 - price * 100;
  let changeToGive = [];
  
  if (change > totalCidSum){
    return {status: "INSUFFICIENT_FUNDS", change: []}
   }else if (change*100/100 === totalCidSum){
      return {status: "CLOSED", change: [cid]}
   }else{
    for (let value of cid){
    while (change >= currency[value[1]]){
         
    }console.log(value);
      
    
     return {status: "OPEN", change: []};
       }
     }

   };
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  

    // if( change < cidSummedUp){

    // }else if (change == cidSummedUp){

    // }else{

    // }