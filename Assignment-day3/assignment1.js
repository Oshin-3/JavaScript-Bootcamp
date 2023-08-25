function getRandomColor()
{
    console.log('inside getRandomColor()');
    let letter = '0123456789ABDCEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }

    return color
}

function changeBackgroundColor()
{
    document.body.style.backgroundColor = getRandomColor();
}