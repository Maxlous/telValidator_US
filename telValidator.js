function telephoneCheck(str) {
  //eliminate the ones who start and end with parentheses
    if(str[0] === "(" && str[str.length-1] === ")"){
      return false
    }
    let total = [];
    //if number push to array for checking
    for (let i =0; i<str.length;i++){
      let num = parseInt(str[i]);
      if (Number.isInteger(num)){
        total.push(num)
      }
    }
    let strArr = str.split("");
    //find use of dash/parantheses number 
    let paranthesis = strArr.filter(function(char) {
      return char === ")" || char === "("
    });
    let dash = strArr.filter(function(char) {
      return char === "-"
    }); 
    if (paranthesis.length >=1 && dash.length > 1){
      return false
    }
    else if (paranthesis.length > 3 || paranthesis.length === 1){
      return false
    }
    else if (total.length > 11 || total.length < 10){
      return false
    }
    //check country code
    else if (total.length === 11){
      if (total[0] === 1){
        return true
      } else {
        return false
      }
    }
    else if (total.length === 10) {
      return true
    } 
  }
  
  
