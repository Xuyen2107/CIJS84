import React from "react";
import HookLesson11 from "./HookLesson11";
import "./Lesson11.css";

const Lesson11 = () => {
   const { list, loading } = HookLesson11();

   return loading ? (
      <h1>Dang loading</h1>
   ) : (
      <div>
         <table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Body</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th colSpan={2} style={{ whiteSpace: "nowrap" }}>
                     Thao Tác
                  </th>
               </tr>
            </thead>
            <tbody>
               {list?.map((item, idx) => (
                  <tr key={item.id}>
                     <td>{item?.id}</td>
                     <td>{item?.body}</td>
                     <td>{item.email}</td>
                     <td>{item?.name}</td>
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
   );
};

export default Lesson11;
