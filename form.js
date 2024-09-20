function validateForm() {
    // รับค่าของข้อมูลจากฟอร์ม
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var isValid = true;
    var errorMessage = "";

    // ตรวจสอบความถูกต้องของข้อมูล
    if (username.trim() === "") {
        errorMessage += "กรุณากรอกชื่อผู้ใช้!<br>";
        isValid = false;
    }

    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        errorMessage += "กรุณากรอกอีเมลที่ถูกต้อง!<br>";
        isValid = false;
    }

    if (password.length < 8) {
        errorMessage += "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร!<br>";
        isValid = false;
    }

    if (password !== confirmPassword) {
        errorMessage += "รหัสผ่านไม่ตรงกัน!<br>";
        isValid = false;
    }

    if (phoneNumber.length !== 10) {
        errorMessage += "หมายเลขโทรศัพท์ต้องมีความยาว 10 หลัก!<br>";
        isValid = false;
    }

    // แสดงข้อความต้อนรับหรือข้อผิดพลาด
    if (isValid) {
        showMessage("ยินดีต้อนรับสู่การเป็นสมาชิกของเรา!");
        alert("ยินดีต้อนรับสู่การเป็นสมาชิกของเรา!");
    } else {
        showMessage(errorMessage);
    }

    return isValid;
}

// ฟังก์ชันในการแสดงข้อความ
function showMessage(message, color) {
    var messageElement = document.getElementById("message");
    messageElement.style.color = color;
    messageElement.innerHTML = message;
}

// เพิ่ม Event Listener เพื่อเปลี่ยนหน้าไปยังหน้า currency.html เมื่อคลิกปุ่ม "Exchange"
document.addEventListener("DOMContentLoaded", function() {
    const exchangeButton = document.querySelector(".button-exchange");
    exchangeButton.addEventListener("click", function() {
        window.location.href = "currency.html";
    });
});
