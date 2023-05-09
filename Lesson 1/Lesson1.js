// Cách 1
// import { validatePhoneNumberVN } from "./ValidateV1.js";
// import { validateEmail } from "./ValidateV1.js";
// import { validateText } from "./ValidateV1.js";
// import { validateNumber } from "./ValidateV1.js";

// Cách 2
// import { validatePhoneNumberVN, validateEmail, validateNumber, validateText } from "./ValidateV2.js";

// Cách 3
import validate from "./ValidateV3.js";
const { validateEmail, validateNumber, validatePhoneNumberVN, validateText } = validate();

const form = document.querySelector(".form");
const usernameInput = document.querySelector(".form__input--username");
const emailInput = document.querySelector(".form__input--email");
const phoneInput = document.querySelector(".form__input--phone");
const passwordInput = document.querySelector(".form__input--password");
const rePasswordInput = document.querySelector(".form__input--re-password");

const setError = (input, message) => {
   const formGroup = input.parentElement;
   const errorMassage = formGroup.querySelector(".form__error");
   input.classList.add("form__input--error");
   errorMassage.innerText = message;
};

const setSuccess = (input) => {
   const formGroup = input.parentElement;
   const errorMassage = formGroup.querySelector(".form__error");
   input.classList.remove("form__input--error");
   errorMassage.innerText = "";
};

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const fields = [
      { input: usernameInput, message: "Tên đăng nhập không được để trống" },
      { input: emailInput, message: "Email không được để trống" },
      { input: phoneInput, message: "Số điện thoại không được để trống" },
      { input: passwordInput, message: "Mật khẩu không được để trống" },
      { input: rePasswordInput, message: "Mật khẩu không được để trống" },
   ];

   fields.forEach((field) => {
      if (!field.input.value) {
         setError(field.input, field.message);
      } else {
         setSuccess(field.input);
      }
   });

   if (!form.querySelector(".form__input--error")) {
      localStorage.setItem("username", usernameInput.value);
      localStorage.setItem("password", passwordInput.value);
      localStorage.setItem("email", emailInput.value);
      localStorage.setItem("phone", phoneInput.value);

      alert("Bạn đã đăng kí thành công");
      location.reload();
   }
});

usernameInput.addEventListener("input", function () {
   if (usernameInput.value === "") {
      setSuccess(usernameInput);
   } else if (!validateText(usernameInput.value)) {
      setError(usernameInput, "Tên đăng nhập không chứa số và khoảng trống");
   } else if (usernameInput.value.length < 8) {
      setError(usernameInput, "Tên đăng nhập từ 8 kí tự trở lên");
   } else {
      setSuccess(usernameInput);
   }
});

emailInput.addEventListener("input", function () {
   if (emailInput.value === "") {
      setSuccess(emailInput);
   } else if (!validateEmail(emailInput.value)) {
      setError(emailInput, "Email không hợp lệ");
   } else {
      setSuccess(emailInput);
   }
});

phoneInput.addEventListener("input", function () {
   if (phoneInput.value === "") {
      setSuccess(phoneInput);
   } else if (!validatePhoneNumberVN(phoneInput.value)) {
      setError(phoneInput, "Số điện thoại chưa đúng");
   } else {
      setSuccess(phoneInput);
   }
});

passwordInput.addEventListener("input", function () {
   if (passwordInput.value === "") {
      setSuccess(passwordInput);
   } else if (!validateNumber(passwordInput.value)) {
      setError(passwordInput, "Mật khẩu không bao gốm khảng trống, chữ, kí tự đặt biệt");
   } else if (passwordInput.value.length < 8) {
      setError(passwordInput, "Mật khẩu ít nhất 8 kí tự");
   } else {
      setSuccess(passwordInput);
   }
});

rePasswordInput.addEventListener("input", function () {
   if (rePasswordInput.value === "") {
      setSuccess(rePasswordInput);
   } else if (rePasswordInput.value != passwordInput.value) {
      setError(rePasswordInput, "Mật khẩu nhập lại chưa đúng");
   } else {
      setSuccess(rePasswordInput);
   }
});
