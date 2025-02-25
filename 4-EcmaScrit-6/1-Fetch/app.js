function succes(respons){
    console.log(respons);
}
function errorfunc(reject){
    console.log(reject);
}


const url = fetch('').then(succes).catch(errorfunc);
