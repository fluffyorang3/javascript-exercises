const fibonacci = function(nth) {

  if (typeof nth !== 'number') {
    nth = Number(nth);

  
  let x = 0;
  let y = 1;
  let z = 0;
  let array = [];
  for(i = 1; i < (nth); i++) {
    
    z = x + y
    x = y
    y = z 

    array.push(z);
  }
  if (nth == 0) {
    return 0;
  } else if (nth > 0){
    return array[nth - 2];
  } else {
    return "OOPS";
  }
  
}

// Do not edit below this line
module.exports = fibonacci;
