function generatePassword() {
    debugger;
    let length = document.getElementById('length').value;
    if(length <8 || length > 128)
    {
        document.getElementById('length').classList.add('alert-danger');
        document.getElementById('lengthError').innerHTML = "must be between 8 and 128";
    }
    else
    {
        document.getElementById('length').classList.remove('alert-danger');
        document.getElementById('lengthError').innerHTML = "";
    }
    
   let lower = document.getElementById('lower').checked;
   let upper = document.getElementById('upper').checked;
   let numeric = document.getElementById('numeric').checked;
   let special = document.getElementById('special').checked;
   if(lower || upper || numeric || special)
   {
    document.getElementById('characters').classList.remove('alert-danger');
   }
   else{
    document.getElementById('characters').classList.add('alert-danger');
   }
   
   //create array for each option (there will be 3 arrays):
   //eg.
   let lowerArray = ['a','b','d'];
   //if lower - choose random letter - toLowerCase(), if upper - choose random letter - toUpperCase()
   let chosen = ['lower','special'];
   //chosen[0] -> 'lower'
   // rand no bettwen 0 and 26 (alphabet) lower array - eg. 15
   //add to password the 15th item in the array
   //
   //for loop from 0 to length; this loop repeats the previous steps until the right number of characters are selected to generate the password
}
