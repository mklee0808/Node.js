const { odd, even } = require('./var');//require 함수 안에 불러올 모듈의 경로를 적어줍니다.
function checkOddorEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}
module.exports = checkOddorEven;