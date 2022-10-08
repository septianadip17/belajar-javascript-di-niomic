function perulangan() {
    for (var i = 1; i <=20; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }else if (i % 2 == 0){
            console.log('ini bilangan genap')
        }else if (i == 1){
            console.log(i)
        }
    }
}
perulangan()