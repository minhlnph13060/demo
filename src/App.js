// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Albums from "./Components/Albums";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Add from "./Add";
import { getAll } from "./api/productAPI";
import Edit from "./Edit";
// import Delete from "./Delete";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((response) => setProducts(response.data));
    console.log(products);
  }, []);
  const onHandleAdd = (product) => {
    setProducts([...products, product]);
  };
  const onHandleUpdate = (product) => {
    const newProducts = products.map((item) =>
      item.id === product.id ? product : item
    );
    setProducts(newProducts);
  };
  const onHandleDelete = (id) => {
    const newProducts = products.filter((product) => product.id != id);
    setProducts(newProducts);
  };

  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/introduce" exact>
            <Albums products={products} onDelete={onHandleDelete} />
          </Route>
          <Route path="/add" exact>
            <Add onAdd={onHandleAdd} />
          </Route>
          <Route path="/edit/:id">
            <Edit onUpdate={onHandleUpdate} />
          </Route>
          {/* <Route path="/delete/:id">
            <Delete on /> */}
          {/* </Route> */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
