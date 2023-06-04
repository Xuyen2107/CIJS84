import { useState } from "react";
import validate from "../Lesson 3/ValidateV3";

const UserHookRegister = () => {
   const UserDefault = {
      Id: "",
      Ho: "",
      Ten: "",
      GioiTinh: -1,
   };

   const errorForm = {
      Ho: "",
      Ten: "",
      GioiTinh: "",
   };

   const listDefault = [
      { Id: "1", Ho: "Phạm", Ten: "Xuyên A", GioiTinh: "0" },
      { Id: "2", Ho: "Phạm", Ten: "Xuyên B", GioiTinh: "1" },
      { Id: "3", Ho: "Phạm", Ten: "Xuyên C", GioiTinh: "0" },
      { Id: "4", Ho: "Phạm", Ten: "Xuyên D", GioiTinh: "1" },
      { Id: "5", Ho: "Phạm", Ten: "Xuyên E", GioiTinh: "0" },
   ];

   const [user, setUser] = useState(UserDefault);
   const [error, setError] = useState(errorForm);
   const [listUser, setListUser] = useState(listDefault);
   const [result, setResult] = useState(true);
   const [number, setNumber] = useState(0);

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

      if (userClone.GioiTinh == -1) {
         errorClone.GioiTinh = "Vui lòng chọn Gender";
      } else {
         errorClone.GioiTinh = "";
      }

      setUser(userClone);
      setError(errorClone);
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
      const errorEmpty = Object.values(error).every((values) => values === "");
      const userClone = JSON.parse(JSON.stringify(user));
      const listUserClone = JSON.parse(JSON.stringify(listUser));

      if (userClone.GioiTinh == -1 || !errorEmpty) {
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

   const actReset = () => {
      setUser(UserDefault);
      setResult(true);
   };
   return {
      user,
      error,
      listUser,
      result,
      number,
      handleInputChange,
      actThem,
      actXoa,
      actSua,
      actCapNhat,
      actReset,
   };
};

export default UserHookRegister;
