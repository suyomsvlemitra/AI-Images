// ==========================================
// SUYOMS VLE MITRA - MASTER USERS DATA
// ==========================================
const users = [
    { username: "7757923192", passwordHash: "6c2ba5801cdcdfc6fa3e877073ff109d", img: "01.png", name: "1 YOGESH ONLINE & MULTI SEVICES" },
    { username: "7744925777", passwordHash: "468b8e0e0ca797825595904663efbf6b", img: "02.png", name: "2 OMKAR ONLINE SEVA KENDRA" },
    { username: "9403722546", passwordHash: "7b0ba88a0b0d39e80e9dfb51c8dbd98d", img: "03.png", name: "3 KRITIKA ENTERPRISES" },
    { username: "7758884490", passwordHash: "63fa5ccff94c03b1fe836ecba974b7b2", img: "04.png", name: "4 MAHAJAN COMPUTER & XEROX" },
    { username: "9860474065", passwordHash: "e6f98efeb902c3ea0e599b794a32c7ea", img: "05.png", name: "5 DEVENDRA PHOTO & ONLINE SERVICES" },
    { username: "8237936565", passwordHash: "12822ebf46c650117d31481bdf96b79f", img: "06.png", name: "6 SHREE BALAJI MULTISERVICES" },
    { username: "9545352426", passwordHash: "be9359e99a4c0cff03975031b9d4e568", img: "07.png", name: "7 SHREE SAMARTH KRUPA CYBER CAFE" },
    { username: "7588028064", passwordHash: "b8ee0b77b637d7a462bb1e18cc8ee1d8", img: "08.png", name: "8 SRUSHTI COMPTERS" },
    { username: "9960783926", passwordHash: "cf1d5a7b6cf215707bb0f592cf126c80", img: "09.png", name: "9 VEERA ONLINE" },
    { username: "9922792023", passwordHash: "f14da2f8f74780ff36bbf4038cc987da", img: "10.png", name: "10 MANOJ INTERNET CAFE" },
    { username: "9922757220", passwordHash: "467597fa620021cbb479269ceca9d4c7", img: "11.png", name: "11 SHRAVANI DIGITAL SEVA" },
    { username: "9881265819", passwordHash: "18636e771e7db6b633918b95fb31c77f", img: "12.png", name: "12 DIKSHANT AAPALE SARAKAR SEVA KENDRA" },
    { username: "9423496538", passwordHash: "9218d6bc70b6d214a1a5b822bc687053", img: "13.png", name: "13 SANJAY COMPUTERS" },
    { username: "9665983190", passwordHash: "b076ee2b0f4fa9b06f5da898a3b567b4", img: "14.png", name: "14 DRUVA COMPUTERS & XEROX" },
    { username: "9325800516", passwordHash: "d1bb0224df086161173646f8820697a2", img: "15.png", name: "15 SAI KRUPA ONLINE CENTER" },
    { username: "8554850346", passwordHash: "e10fb8b78917e7fc00632594a1122be5", img: "16.png", name: "16 NEW AAKASH ONLINE SERVICES" },
    { username: "9975613141", passwordHash: "e8cae884be89ea4b5952d7e8ea797b5e", img: "17.png", name: "17 LOHAR ONLINE SEVA KENDRA" },
    { username: "9403355436", passwordHash: "be9359e99a4c0cff03975031b9d4e568", img: "18.png", name: "18 SHREE SAMARTH AAPALE SARAKAR SEVA KENDRA" },
    { username: "9923317146", passwordHash: "2df199745ebce33b0068ce632ef3c8d1", img: "19.png", name: "19 SHREE GANESH GRAHAK SEVA KENDRA" },
    { username: "9890404924", passwordHash: "56d812224097f5efbf0444fc274889c4", img: "20.png", name: "20 SHREE SHRIPAD MULTI SERVICES" },
    { username: "9096373206", passwordHash: "2cb3b9a5840b2d6a78225fc9e7d9b9a6", img: "21.png", name: "21 NAVJEEVAN MAHA E SEVA KENDRA" },
    { username: "9970261030", passwordHash: "bbf6a6f112e4f04c60f2bbcc3eb6999a", img: "22.png", name: "22 SANGHARSH MAHA E SEVA KENDRA" },
    { username: "8600580589", passwordHash: "7b4dfc0cdb6fb353683f2ffc57dbec59", img: "23.png", name: "23 DNYANOBA ONLINE & XEROX CENTER" },
    { username: "7620128091", passwordHash: "f6686161479daff3e0b2db71597a760b", img: "24.png", name: "24 RAHUL DIGITAL SEVA KENDRA" },
    { username: "7972006850", passwordHash: "599cb5f3b77dafa30f40d3f6687f84a4", img: "25.png", name: "25 JAY BHOLE ONLINE SERVICES" },
    { username: "9371207307", passwordHash: "a6b7d5bf61e389d31fbe6d31cc065410", img: "26.png", name: "26 DWARKAMAI MULTI SERVICES" },
    { username: "7410780509", passwordHash: "54a32338ff7227d825cbe4985287f3ee", img: "27.png", name: "27 OM ONLINE SERVICES" },
    { username: "7620173921", passwordHash: "8cf1f84b6f00db1683be8353a2eb6d14", img: "28.png", name: "28 SWAMI E SERVICES" },
    { username: "7066262396", passwordHash: "05e263d90786cf897ef44b7df9468e21", img: "29.png", name: "29 CHAITANYA MULTISERVICES" },
    { username: "8698087552", passwordHash: "e6f4770172e93540203a7469a9b73d6e", img: "30.png", name: "30 PRANAV MULTISERVICES" },
    { username: "9359617304", passwordHash: "29e64a1329bf741160655cb3b0ea9039", img: "31.png", name: "31 DK COMPUTERS" },
    { username: "7350815195", passwordHash: "da913e2f495574f177695326260a9254", img: "32.png", name: "32 DEVA SETU KENDRA" },
    { username: "9326761259", passwordHash: "f6686161479daff3e0b2db71597a760b", img: "33.png", name: "33 PRANALI ENTERPRISES" },
    { username: "9404191387", passwordHash: "20760f38fbf64dbbf9a64bfbc7a0300b", img: "34.png", name: "34 SHYAM COMPUTERS" },
    { username: "8600818681", passwordHash: "db1d06ff3ff8736fb1f4df4f54d4ff79", img: "35.png", name: "35 SWARAJYA ENTERPRISES" },
    { username: "9881791111", passwordHash: "6c650ee4828131333333333333333333", img: "36.png", name: "36 MUDRA GRAHAK SEVA KENDRA" }, // तात्पुरता हॅश
    { username: "9421279198", passwordHash: "1e51b14a938c82a5a54db3ea076ef637", img: "37.png", name: "37 AASHA E SEVA KENDRA" },
    { username: "9403411252", passwordHash: "46f8820697a29218d6bc70b6d214a1a5", img: "38.png", name: "38 SHAHID GRAHAK SEVA KENDRA" },
    { username: "8669075387", passwordHash: "e43bde8162f1d4f4e151c728e932b17a", img: "39.png", name: "39 RAJMUDRA ONLINE SERVICES" },
    { username: "8806368463", passwordHash: "e44145b2b2a6ad9a8ef37bfbf45d2e70", img: "40.png", name: "40 YADNYA COMPUTER & ONLINE" },
    { username: "8055353880", passwordHash: "cf1d5a7b6cf215707bb0f592cf126c80", img: "41.png", name: "41 CARE COMPUTER" },
    { username: "9665819128", passwordHash: "116e02421f57b686d17983693fb4526d", img: "42.png", name: "42 MAULI MULTI SERVICES" },
    { username: "9503739057", passwordHash: "2df199745ebce33b0068ce632ef3c8d1", img: "43.png", name: "43 GANESH ONLINE" },
    { username: "suyoms889324", passwordHash: "e6fbbec2ba71bd2bf03d52030f146e45", img: "889324.png", name: "SUYOMS VLE MITRA" }
];

// 🔐 LOGIN PROCESS FUNCTION
function checkLogin() {
    var enteredID = document.getElementById("username").value.trim();
    var enteredPass = document.getElementById("password").value.trim();

    // CryptoJS वापरून पासवर्ड हॅश करणे
    var encryptedEnteredPass = CryptoJS.MD5(enteredPass).toString();

    var userFound = users.find(function(user) {
        return user.username === enteredID && user.passwordHash === encryptedEnteredPass;
    });

    if (userFound) {
        localStorage.setItem("isLoggedIn", "true");
        
        var fullImgUrl = "https://cdn.jsdelivr.net/gh/suyomsvlemitra/AI-Images@main/" + userFound.img;
        localStorage.setItem("userPosterUrl", fullImgUrl);
        localStorage.setItem("userPosterName", userFound.name);

        if(typeof updateHeaderMenu === "function") updateHeaderMenu();
        alert("Welcome " + userFound.name);
        window.location.href = "https://www.suyoms.com/";
    } else {
        alert("Wrong ID/Password!");
        window.location.href = "https://www.suyoms.com/p/subscribe-plan.html";
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn"); 
    localStorage.removeItem("userPosterUrl");
    localStorage.removeItem("userPosterName");
    alert("You have logged out! Thank you.");
    window.location.href = "https://www.suyoms.com/"; 
}