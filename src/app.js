const vocals = "aeiou";
module.exports = {
    isVowel: function(charToTest) {
        return vocals.indexOf(charToTest) >= 0;
    },
};