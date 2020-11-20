// 数据加密

/**
 * 
 * 将传入的字符串加密,返回一个md5值
 * @param {String} pwd 
 * @returns {String} md5
 */
exports.md5 = function(pwd){
    var crypto =  require("crypto");
    var str = crypto.createHash("md5").update(pwd).digest("base64");//第一次加密
    var arr = str.split("");
    for(var i=0;i<arr.length;i++){
        if(1%2==0){
            arr.push(arr[i]);
        }
    }
    str = arr.join(""); //重组字符串
    // 截取其中一部分
    str = str.substring(4);
    str = crypto.createHash("md5").update(str).digest("base64");
    return str;
    
}