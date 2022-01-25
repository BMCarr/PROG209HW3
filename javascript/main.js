
const movieArr = []; //create array to store movies

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
    if (b > 5 || b < 1)
    {
        return true;
    }
    if (a == null || a == "", b == null || b == "", c = null || c == "")
    {
        return true;
    }
    return false;
}

//method to add fields to Movie list:
function AddMovie() {
    let a = document.getElementById("mtitle").value;
    let b = document.getElementById("mrating").value;
    let c = document.getElementById("myear").value;
    if (Validation() == true)   //check IF any fields are empty
    {
        alert("Data not correct."); //IF empty, then alert, don't save
    }
    else
    {
       let tempMovie = new Movie(a, b, c);   //create Movie object
       movieArr.push(tempMovie);    //save data in array
    document.getElementById("mtitle").value = "";   //at end of method, tell it to clear text fields
    document.getElementById("mrating").value = "";
    document.getElementById("myear").value = ""; 
    }
    return true;   
}

function CompareRanking (a, b){
    if (a.rating < b.rating){
        return -1;
    }
    if (a.rating > b.rating){
        return 1;
    }
    return 0;
}

//display movies in a list
document.getElementById("btn-show").addEventListener("click", function () { 
    console.log(movieArr);
    movieArr.sort(CompareRanking);      //sort movies by ranking
    let message = "Title  Rating\n";
    for (i = 0; i < movieArr.length; i++) {
        message = message + movieArr[i].title + "  " + movieArr[i].rating + "\n";
    }
    document.getElementById("output").value = message;
});