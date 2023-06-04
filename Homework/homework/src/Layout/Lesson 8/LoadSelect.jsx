import React from "react";
import Select from "../../Components/Select.jsx";
import CustomInput from "../../Components/CustomInput.jsx";

import useHookSelect from "./HockSelectLoad.js";
import "./LoadSelect.css";

const Lesson8 = () => {
   const { dataGioiTinh, list, filter, onChange } = useHookSelect();

   return (
      <div>
         <div className="select">
            <Select
               title="Chọn"
               dataOption={dataGioiTinh}
               onChange={(e) => {
                  onChange(e, "GioiTinh");
               }}
            />
            <CustomInput
               title="Tìm kiếm"
               value={filter.filterSearch}
               onChange={(e) => {
                  onChange(e, "search");
               }}
            />
         </div>
         <div>
            <table>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Họ Tên</th>
                     <th>Giới tính</th>
                     <th colSpan={2}>Thao tác</th>
                  </tr>
               </thead>
               <tbody>
                  {list.map((item, idx) => (
                     <tr>
                        <td>{idx + 1}</td>
                        <td>
                           {item.Ho} {item.Ten}
                        </td>
                        {item.GioiTinh == 0 ? (
                           <td>
                              <span className="male">Nam</span>
                           </td>
                        ) : (
                           <td>
                              <span className="female">Nữ</span>
                           </td>
                        )}
                        <td>
                           <button className="update">
                              <i class="fa-solid fa-eye"></i>
                           </button>
                        </td>
                        <td>
                           <button className="delete">
                              <i class="fa-regular fa-trash-can"></i>
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Lesson8;
