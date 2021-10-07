import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { remove } from "../api/productAPI";
// import Edit from "./Edit";

const Albums = (props) => {
  const { url } = useRouteMatch();

  const removeProduct = async (id) => {
    try {
      remove(id);
      props.onDelete(id);
    } catch (error) {}
  };

  return (
    <div>
      <Switch>
        <Route exact path={url}>
          {props.products.map((item, index) => (
            <div className="card" key={index} style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <p className="card-text">{item.status}</p>
                <Link to={"/edit/" + item.id} className="btn btn-primary">
                  Edit
                </Link>
                <button onClick={() => removeProduct(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </Route>
      </Switch>
    </div>
  );
};

export default Albums;
