import { useState } from "react";
import validate from "../Lesson 3/ValidateV3";

const UserHookRegister = () => {
   const UserDefault = {
      Id: "",
      Ho: "",
      Ten: "",
      GioiTinh: "",
   };

   const errorForm = {
      Ho: "",
      Ten: "",
      GioiTinh: "",
   };

   const listDefault = [
      { Id: "1", Ho: "Phạm", Ten: "Xuyên A", GioiTinh: "Nam" },
      { Id: "2", Ho: "Phạm", Ten: "Xuyên B", GioiTinh: "Nam" },
      { Id: "3", Ho: "Phạm", Ten: "Xuyên C", GioiTinh: "Nam" },
      { Id: "4", Ho: "Phạm", Ten: "Xuyên D", GioiTinh: "Nam" },
      { Id: "5", Ho: "Phạm", Ten: "Xuyên E", GioiTinh: "Nam" },
   ];

   const [user, setUser] = useState(UserDefault);
   const [error, setError] = useState(errorForm);
   const [listUser, setListUser] = useState(listDefault);
   const [result, setResult] = useState(true);

   const { validateText } = validate();

   const handleInputChange = (e, name) => {
      const userClone = JSON.parse(JSON.stringify(user));
      const errorClone = JSON.parse(JSON.stringify(error));

      userClone[name] = e.target.value;

      if (userClone.Ho === "" || !validateText(userClone.Ho)) {
         errorClone.Ho = "Vui lòng nhập đúng họ của bạn";
      } else {
         errorClone.Ho = "";
      }

      if (userClone.Ten === "" || !validateText(userClone.Ten)) {
         errorClone.Ten = "Vui lòng nhập đúng tên của bạn";
      } else {
         errorClone.Ten = "";
      }

      if (userClone.GioiTinh === "") {
         errorClone.GioiTinh = "Vui lòng chọn Gender";
      } else {
         errorClone.GioiTinh = "";
      }

      setUser(userClone);
      setError(errorClone);
      console.log(222, userClone);
   };

   const genId = () => {
      const listUserClone = JSON.parse(JSON.stringify(listUser));
      const Id = Math.floor(Math.random() * 100);
      const check = listUserClone.find((x) => x.Id === Id);
      if (check) {
         genId();
      }
      return Id;
   };

   const actThem = () => {
      const userEmpty = Object.values(user).every((values) => values === "");
      const errorEmpty = Object.values(error).every((values) => values === "");
      const listUserClone = JSON.parse(JSON.stringify(listUser));

      if (userEmpty || !errorEmpty) {
         alert("Vui lòng điền đúng tất cả thông tin bên dưới");
      } else {
         user.Id = genId();
         listUserClone.push(user);
         setListUser(listUserClone);
         setUser(UserDefault);
      }
   };

   const actXoa = (id) => {
      const listUserClone = JSON.parse(JSON.stringify(listUser));
      const indexUser = listUserClone.findIndex((item) => item.Id === id);

      if (indexUser !== -1) {
         alert(`Bạn muốn xóa user ${listUserClone[indexUser].Ho} ${listUserClone[indexUser].Ten}`);
         listUserClone.splice(indexUser, 1);
      }
      setListUser(listUserClone);
   };

   const actSua = (id) => {
      const listUserClone = JSON.parse(JSON.stringify(listUser));
      const userSua = listUserClone.find((x) => x.Id === id);
      setUser(userSua);
      setResult(false);
   };

   const actCapNhat = () => {
      const userClone = JSON.parse(JSON.stringify(user));
      const listUserClone = JSON.parse(JSON.stringify(listUser));
      const userCapNhat = listUserClone.findIndex((item) => item.Id === userClone.Id);

      if (userCapNhat !== -1) {
         listUserClone[userCapNhat] = { ...listUserClone[userCapNhat], ...userClone };
      }

      setListUser(listUserClone);
      setUser(UserDefault);
      setResult(true);
   };
   return { user, error, listUser, result, handleInputChange, actThem, actXoa, actSua, actCapNhat };
};

export default UserHookRegister;
