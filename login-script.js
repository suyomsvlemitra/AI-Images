// ==========================================
// SUYOMS VLE MITRA - MASTER USERS DATA
// ==========================================
const users = [
    { username: "7757923192", password: "Yogesh@online", img: "01.png", name: "1 YOGESH ONLINE & MULTI SEVICES" },
    { username: "7744925777", password: "Omkar@online", img: "02.png", name: "2 OMKAR ONLINE SEVA KENDRA" },
    { username: "9403722546", password: "Kritika@online", img: "03.png", name: "3 KRITIKA ENTERPRISES" },
    { username: "7758884490", password: "Mahajan@online", img: "04.png", name: "4 MAHAJAN COMPUTER & XEROX" },
    { username: "9860474065", password: "Devendra@online", img: "05.png", name: "5 DEVENDRA PHOTO & ONLINE SERVICES" },
    { username: "8237936565", password: "Balaji@online", img: "06.png", name: "6 SHREE BALAJI MULTISERVICES" },
    { username: "9545352426", password: "Samarth@online", img: "07.png", name: "7 SHREE SAMARTH KRUPA CYBER CAFE" },
    { username: "7588028064", password: "Srushti@online", img: "08.png", name: "8 SRUSHTI COMPTERS" },
    { username: "9960783926", password: "Veera@online", img: "09.png", name: "9 VEERA ONLINE" },
    { username: "9922792023", password: "Manoj@online", img: "10.png", name: "10 MANOJ INTERNET CAFE" },
    { username: "9922757220", password: "Shravni@online", img: "11.png", name: "11 SHRAVANI DIGITAL SEVA" },
    { username: "9881265819", password: "Dikshant@online", img: "12.png", name: "12 DIKSHANT AAPALE SARAKAR SEVA KENDRA" },
    { username: "9423496538", password: "Sanjay@online", img: "13.png", name: "13 SANJAY COMPUTERS" },
    { username: "9665983190", password: "Dhruv@online", img: "14.png", name: "14 DRUVA COMPUTERS & XEROX" },
    { username: "9325800516", password: "Sai@online", img: "15.png", name: "15 SAI KRUPA ONLINE CENTER" },
    { username: "8554850346", password: "Aakash@online", img: "16.png", name: "16 NEW AAKASH ONLINE SERVICES" },
    { username: "9975613141", password: "Lohar@online", img: "17.png", name: "17 LOHAR ONLINE SEVA KENDRA" },
    { username: "9403355436", password: "Samarth@online", img: "18.png", name: "18 SHREE SAMARTH AAPALE SARAKAR SEVA KENDRA" },
    { username: "9923317146", password: "Ganesh@online", img: "19.png", name: "19 SHREE GANESH GRAHAK SEVA KENDRA" },
    { username: "9890404924", password: "Shripad@online", img: "20.png", name: "20 SHREE SHRIPAD MULTI SERVICES" },
    { username: "9096373206", password: "Navjeevan@online", img: "21.png", name: "21 NAVJEEVAN MAHA E SEVA KENDRA" },
    { username: "9970261030", password: "Sangharsh@online", img: "22.png", name: "22 SANGHARSH MAHA E SEVA KENDRA" },
    { username: "8600580589", password: "Dnyanoba@online", img: "23.png", name: "23 DNYANOBA ONLINE & XEROX CENTER" },
    { username: "7620128091", password: "Rahul@online", img: "24.png", name: "24 RAHUL DIGITAL SEVA KENDRA" },
    { username: "7972006850", password: "Bhole@online", img: "25.png", name: "25 JAY BHOLE ONLINE SERVICES" },
    { username: "9371207307", password: "Dwarkamai@online", img: "26.png", name: "26 DWARKAMAI MULTI SERVICES" },
    { username: "7410780509", password: "Om@online", img: "27.png", name: "27 OM ONLINE SERVICES" },
    { username: "7620173921", password: "Pravin@online", img: "28.png", name: "28 SWAMI E SERVICES" },
    { username: "7066262396", password: "Manesh@online", img: "29.png", name: "29 CHAITANYA MULTISERVICES" },
    { username: "8698087552", password: "Pranav@online", img: "30.png", name: "30 PRANAV MULTISERVICES" },
    { username: "9359617304", password: "Dk@online", img: "31.png", name: "31 DK COMPUTERS" },
    { username: "7350815195", password: "Deva@online", img: "32.png", name: "32 DEVA SETU KENDRA" },
    { username: "9326761259", password: "Rahul@online", img: "33.png", name: "33 PRANALI ENTERPRISES" },
    { username: "9404191387", password: "Shyam@online", img: "34.png", name: "34 SHYAM COMPUTERS" },
    { username: "8600818681", password: "Swarajya@online", img: "35.png", name: "35 SWARAJYA ENTERPRISES" },
    { username: "9881791111", password: "Mudra@online", img: "36.png", name: "36 MUDRA GRAHAK SEVA KENDRA" },
    { username: "9421279198", password: "Nilesh@online", img: "37.png", name: "37 AASHA E SEVA KENDRA" },
    { username: "9403411252", password: "Dinkar@online", img: "38.png", name: "38 SHAHID GRAHAK SEVA KENDRA" },
    { username: "8669075387", password: "Rajmudra@online", img: "39.png", name: "39 RAJMUDRA ONLINE SERVICES" },
    { username: "8806368463", password: "Sachin@online", img: "40.png", name: "40 YADNYA COMPUTER & ONLINE" },
    { username: "8055353880", password: "Amit@online", img: "41.png", name: "41 CARE COMPUTER" },
    { username: "9665819128", password: "Mauli@online", img: "42.png", name: "42 MAULI MULTI SERVICES" },
    { username: "9503739057", password: "Ganesh@online", img: "43.png", name: "43 GANESH ONLINE" }, // उदाहरणार्थ जोडले
    { username: "suyoms889324", password: "Yosusai@2024", img: "889324.png", name: "SUYOMS VLE MITRA" }
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
