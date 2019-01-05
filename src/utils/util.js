import RSA from './rsa.js';
function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
function objectToUrlParams(obj) {
    var str = "";
    for (var key in obj) {
        str += "&" + key + "=" + obj[key];
    }
    return str.substr(1);
}
function makeSign(bizContent, timestamp, version) {
  var that = this
  // 私钥
  var privateKey_pkcs1 = '-----BEGIN PRIVATE KEY-----MIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDWvKkr04/nH6ubCq/5eMcf0+TXZ2SmgCg48EgqRz6d35EqL9unfTNMrS/R/cs3fseKRAQ+0BXze9MVB6UgwFnXUgWGAKgUXPEV8f+K4WyiyyDZMjyFMRATm+WL0X0Kj6vBHjBym4C046ebomGNdm8n/9xjiWQ4O6TJaZzxV/N/IB9XtDotQx6U/S29YvGR2GyD/vtVqqLOhrpMTZKrkZCZ/rAXmZ+p+//nmQ/pdvIZcfDw9xJTDAachbvnA0cfmyuoEMsm2Fi6XwyfQs6pIj2qKofUJ5xCXTF7FMKG+rFugjVFHPMZI0rTQA7NLrZCZVO2rTMFWgeS4iyQmSv9svmxAgMBAAECggEAXKN9VAPsM+hszvE4Y6agOPHf6rGXMWFeeNnoOB0OPWuCo7GL0GDp7a1VUQFtVx6hlNus/TAmGCmWMZ9ftJZm68Zdzaag3FAQTchd1xtTE5QQMsNCaq904RDDYaNZj2HV1fVhL0A4sVD5MOJHtZCfeaEfAe32x2+rspyWcWPhDzkQnK5JGhRpuwCA8XLNSdc3P8M5VTOIMhhGek7V8bhgQ/PoNRGJDcd1XYwGfkFmM3HwqwoVEnOUUBT18EeQrGNu6OJ+tymrVj40RAIuJlni/3NlXMBitvkrdXbWEpVscwtyIKGBlflvcHjJYEc2ATryxfo719a+FcYvBiwbCiWUAQKBgQD7vtAPkks6RmvkdDWr+isrKj50L5K+bxOyXVoLLA6CuJNqTVJBCTJeng/EwzDxCed1DzHc7/KNv5Wp43eBqt6bgKpq0A1MVYbysen+NEuhjHokjVjR8W++XJIa0rZHtR8k2PMO5+qN2RSAV1de5W4SPDvwgXGuo5EpVHqbo9Vu8QKBgQDaXbrHqaZymIXurVmUCRb+aQp8HdGUZ/4apNiGuTIbQEzkoC+3zcHOOZ1k89cnZjEkMpWuGQ3pXDKFjp6kN5Jrn/eK+umz4uEBoby4lW84tjgEmcJPEjB+sbndcsVgguy10l2ufDhx19w9YpOn31fU82lWtNCrndT3fzQcoZu2wQJ/E6rUlmLXfbYCt9ZcWxMwTC8AshMFY9tJrqWcY0MN3yiMW8Guq2YMiVfP449cQ3iCnKKTQq98Q5a0GpGqxHaU7ZEfvziB0XTdFhjQLwvm3Lgc0r44Mi6qjDSvNWlA1FlSFY7dbkywBmTvNRedu8wwzTvncuKp/vrIXHI9IeuqwQKBgF2N9q4AQy2ppwgBAPXphw5slm9inx4EB9wGcDYYNh1yyP7Sml8XKkdea86Koc1hfQBTI8m5Njqao5KQ7erRXEv79yR2J5ZIR7pZPu+eJk6X0xw1fAhAdMJzBnyX5XRZ42xqunQ9CDnOD6/FAhnUGF9GAgWB5j0Am/OFbiAuJPaBAoGBAJHdot76nV7/Bn4780zLUbaa8oc6+I0BobTd6ZPzJUkXX3sxavXA1l4QvXQqnlCtahPUrXNAZxHjYuXDIbDkjwrnj6CI2EJxrocJCSznb4DBwHrJd2lBZ8BVmKqgWQgFszcxGX9NCamJXZlEOGkF4ycB9VXec2fSVZlXabIf7anG -----END PRIVATE KEY-----';
  // 加签
  var sign_rsa = new RSA.RSAKey();
  sign_rsa = RSA.KEYUTIL.getKey(privateKey_pkcs1);
  var hashAlg = 'sha1';
  var hSig = sign_rsa.signString("bizContent=" + bizContent + "&timestamp=" + timestamp + "&version=" + version, hashAlg);
  hSig = RSA.hex2b64(hSig); // hex 转 b64
  return hSig
}
var checkLogin = function(){
  var userId = wx.getStorageSync('userId') || ""
  return userId;
}
var formatLocation = function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}
export default {
    checkLogin:checkLogin,
    formatTime: formatTime,
    objectToUrlParams: objectToUrlParams,
    makeSign: makeSign,
    formatLocation: formatLocation
};