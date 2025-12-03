console.log("File Location :", __filename);
console.log("Directory Location :", __dirname);


let isLoader = true;
let totalSecond = 30;

setTimeout(() => {
    console.log("I am JS 😁");
    isLoader = false;
}, 60000);

setInterval(() => {
    // console.log("Hello Node JS", second--);

    if (totalSecond == 0) {
        return;
    }
    totalSecond--;

    let minutes = Math.floor(totalSecond / 60); // 120 / 60 = 2
    let second = totalSecond % 60; // 120 % 60 = 0

    console.log(`${minutes} : ${second}`);

}, 1000);

// module
// require()
