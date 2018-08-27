/**
 * Created by 11408 on 2018/7/26.
 */
const Mock = require('mockjs')
const Template = {
    "code":'0',
    "msg":'suc',
    'result':{
        "data":"成功！！！"
    }
}
const failure = {
    "code":'1',
    "msg":'用户名或密码错误',
    'result':{
        "data":"用户名或密码错误"
    }
}
module.exports.MockData = (options) => {
    switch (options){
        case '0':
            return Mock.mock(Template)
        case '1':
            return Mock.mock(failure)
    }
}
