function multiplyAndDivide(a: number, b: number) {
    if (b == 0) {
        console.log(`%cDivision durch Null ist nicht erlaubt !`, `color: red; font-weight: bold`);
        return;
    }
    console.log(a / b);
    return a / b;
}

multiplyAndDivide(10, 0);

multiplyAndDivide(10, 2);

multiplyAndDivide(30, 20);

multiplyAndDivide(100, 100);

multiplyAndDivide(5, 0);

multiplyAndDivide(45, 173);

multiplyAndDivide(1, 1000);