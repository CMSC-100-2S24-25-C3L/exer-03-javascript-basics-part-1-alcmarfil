function validatePassword(string1, string2){
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers ="0123456789";

  let numCount =0, uppercaseCount =0, lowercaseCount =0;

  if (string1 === string2){
    if (string1.length >= 8){
      for (let i = 0; i<string1.length; i++){
        let char = string1[i];
          if (uppercase.includes(char)){
            uppercaseCount++;
          }

          if(lowercase.includes(char)){
             lowercaseCount++;
          }

          if(numbers.includes(char)){
            numCount++
          }
      }
    }

    if (numCount > 0 && uppercaseCount >0 && lowercaseCount >0){
      return true;
    }
  }
  return false;
}

// var checker = validatePassword("helloworld", "hello");
// console.log(checker);