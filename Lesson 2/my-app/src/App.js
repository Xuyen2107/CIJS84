import Card from "./Components/Card.js";
import { data } from "./Data/Data.js";

function App() {
   return (
      <div className="row">
         <h1 className="row__title">The Future of WYSIWYG</h1>
         <div className="grid">
            {data.map((item) => (
               <Card title={item.title} image={item.image} decription={item.decription} />
            ))}
         </div>
      </div>
   );
}

export default App;
