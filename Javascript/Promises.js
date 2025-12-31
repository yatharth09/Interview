//A promise is an object representing eventual completion
// promise object takes a callback inside of it as an argument
const promiseOne = new Promise((resolve, reject) => {
    //any async task
    //DB calls, network, cryptography

    setTimeout(() => {
        console.log('Async task complete1')
        resolve() // resolve is directly connected with the .then part while consuming a promise
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise consumed1')
})


new Promise((resolve, reject) => {
    //any async task
    //DB calls, network, cryptography

    setTimeout(() => {
        console.log('Async task complete2')
        resolve() // resolve is directly connected with the .then part while consuming a promise
    }, 1000)
}).then(() => {
    console.log('Promise consumed2')
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task complete3')
        resolve({user:"Hello", email: "hello@example.com"})
    }, 1000)
})

promiseThree.then((data) => {
    console.log('Promise consumed3', data)
})


const promiseFour = new Promise((resolve, reject) => {



    setTimeout(() => {
        if(false){
            reject('Something went wrong')
        }
        console.log('Async task complete4')
        resolve({user:"Hello", email: "hello@example.com"})
    }, 10000)
})

promiseFour.then((data) => {
    console.log('Promise consumed4', data)
    return data.user
}).then((data) => {console.log(data)}).catch((err) => {
    console.log(err)
})