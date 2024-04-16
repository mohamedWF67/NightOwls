function allnumeric(inputtxt)
{
    var numbers = /^[0-9]{2}[/]$/;
    if(inputtxt.value.match(numbers))
    {
        alert('Your Registration number has accepted....');
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
        alert('Your Registration number has accepted....');
        return true;
    }
    else
    {
        alert('Please input numeric characters only');
        inputtxt.focus();
        return false;
    }
}