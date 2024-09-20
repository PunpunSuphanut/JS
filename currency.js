// กำหนดตัวแปร API
let api = `https://v6.exchangerate-api.com/v6/5ac144477f5802ee2fa8b2dd/latest/USD`;

// เลือก dropdown สำหรับสกุลเงินต้นทางและปลายทาง
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// สร้าง dropdown สำหรับการเลือกสกุลเงิน
currencies.forEach((currency)=>{
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

currencies.forEach((currency)=>{
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

// กำหนดค่าเริ่มต้นให้กับ dropdown
fromDropDown.value = "USD";
toDropDown.value = "THB";

// ฟังก์ชันแปลงสกุลเงิน
let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if(amount.length != 0 ){
        fetch(api)
            .then((resp) => resp.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    } else {
        alert("กรุณากรอกจำนวนเงิน");
    }
};

// เพิ่ม Event Listener เมื่อคลิกปุ่ม "Convert"
document
    .querySelector("#convert-button")
    .addEventListener("click", convertCurrency);

// เรียกใช้ฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จสมบูรณ์
window.addEventListener("load", convertCurrency);

// เพิ่ม Event Listener เมื่อคลิกปุ่ม "Back"
document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("back-button");

    backButton.addEventListener("click", function() {
        window.location.href = "form.html";
    });
});