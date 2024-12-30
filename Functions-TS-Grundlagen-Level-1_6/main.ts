const x: number = 2;
let y = ReturnOne();

function ReturnOne() {
    return 1;
}

if (x === y) {
    console.log("Wird das gedruckt?");
    console.log("X: " + x);
}