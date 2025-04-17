import "./App.css";
import Searchbar from "./Components/Searchbar";
import AddPerson from "./Components/AddPerson.jsx";
import TableauPersons from "./Components/TableauPersons.jsx";

function App() {
  return (
    <div className="container-fluid p-3">
      <h1 className="text-light text-center my-3">CRUD REACT</h1>
      <div className="row">
        <Searchbar />
        <AddPerson />
      </div>
      <TableauPersons />
    </div>
  );
}

export default App;
