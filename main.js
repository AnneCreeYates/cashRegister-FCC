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

  let cidToSumUp = [];

  /*Trying forEach option - so far not working well*/
  // cid.forEach(arr => {
  //   arr.forEach(item => console.log(item));
  // })
  /*double iteration through arrays - prints all the numbers twice*/
  // for (let i=0; i<cid.length; i++){
  //   for (let j=0; j<cid[i].length; j++){
  //     cidSummedUp.push(cid[i][1]);
  //   }
    
  // };

    for (let i=0; i<cid.length; i++){
        cidToSumUp.push(cid[i][1]);
       };
  
    let totalCidSum = cidToSumUp.reduce((a,b)=>a+b,0)*100/100;
      // console.log(totalCidSum);
     if (change < totalCidSum){
        return {status: "OPEN", change: []}
        
     }else if (change === totalCidSum){
        return {status: "CLOSED", change: []}
     }else{
        return {status: "INSUFFICIENT_FUNDS", change: []}
     }
  };
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  

    // if( change < cidSummedUp){

    // }else if (change == cidSummedUp){

    // }else{

    // }