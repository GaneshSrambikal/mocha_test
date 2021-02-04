// fareheit to celcius

//[23,140,212,41] => [-5,60,100,5]

// formula
//(32°F − 32) × 5/9 = 0°C

function getCelcius(farenheit) {
    return farenheit.map(value => (value - 32) * 5 / 9)
}

function getSquares(num) {
    return num * num
}