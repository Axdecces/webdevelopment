let a = 10;

let heading = document.querySelector('.heading');

function changeHeading() {
    heading.innerHTML = 'Heading';
    heading.style.backgroundColor = 'white';
    console.log(heading.innerHTML);
}

setTimeout(changeHeading, 1000);

function addFive(x) {
    return x + 5;
}

// let y = addFive(5);

// console.log(y);

alert('HALLO');