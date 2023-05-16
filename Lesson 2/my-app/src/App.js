import Card from "./Components/Card.js";
import { data } from "./Data/Data.js";
import Input from "./Component-Input/Input.js";

function App() {
   return (
      <div>
         <div className="row">
            <h1 className="row__title">The Future of WYSIWYG</h1>
            <div className="grid">
               {data.map((item) => (
                  <Card title={item.title} image={item.image} decription={item.decription} />
               ))}
            </div>
         </div>
         <Input name={"Ten"} type={"text"} placeholder={"Ten"}></Input>
      </div>
   );
}

export default App;
