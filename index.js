// code your solution here
// function should receive 1 argument, an Array of JS object
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
function superbowlWin(record){
  const win = record.find(({result}) => result === 'W');
  if (win){
    return win.year;
  }
  else{
    return undefined;
    
}  
}
