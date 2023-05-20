import Card from "./Components/Card.jsx";

function App() {
   return (
      <div className="App">
         <Card imageShow={false} topTitle = "left" />
         <div>
            <Card topTitle = "left"/>
            <Card />
         </div>
      </div>
   );
}

export default App;
