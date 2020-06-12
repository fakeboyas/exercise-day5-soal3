let age = prompt("Masukan umur kucing");

ageOfCat = (age) => {
    if (age === 1) {
        return 15;
    } else if (age === 2) {
        return 24;
    } else if (age >= 3) {
        return 24 + (age - 2) * 4;
    }
};

document.getElementById(
    "demo3"
).innerHTML = `Umur kucing ${age} tahun dalam umur manusia adalah ${ageOfCat(
    age
)} tahun`;
