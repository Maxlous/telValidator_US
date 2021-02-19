function telephoneCheck(str) {
    if(str[0] === "(" && str[str.length-1] === ")"){
      return false
    }
    let total = [];
    for (let i =0; i<str.length;i++){
      let num = parseInt(str[i]);
      if (num === 0 || num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 ||num === 9){
        total.push(num)
      }
    }
    let strArr = str.split("");
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
    else if (total.length > 11){
      return false
    }
    else if (total.length === 11){
      if (total[0] === 1){
        return true
      } else {
        return false
      }
    }
    else if (total.length < 10){
      return false
    }
    else if (total.length === 10) {
      return true
    } 
  }
  
  
