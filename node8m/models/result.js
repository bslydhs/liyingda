function Result(result) {
    var myResult = new Object();
    myResult.err = result.err;//错误堆栈
    myResult.error = result.error;//错误说明
    myResult.info = result.info;
    myResult.isSuccess = result.isSuccess;
    return myResult;
};
module.exports = Result;