import CustomInput from "../../Components/CustomInput.jsx";
import RadioInput from "../../Components/RadioInput.jsx";
import Button from "../../Components/Button.jsx";
import "./Register.css";
import UserHookRegister from "./Hook.js";

const dataRadio = [
   { key: 1, label: "Nam" },
   { key: 2, label: "Nữ" },
];

const Lesson7 = () => {
   const { user, error, listUser, result, handleInputChange, actThem, actXoa, actSua, actCapNhat } =
      UserHookRegister();

   return (
      <div className="form__register">
         <form className="form">
            <CustomInput
               title="Họ"
               className="form__input--first-name"
               type="text"
               name="Ho"
               value={user.Ho}
               onChange={(e) => {
                  handleInputChange(e, "Ho");
               }}
               placeholder="Nhập Họ"
               error={error.Ho}
            />

            <CustomInput
               title="Tên"
               className="form__input--middle-name"
               type="text"
               name="Ten"
               value={user.Ten}
               onChange={(e) => {
                  handleInputChange(e, "Ten");
               }}
               placeholder="Nhập tên"
               error={error.Ten}
            />

            <RadioInput
               title="Giới tính"
               name="Sex"
               checked={user.GioiTinh}
               onChange={(e) => {
                  handleInputChange(e, "GioiTinh");
               }}
               dataRadio={dataRadio}
               error={error.GioiTinh}
            />
            {result ? (
               <Button type="button" nameBtn="Thêm" onClick={actThem} />
            ) : (
               <Button type="button" nameBtn="Cập nhật" onClick={actCapNhat} />
            )}
         </form>
         <table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Họ và tên</th>
                  <th>Giới tính</th>
                  <th colSpan={2}>Thao tác</th>
               </tr>
            </thead>
            <tbody>
               {listUser.map((item, idx) => (
                  <tr>
                     <td>{idx + 1}</td>
                     <td>
                        {item.Ho} {item.Ten}
                     </td>
                     <td>{item.GioiTinh}</td>
                     <td key={idx}>
                        <button
                           className="update"
                           type="button"
                           onClick={() => {
                              actSua(item.Id);
                           }}
                        >
                           <i class="fa-solid fa-eye"></i>
                        </button>
                     </td>
                     <td>
                        <button
                           className="delete"
                           type="button"
                           onClick={() => {
                              actXoa(item.Id);
                           }}
                        >
                           <i class="fa-regular fa-trash-can"></i>
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Lesson7;
