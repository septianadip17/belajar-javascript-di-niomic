function pangggilShift(){
    var kota = ['jakarta', 'bandung', 'malang', 'surabaya', 'makasar'];
    console.log(kota);
    console.log('=======================')
    kota = kota.shift();

    // var kota2 = kota.shift()
    // console.log(kota2)

    return kota
}

console.log(pangggilShift());