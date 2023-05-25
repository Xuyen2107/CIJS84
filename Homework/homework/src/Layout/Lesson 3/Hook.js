import { useState } from "react";
import validate from "./ValidateV3.js";

const userRegister = {
   FirstName: "",
   MiddleName: "",
   LastName: "",
   Course: "",
   Gender: "",
   Phone: "",
   Address: "",
   Email: "",
   Password: "",
   RePassword: "",
};

const errorForm = {
   FirstName: "",
   MiddleName: "",
   LastName: "",
   Course: "",
   Gender: "",
   Phone: "",
   Address: "",
   Email: "",
   Password: "",
   RePassword: "",
};

const UserHookRegister = () => {
   const [student, setStudent] = useState(userRegister);
   const [error, setError] = useState(errorForm);
   const { validateEmail, validatePassword, validatePhoneNumberVN, validateText } = validate();

   const handleInputChange = (e, name) => {
      const studentClone = JSON.parse(JSON.stringify(student));
      const errorClone = JSON.parse(JSON.stringify(error));

      if (name === "FirstName") {
         studentClone.FirstName = e.target.value;
      } else if (name === "MiddleName") {
         studentClone.MiddleName = e.target.value;
      } else if (name === "LastName") {
         studentClone.LastName = e.target.value;
      } else if (name === "Course") {
         studentClone.Course = e.target.value;
      } else if (name === "Gender") {
         studentClone.Gender = e.target.value;
      } else if (name === "Phone") {
         studentClone.Phone = e.target.value;
      } else if (name === "Address") {
         studentClone.Address = e.target.value;
      } else if (name === "Email") {
         studentClone.Email = e.target.value;
      } else if (name === "Password") {
         studentClone.Password = e.target.value;
      } else {
         studentClone.RePassword = e.target.value;
      }

      if (studentClone.FirstName === "" || !validateText(studentClone.FirstName)) {
         errorClone.FirstName = "Vui lòng nhập đúng họ của bạn";
      } else {
         errorClone.FirstName = "";
      }

      if (studentClone.MiddleName === "" || !validateText(studentClone.MiddleName)) {
         errorClone.MiddleName = "Vui lòng nhập đúng chữ lót của bạn";
      } else {
         errorClone.MiddleName = "";
      }

      if (studentClone.LastName === "" || !validateText(studentClone.LastName)) {
         errorClone.LastName = "Vui lòng nhập đúng tên của bạn";
      } else {
         errorClone.LastName = "";
      }

      if (studentClone.Course === "") {
         errorClone.Course = "Vui lòng chọn Option";
      } else {
         errorClone.Course = "";
      }

      if (studentClone.Gender === "") {
         errorClone.Gender = "Vui lòng chọn Gender";
      } else {
         errorClone.Gender = "";
      }

      if (studentClone.Phone === "" || !validatePhoneNumberVN(studentClone.Phone)) {
         errorClone.Phone = "Vui lòng nhập đúng số điện thoại";
      } else {
         errorClone.Phone = "";
      }

      if (studentClone.Address === "") {
         errorClone.Address = "Vui lòng nhập địa chỉ của bạn";
      } else {
         errorClone.Address = "";
      }

      if (studentClone.Email === "" || !validateEmail(studentClone.Email)) {
         errorClone.Email = "Vui lòng nhập đúng Email của bạn";
      } else {
         errorClone.Email = "";
      }

      if (studentClone.Password === "" || !validatePassword(studentClone.Password)) {
         errorClone.Password =
            "Nhập mật khẩu của bạn, có 8 kí tự, không khoảng cách, có chữ hoa và kí tự đặt biệt";
      } else {
         errorClone.Password = "";
      }

      if (studentClone.RePassword === "" || studentClone.RePassword !== studentClone.Password) {
         errorClone.RePassword = "Mật khẩu nhập lại chưa đúng";
      } else {
         errorClone.RePassword = "";
      }

      setStudent(studentClone);
      setError(errorClone);
   };

   const submit = () => {
      const studentEmpty = Object.values(student).every((values) => values === "");
      const empty = Object.values(error).every((values) => values === "");

      if (studentEmpty || !empty) {
         alert("Vui lòng điền đúng tất cả thông tin bên dưới");
      } else {
         alert("Bạn đã đăng kí thành công");
         console.log("User", student);
      }
   };

   return { student, setStudent, error, setError, handleInputChange, submit };
};

export default UserHookRegister;
