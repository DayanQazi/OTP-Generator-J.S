
let generateotp = () => {
    
    const otpLength = 6;

    const otp = Math.floor(Math.random() * Math.pow(10, otpLength));

    document.getElementById("otpdisplay").innerText = otp;
};

document.getElementById("generatebtn").addEventListener("click", generateotp);
window.addEventListener("load", generateotp);
