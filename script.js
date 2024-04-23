//buycard
document.getElementById("slider").style.scrollBehavior = "smooth";
function submitcard(x,y,z){
    allnumeric(x);
    expire(y);
    cardno(z);
}
function allnumeric(inputtxt)
{
    var numbers = /^[0-9]+$/;
    if(inputtxt.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Please input numeric characters only');
        inputtxt.focus();
        return false;
    }
}
function expire(inputtxt)
{
    var numbers = /^[0-9]{2}[/][0-9]{2}$/;
    if(inputtxt.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Please input numeric characters only');
        inputtxt.focus();
        return false;
    }
}
function cardno(inputtxt)
{
    var numbers = /^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/;
    if(inputtxt.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Please input numeric characters only');
        inputtxt.focus();
        return false;
    }
}
//dark mode
function darkmode(){
    document.body.classList.toggle("dark");
}
function scrollr(scroll_element) {
    scroll_element.scrollBy(300,0);
}
function scrolll(scroll_element) {
    scroll_element.scrollBy(-300,0);
}