function cari(){
    var isi = "Belajar di Niomic academy dengan fasih.";
    console.log(isi.search("di"));
    console.log(isi.search(/di/));
}
cari();

//sama seperti indexof tapi pencariannya berdasarkan reguler expression