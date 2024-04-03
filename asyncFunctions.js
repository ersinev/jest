function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 1000);
    });
}

const fetchPlaceHolder = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    return data

}
module.exports = {fetchData, fetchPlaceHolder}