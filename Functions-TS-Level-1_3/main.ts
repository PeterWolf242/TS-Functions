
function showPersonInfo(name: string, city: string, age: number) {
    const ageRound = Math.floor(age);
    console.log(`Hallo, meine Name ist ${name}. Ich bin ${ageRound} Jahre alt. Ich komme aus ${city}`);
}

showPersonInfo("Peter", "Ottersweier", 48.937);