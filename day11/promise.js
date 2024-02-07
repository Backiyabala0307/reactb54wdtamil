// let promiseObj = new Promise((res, rej) => {
//     console.log("this is get executed");
// });
// console.log(promiseObj);

let promiseObj = new Promise((res, rej) => {
    console.log("Getting name...");
    // res("Backiya");
    rej(new Error("couldn't fetch name"));
});
// promiseObj.then(
//     (val) => {
//         console.log(`name:${val}`);
//     },
//     (error) => {
//         console.log(`${error}`);
//     });
promiseObj.catch((err) => {
    console.log(`${err}.`);
});   