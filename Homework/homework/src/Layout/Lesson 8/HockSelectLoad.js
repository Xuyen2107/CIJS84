import { useState, useEffect } from "react";

const listPerson = [
   { key: 1, Ho: "Phạm", Ten: "Thiên An", GioiTinh: 0 },
   { key: 2, Ho: "Trần", Ten: "Ngọc Bảo", GioiTinh: 0 },
   { key: 3, Ho: "Phan", Ten: "Thanh Danh", GioiTinh: 0 },
   { key: 4, Ho: "Nguyễn", Ten: "Đức Thanh Duy", GioiTinh: 0 },
   { key: 5, Ho: "Trần", Ten: "Đình Hưng", GioiTinh: 0 },
   { key: 6, Ho: "Trần", Ten: "Kiên Hưng", GioiTinh: 0 },
   { key: 7, Ho: "Võ", Ten: "Thị Bích Loan", GioiTinh: 1 },
   { key: 8, Ho: "Nguyễn", Ten: "Thị Huỳnh Anh", GioiTinh: 1 },
   { key: 9, Ho: "Lê", Ten: "Thái Toàn", GioiTinh: 0 },
   { key: 10, Ho: "Nguyễn", Ten: "Quốc Minh Trực", GioiTinh: 0 },
   { key: 11, Ho: "Đặng", Ten: "Huyền Trân", GioiTinh: 1 },
   { key: 12, Ho: "Huỳnh", Ten: "Xuân Tín", GioiTinh: 0 },
   { key: 13, Ho: "Nguyễn", Ten: "Tiến Thịnh", GioiTinh: 0 },
   { key: 14, Ho: "Nguyễn", Ten: "Vũ Anh Thư", GioiTinh: 1 },
   { key: 15, Ho: "Đặng", Ten: "Hoàng Phi", GioiTinh: 0 },
];

const gioiTinhDefault = [
   { key: -1, name: "Tất cả" },
   { key: 0, name: "Nam" },
   { key: 1, name: "Nữ" },
];

const dataFilter = {
   filterGioiTinh: null,
   filterSearch: null,
};

const clone = (name) => {
   return JSON.parse(JSON.stringify(name));
};

const useHookSelect = () => {
   const [filter, setFilter] = useState(dataFilter);
   const [dataGioiTinh, setDataGioiTinh] = useState(gioiTinhDefault);
   const [listGender, setListGender] = useState([]);
   const [list, setList] = useState([]);
   const [listAll, setListAll] = useState([]);

   useEffect(() => {
      setList(listPerson);
      setListAll(listPerson);
   }, []);

   useEffect(() => {
      if (filter.filterGioiTinh) {
         if (filter.filterGioiTinh.key == -1) {
            setList(listAll);
         } else {
            const listClone = JSON.parse(JSON.stringify(listAll));
            const update = listClone.filter((x) => x.GioiTinh == filter.filterGioiTinh.key);
            setList(update);
            setListGender(update);
         }
      }
      if (filter.filterSearch?.length > 0) {
         if (filter.filterGioiTinh.key == -1) {
            const listClone = clone(listAll);
            const searchValue = filter.filterSearch.trim().toUpperCase();
            const result = listClone.filter((item) =>
               Remove_Viet(item.Ho + " " + item?.Ten).includes(Remove_Viet(searchValue))
            );
            setList(result);
         } else {
            const listClone = clone(listGender);
            const searchValue = filter.filterSearch.trim().toLowerCase();
            const result = listClone.filter((item) =>
               Remove_Viet(item.Ho + " " + item?.Ten).includes(Remove_Viet(searchValue))
            );
            setList(result);
         }
      }
   }, [filter]);

   useEffect(() => {
      if (dataGioiTinh.length > 0) {
         const filterClone = clone(filter);
         filterClone.filterGioiTinh = dataGioiTinh[0];
         setFilter(filterClone);
      }
   }, [dataGioiTinh]);

   const Remove_Viet = (inputStr) => {
      let str = inputStr.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(
         /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
         " "
      );
      str = str.replace(/ +/g, " ");
      str = str.trim();
      return str;
   };

   const onChange = (e, name) => {
      if (name == "GioiTinh") {
         const dataGioiTinhCone = clone(dataGioiTinh);
         const result = dataGioiTinhCone?.find((x) => x.key == e.target.value);
         let filterClone = clone(filter);
         filterClone["filterGioiTinh"] = result;
         setFilter(filterClone);
      } else if (name == "search") {
         const filterClone = clone(filter);
         const result = e.target.value;
         filterClone["filterSearch"] = result;
         setFilter(filterClone);
      }
   };
   return { filter, dataGioiTinh, onChange, list, listAll };
};

export default useHookSelect;
