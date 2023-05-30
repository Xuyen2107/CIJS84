import { useState } from "react";

const user = {
   Name: "",
   Occupation: "",
};

const user1 = {
   Name: "",
   Occupation: "",
};

const CountHooks = () => {
   const [number, setNumber] = useState(0);
   const [userHooks, setUserHooks] = useState(user);
   const [user2, setUser2] = useState(user1);

   const onClickUp = () => {
      setNumber(number + 1);
   };

   const onClickDown = () => {
      setNumber(number - 1);
   };

   const onClickReset = () => {
      setNumber(0);
   };

   const onChange = (e, name) => {
      const userClone = JSON.parse(JSON.stringify(userHooks));

      userClone[name] = e.target.value;
      console.log(userClone);

      setUserHooks(userClone);
   };

   const submit = () => {
      alert("6576");
      setUser2(userHooks);
   };
   console.log(user2);

   return { number, onClickDown, onClickUp, onClickReset, userHooks, onChange, submit, user2 };
};
export default CountHooks;
