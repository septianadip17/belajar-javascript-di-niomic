function angkaSort(){
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya: " + angka);
    console.log("===============================")
    angka = angka.sort();

    return angka
}

console.log("Ascending: " + angkaSort());
console.log("===============================")
console.log("Descending: " + angkaSort());


