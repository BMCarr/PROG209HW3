//TO DO: create array (needs to store 10 moviex max)
//TO DO: write out movies sorted by ranking


//make Class called Movie
class Movie {
    constructor(title, rating, year){
        this.title = title;
        this.rating = rating;
        this.year = year;
}     
}

document.getElementById("btn-add").addEventListener("click", AddMovie);  //click Add Movie connected to AddMovie method


//method to verify if any fields are empty
//*TO DO: should add validation for "rating should be integer from 1 to 5"
function Validation() {
    let a = document.getElementById("mtitle").value;
    let b = document.getElementById("mrating").value;
    let c = document.getElementById("myear").value;
    if (a == null || a == "", b == null || b == "", c = null || c == "")
    {
        return true;
    }
    return false;
}

//method to add fields to Movie list:
//check IF andy fields are empty
    //IF empty, then alert, don't save
function AddMovie() {
    if (Validation() == true)
    {
        alert("Data not correct.");
    }
    else
    {
        //*TO DO:
//ELSE continue with saving:    
//create Movie object
//save data (store in array)
//at end of method, tell it to clear text fields
    }
    return true;   
}

