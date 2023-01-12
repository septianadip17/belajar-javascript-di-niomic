function panggilRegexp(value){
    var ambilData = value.match(/ke/g);
    var ambilData2 = value.match(/Bulan/g);
    var ambilData3 = value.match(/[ke]/g);
    
    console.log(ambilData);
    console.log(ambilData2);
    console.log(ambilData3);
}

panggilRegexp("Bulan ke 1 sd ke 4");