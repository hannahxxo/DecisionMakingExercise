// 1a
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// 1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
}

if (randomNum == 2 || randomNum == 3) {
    console.log("Equal to 2 or 3");
}

if (randomNum == 1) {
    console.log("Equal to 1");
}

// 1c
if (randomNum != 3) {
    console.log("Not equal to 3");
}

// 1d
if (randomNum != 3 && randomNum != 5) {
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum == 2 || randomNum == 4) {
    console.log("Equal to 2 OR equal to 4");
}