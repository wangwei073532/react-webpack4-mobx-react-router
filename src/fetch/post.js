import 'whatwg-fetch'
import 'es6-promise'

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}

// 发送 post 请求
export const post = (url, paramsObj) => {
    const overTime = setTimeout(function () {
        alert('访问超时!!')
    },9000);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/javascript, */*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        mode : 'cors',
        body: obj2params(paramsObj)

    }).then((res) => {
        clearTimeout(overTime)
        if(res.status === 403 || res.status === 401){
            return null;
        }
        return res.json()
    }).catch((err) =>{
        console.log(err)
    });

}

