import axios from 'axios'

const Util = {}

Util.get = function (config) {
    return new Promise(((resolve, reject) => {
        const instance = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            timeout: 3000,
            method: 'get'
            //定义请求根目录
            // baseURL: 'http://www.xxx.com/'
        });

        instance(config).then(res => {
            if (res.status === 200) {
                resolve(res.data);
            } else {
                reject("Error")
            }
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    }));
}

export default Util