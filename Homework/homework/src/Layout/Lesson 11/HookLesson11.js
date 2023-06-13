import { useState, useEffect } from "react";
import PhoneApi from "./phoneAPI";

const HookLesson11 = () => {
   const [list, setList] = useState();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      // getData();
      getDataAxios();
   }, []);

   // const getData = async () => {
   //    const resp = await PhoneApi.GetComment();
   //    console.log(resp);
   //    setList(resp);
   // };

   const getDataAxios = async () => {
      setLoading(true);
      const resp = await PhoneApi.GetComment();
      if (resp.status == "200") {
         setList(resp.data);
      }

      setTimeout(() => {
         setLoading(false);
      }, 1000);
   };
   return { list, loading };
};

export default HookLesson11;
