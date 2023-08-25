const names = ['Aarav', 'Sanya', 'Vikram', 'Neha', 'Rohan', 'Priya', 'Amit', 'Meera', 'Rajiv', 'Ananya'];
let count = 0;

function getFirstName()
{
    document.getElementById("value").innerHTML = names[count];
}

function getPreviousName()
{
    if (count > 0)
    {
        count -= 1;
    }
    document.getElementById("value").innerHTML = names[count];
}

function getNextName()
{
    if (count < names.length-1)
    {
        count += 1;
    }
    document.getElementById("value").innerHTML = names[count];
}