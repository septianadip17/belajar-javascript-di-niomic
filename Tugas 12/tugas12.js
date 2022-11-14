function panggilBuah(){
    var buah = ['Pisang', 'Jeruk', 'Apel', 'Mangga'];
    console.log(buah)
    buah.pop()

    console.log('========')

    var buah2 = buah.shift()
    console.log(buah2)


    return buah

}


console.log(panggilBuah())