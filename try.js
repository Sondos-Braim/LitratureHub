var lName;
var fName;
fName =prompt("enter your First name");
lName =prompt("enter your Last name");
function sayyourname(first,Last){
    return lName,fName;
}
document.write("Hey, "+ fName +"  "+ lName+ ", how are you today?");

 
var userinput
userinput=prompt("How many books do you read a month?");
function read(book){
    var greetings;
    while(isNaN(userinput)||userinput == '') { 
        userinput=prompt("Please insert a number");
    }
      if (book>10) {
        greetings= 'Great Job!'; 
    } else {
        greetings='Try harder';
    }
    return greetings;
}
read(userinput);
// document.write();
document.write('<h3>' + read(userinput) + '</h3>');
