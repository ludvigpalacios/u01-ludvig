let isHidden=false;
/*We want to have the menu hidden by default, but remove the class once we click the hamburger icon */
/*Grab elements from html */
const grabHidden=document.querySelectorAll(".hidden");
const grabHamburgers=document.querySelectorAll(".hamburgare");

/*Listen for click */

grabHamburgers.forEach(function (hamburger) { 
  hamburger.addEventListener("click", removeHidden);
});

/*Maybe we can create a variable isHidden*/


    function removeHidden(){
        console.log("removeHiddenbutton has been pressed")
        //grabHidden.classList.toggle("active");
        if(isHidden===false){
                grabHidden.forEach((hidden) => { /*Using arrows to skip writing 'function', does the same thing*/
                hidden.classList.remove("hidden");
                console.log("Button is now shown")
                return isHidden=true;
            });
        }
        else{
                grabHidden.forEach(function (hidden) {
                hidden.classList.add("hidden");
                console.log("button is now hidden")
                return isHidden=false;
            });
        }
        
}


