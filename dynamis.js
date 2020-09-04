function name(){
    var fName=prompt("enter your First name");
    var lName=prompt("enter your Last name");
 document.write("Hey, "+ fName +"  "+ lName+ ", how are you today?");
 }
 name();

 function books(){
 var userinput=prompt("How many books do you read a month?");
 
     var greetings;
     while(isNaN(userinput)||userinput == '') { 
         userinput=prompt("Please insert a number");
     }
       if (userinput>10) {
         greetings= 'Great Job!'; 
     } else {
         greetings='Try harder';
     }
 document.write('<h3>' + greetings + '</h3>');
    
    }

 books();











