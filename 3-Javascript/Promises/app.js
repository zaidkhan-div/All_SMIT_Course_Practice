function succes(respons) {
    // console.log(respons);
    return respons.json()
}
function errorfunc(reject) {
    console.log(reject);
}
function data(data) {
    console.log(data);
}

// fetch('https://fakestoreapi.com/products').then(succes).then(data).catch(errorfunc);

function completeTask() {
    console.log('I love You !');
}
function notCompleteTask() {
    console.log('Something Went Wrong');
}

function doAsynTask() {
    let promise = new Promise((resolve, reject) => {
        let succes = true;
        setTimeout(() => {
            if (succes) {
                resolve('I love you!')
                // resolve(completeTask())
            } else {
                reject('Something Went Wrong')
                // reject(notCompleteTask())
            }
        }, 1000);
    })
    return promise
}

doAsynTask().then(data).catch(errorfunc);