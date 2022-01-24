// constructor function Movie
function Movie(title, rating){
        // property title
        this.title = title;
        // property rating
        this.rating = rating;
        // property year
        this.year = year;
        // validate method to validate title and rating
        this.validate = function(){
                // converting rating to number
                var num_rat = parseInt(this.rating);
                // if title is valid and num_rat between 1 and 5 return true
                if(title && (num_rat>=1 && num_rat<=5)){
                        return true;
                }
                else{ // otherwise false
                        return false;
                }
        }
        // toString method
        this.toString = function(){
                return "Movie: "+this.title+", Rating: "+this.rating;
        }
    }
