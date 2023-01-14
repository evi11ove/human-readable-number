module.exports = function toReadable (number) {
  let belowTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundredths = 'hundred';
  const belowHundred = (number) =>{
    if (number < 20){
        return belowTwenty[+number];
    }
    else if (number.toString().endsWith('0')){
      return dozens[+number.toString().slice(0, 1) - 2];
    }
    else {
      return `${dozens[+number.toString().slice(0, 1) - 2]} ${belowTwenty[+number.toString().slice(1)]}`;
    }
  }
  const afterHundred = (number) => {
    if (number.toString().endsWith('00')) {
      return `${belowTwenty[+number.toString().slice(0, 1)]} ${hundredths}`;
    }
    else {
      return `${belowTwenty[+number.toString().slice(0, 1)]} ${hundredths} ${belowHundred(number.toString().slice(1))}`
    }
  }
  if (number >= 100){
    return afterHundred(number);
  }
  else {
    return belowHundred(number);
  }
}
