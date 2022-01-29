var color = 'green';

if (color == 'red') {
    console.log('It is Red');
}

else if (color == 'yellow') {
    console.log('It is yellow');
}
else if (color == 'blue') {
    console.log('It is blue');
}
else if (color == 'black') {
    console.log('It is black');
}
else if (color == 'sky') {
    console.log('It is sky');
}
else if (color == 'brown') {
    console.log('It is brown');
}
else if (color == 'green') {
    console.log('It is green');
}
else {
    console.log('It is no color');
}

switch (color) {
    case 'red':
        console.log('it is red');
        break;
    case 'gray':
        console.log('it is gray');
        break;
    case 'white':
        console.log('it is white');
        break;
    case 'green':
        console.log('it is green');
        break;

    default:
        console.log('it is black');
        break;
}