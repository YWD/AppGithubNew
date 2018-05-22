export default class HttpUtil{
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json())
                .then(result => resolve(result))
                .catch(error => {   // catch可以捕捉reject
                    console.log(JSON.stringify(error));
                });
        });
    }

    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
                .then(result => resolve(result))
                .catch(error => console.log(JSON.stringify(error)));
        });
    }
}