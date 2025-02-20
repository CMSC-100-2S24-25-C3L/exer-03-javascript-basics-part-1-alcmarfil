function validatePassword(string1, string2){
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  var numCount =0;
  var uppercaseCount =0;
  var lowercaseCount =0;

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
            numCount++;
          }
      }
    }

    if (numCount > 0 && uppercaseCount >0 && lowercaseCount >0){
      return true;
    }
  }
  return false;
}

// var checker = validatePassword("Helloworld1", "Helloworld1");
// console.log(checker);

function reverseString(string1){
  let len = string1.length;
  let reversedString ="";

  for (let i= len-1 ; i>=0 ; i--){
      reversedString += string1[i];
  }

  return reversedString;
}

function storePassword (name, pass1,pass2){
  let newpass = "";
  if (validatePassword(pass1, pass2) == true){
    newpass = reverseString(pass1);
  } else {
    newpass = pass1;
  }

  const information = {
    name: name,
    newPassword : newpass
  }


  return information;
}

console.log(validatePassword("hello", "hello"))
console.log(validatePassword("Hello1234", "Hello1234"))
console.log(validatePassword("HELLO1234", "HELLO1234"))
console.log(validatePassword("HELLO1234", "HELLO 1234"))

console.log(storePassword("John", "Pass12345", "Pass12345"))
console.log(storePassword("John", "Pass12345", "Pass1234"))