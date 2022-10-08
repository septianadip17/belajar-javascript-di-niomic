function panggilObject(){
    var proplayer = {
        nama : 'Ipal',
        umur : 47,
        game : 'Ninja Saga',
        kejuaraan : 0,
    }
    for(var x in proplayer){
        console.log(proplayer[x])
    }
}

panggilObject();