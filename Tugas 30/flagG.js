function panggilRegexp(){
    let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";

    console.log(str.match(/c/g));
    console.log(str.match(/c/));
}

panggilRegexp()