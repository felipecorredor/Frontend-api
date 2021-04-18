import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import { Categories } from "./components/Categories";
import { DetailCategory } from "./components/DetailCategory";
import { ListOfCategories } from "./components/ListOfCategories";
import { Skip } from "./components/Skip";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <PrivateRoute type="private" exact path="/categories" component={Categories} />
        <PrivateRoute type="private" exact path="/ListOfCategories" component={ListOfCategories} />
        <PrivateRoute type="private" exact path="/skip" component={Skip} />
        <Route exact path="/category/:categoryId" component={DetailCategory} />
      </Switch>
    </Router>
  );
}

export default App;
