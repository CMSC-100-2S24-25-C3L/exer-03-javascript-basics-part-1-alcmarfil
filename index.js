function validatePassword(string1, string2){
  //will use to validate if there is at least 1 uppercase, lowercase, and a number in the password 
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  //variables for keeping track of the count 
  let numCount =0;
  let uppercaseCount =0;
  let lowercaseCount =0;

  if (string1 === string2){ //check first if they are equal before proceeding
    if (string1.length >= 8){ //check if at least 8 characters 
      for (let i = 0; i<string1.length; i++){ //;oop thru the string 
        let char = string1[i];
          if (uppercase.includes(char)){ //check if the character is a substring of the string uppercase
            uppercaseCount++;
          }

          if(lowercase.includes(char)){ //check if the character is a substring of the string lowercase
             lowercaseCount++;
          }

          if(numbers.includes(char)){ //check if the character is a substring of the string numbers
            numCount++;
          }
      }
    }

    if (numCount > 0 && uppercaseCount >0 && lowercaseCount >0){ //check if there is at least 1 in all 
      return true;
    }
  }
  return false; //not valid password 
}

//test cases for validate password  
console.log(validatePassword("hello", "hello"))
console.log(validatePassword("Hello1234", "Hello1234"))
console.log(validatePassword("Hello12", "Hello12"))
console.log(validatePassword("HELLO1234", "HELLO1234"))
console.log(validatePassword("HELLO1234", "HELLO 1234"))

function reverseString(string1){
  let len = string1.length; 
  let reversedString ="";

  for (let i= len-1 ; i>=0 ; i--){ //loop thru the string reversed 
      reversedString += string1[i]; //concatenate each character at the new variable 
  }

  return reversedString; //return the reversed string 
}

//test cases for reverse string 
console.log(reverseString("hellO1"))
console.log(reverseString("John1"))



function storePassword (name, pass1,pass2){
  let newpass = "";
  if (validatePassword(pass1, pass2) == true){ //check first if valid 
    newpass = reverseString(pass1);
  } else { //if password not valid 
    newpass = pass1;
  }

  const information = { //object for the name and password
    name: name,
    newPassword : newpass
  }


  return information; //return the object 
}

//test cases for storePassword 
console.log(storePassword("John", "Pass12345", "Pass12345"))
console.log(storePassword("John", "Pass12345", "Pass1234"))
console.log(storePassword("Athalia", "hello World12", "hello World12"))
console.log(storePassword("Athalia", "helloWorld11", "helloWorld12"))