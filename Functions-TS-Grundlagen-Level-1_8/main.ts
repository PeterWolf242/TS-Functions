function ageCompare(birthYear: number) {
    const date = new Date();
    const year = date.getFullYear();

    const age = year - birthYear;
    console.log(year);
    console.log(age);
}

ageCompare(1976);

function ageCompare2(birthYear1: number, birthday2: number) {
    const date = new Date();
    const year = date.getFullYear();

    const age1 = year - birthYear1;
    const age2 = year - birthday2;

    let altersDifferenz: number;

    if (age1 < age2) {
        altersDifferenz = age2 - age1;
        console.log(`Der Altersunterschied beträgt ${altersDifferenz} Jahre.`);
    } else {
        if (age2 < age1) {
            altersDifferenz = age1 - age2;
            console.log(`Der Altersunterschied beträgt ${altersDifferenz} Jahre.`);
        }
        else {
            console.log("Beide Personen sind gleich alt");
            return;
        }
    }
}

ageCompare2(1976, 1993);