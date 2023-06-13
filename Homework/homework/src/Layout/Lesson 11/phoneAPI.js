import axios from "axios";
const PhoneApi = {
   // GetPhone: async () => {
   //    const url = "https://jsonplaceholder.typicode.com/comments";
   //    let resp = await fetch(url);
   //    let data = await resp.json();
   //    return data;
   // },

   GetComment: async () => {
      const url = "https://jsonplaceholder.typicode.com/comments";
      let data = await axios.get(url);
      return data;
   },
};

export default PhoneApi;
