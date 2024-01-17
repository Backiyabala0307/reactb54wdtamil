
// var mytoy = "teddy bear";
// console.log(mytoy);
// mytoy = "race car";
// console.log(mytoy);

// let mytoy = "teddy bear";
// console.log(mytoy);
// mytoy = "race car";
// console.log(mytoy);


//variable scoping
function playwithtoys() {
    if (true) {
        var toy1 = "toy1";
        let toy2 = "toy2";
        const toy3 = "toy3";
    }
    else {
        let toy4 = "toy4";
    }
    console.log(toy1);
    console.log(toy2);
    console.log(toy3);
    console.log(toy4);
}



playwithtoys();
