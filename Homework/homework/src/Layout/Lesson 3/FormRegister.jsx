import CustomInput from "../../Components/CustomInput.jsx";
import RadioInput from "../../Components/RadioInput.jsx";
import TextArea from "../../Components/Textarea.jsx";
import Select from "../../Components/Select.jsx";
import Button from "../../Components/Button.jsx";
import "./Register.css";

const dataRadio = [{ label: "Male" }, { label: "Female" }, { label: "Other" }];
const dataOption = [
   { name: "Option 1" },
   { name: "Option 2" },
   { name: "Option 3" },
   { name: "Option 4" },
];

function Lesson3 () {
   return (
      <div className="form__register">
         <h1>Student Reregistration Form</h1>
         <hr />
         <form className="form">
            <CustomInput
               title="First Name"
               className="form__input--first-name"
               type="text"
               placeholder="First Name"
            />
            <CustomInput
               title="Middle Name"
               className="form__input--middle-name"
               type="text"
               placeholder="Middle Name"
            />
            <CustomInput
               title="Last Name"
               className="form__input--last-name"
               type="text"
               placeholder="Last Name"
            />
            <Select title="Course" dataOption={dataOption} />
            <RadioInput title="Gender" name="Sex" dataRadio={dataRadio} />
            <CustomInput
               title="Phone"
               className="form__input--phone"
               type="tel"
               placeholder="Phone no"
            />
            <TextArea title="Current Address" placeholder="Current Address" />
            <CustomInput
               title="Email"
               className="form__input--email"
               type="email"
               placeholder="Enter Email"
            />
            <CustomInput
               title="Password"
               className="form__input--password"
               type="password"
               placeholder="Enter Password"
            />
            <CustomInput
               title="Re-type Password"
               className="form__input--re-password"
               type="password"
               placeholder="Re-type Password"
            />
            <Button type="submit" nameBtn="Register" />
         </form>
      </div>
   );
}

export default Lesson3;