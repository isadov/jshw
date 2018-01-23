function checkSpam(str) {

    var lower = str.toLowerCase();
    var spamWord1 = lower.indexOf("sex");
    var spamWord2 = lower.indexOf("spam");

    if(spamWord1 > 0 || spamWord2 > 0) {
        return true;
    }
    return false;

}

console.log(checkSpam('get new Sex videos'));