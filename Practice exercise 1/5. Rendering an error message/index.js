// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let variable = document.getElementById('error')

function errormsg(){
    variable.textContent="Something went wrong, please try again"
    console.log(variable)
}
