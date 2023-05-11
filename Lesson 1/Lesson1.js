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

const validateRePassword = () => {
   if (rePasswordInput.value != passwordInput.value) {
      setError(rePasswordInput, "Mật khẩu nhập lại chưa đúng");
   } else {
      setSuccess(rePasswordInput);
   }
};

usernameInput.addEventListener("input", () => {
   if (usernameInput.value === "") {
      setError(usernameInput, "Tên đăng nhập không được để trống");
   } else if (!validateText(usernameInput.value) || usernameInput.value.length < 8) {
      setError(usernameInput, "Tên đăng nhập chỉ chứa chữ cái và từ 8 kí tự trở lên");
   } else {
      setSuccess(usernameInput);
   }
});

emailInput.addEventListener("input", () => {
   if (emailInput.value === "") {
      setError(emailInput, "Email không được để trống");
   } else if (!validateEmail(emailInput.value)) {
      setError(emailInput, "Email không hợp lệ");
   } else {
      setSuccess(emailInput);
   }
});

phoneInput.addEventListener("input", () => {
   if (phoneInput.value === "") {
      setError(phoneInput, "Số điện thoại không được để trống");
   } else if (!validatePhoneNumberVN(phoneInput.value)) {
      setError(phoneInput, "Số điện thoại chưa đúng");
   } else {
      setSuccess(phoneInput);
   }
});

passwordInput.addEventListener("input", () => {
   if (passwordInput.value === "") {
      setError(passwordInput, "Mật khẩu không được để trống");
   } else if (!validateNumber(passwordInput.value) || passwordInput.value.length < 8) {
      setError(passwordInput, "Mật khẩu chỉ chứa số và từ 8 kí tự trở lên");
   } else {
      setSuccess(passwordInput);
   }
   validateRePassword();
});

rePasswordInput.addEventListener("input", () => {
   validateRePassword();
});

passwordInput.addEventListener("change", () => {
   validateRePassword();
});

form.addEventListener("submit", (event) => {
   event.preventDefault();
   const error = document.querySelector(".form__input--error");

   if (usernameInput.value === "" || emailInput.value === "" || phoneInput.value === "" || passwordInput.value === "" || rePasswordInput.value === "") {
      alert("Vui lòng điền tất cả thông tin bên dưới");
   } else if (error) {
      alert("Vui lòng nhập thông tin đúng theo gợi ý");
   } else {
      localStorage.setItem("Username", usernameInput.value);
      localStorage.setItem("Password", passwordInput.value);
      localStorage.setItem("Email", emailInput.value);
      localStorage.setItem("Phone", phoneInput.value);

      alert("Bạn đã đăng kí thành công");
      location.reload();
   }
});
