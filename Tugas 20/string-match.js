function mat(){
    var isi = "Saya Pintar memasak nasi goreng";
    console.log(isi.match("Pintar"));
    console.log(isi.match("goreng"));
    console.log(isi.match(/goreng/));


}
mat();

//digunakan untuk mencari reguler expression tetapi hasilnya berupa array.