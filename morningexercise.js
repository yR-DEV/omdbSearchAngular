numerals = function(str) {
  var splitStr = str.toUpperCase().split('');
  var romanNumValues = [1000, 500, 100, 50, 10, 5, 1];
  var romanNumerals = ['M', 'D', 'C', 'L','X', 'V', 'I']
  var tempArr = [];
  var tempSum = 0;

  for(var i = 0; i < splitStr.length; i++) {
    for(var j = 0; j < romanNumerals.length; j++) {
      if(splitStr[i] === romanNumerals[j]) {
        tempArr.push(j);
      }
    }
  }

//6, 5
  for(var x = 0; x < tempArr.length; x++) {
    // console.log(tempArr[x]);
    if(tempArr[x] > tempArr[x + 1]) {
      // console.log('less than');
      tempSum += (romanNumValues[tempArr[x + 1]] - romanNumValues[tempArr[x]]);
    } else if (tempArr[x] <= tempArr[x + 1]) {
      console.log('twice');
      tempSum += romanNumValues[tempArr[x]];
    } else if (x + 1 >= tempArr.length) {
      tempSum += romanNumValues[tempArr[x]];
    }
  }

  console.log(tempSum);


}
//I cannot, for the life of me, return the proper number when a digit that is not
//less than the digit that follows it. I. E. I can make IX and IV come back as 9 and 4 but I cannot make
//VII come back as 7, I get 6. Something wrong with my logic, i will figure it out.
numerals('VII'); //cannot make this come out anything other than 6
numerals('IV'); //comes out to 4
numerals('IX'); //comes out to 9
