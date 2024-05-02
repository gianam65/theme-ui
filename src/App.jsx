import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/default-layout/default-layout";
import LoginLayout from "./layouts/login-layout/login-layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./libs/bootstrap.min.css";
import "./libs/font-awesome.min.css";

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, index) => {
          const Layout = route.isLogin ? LoginLayout : DefaultLayout;
          const Page = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              exact
              render={() => (
                <Layout>
                  <Page />
                </Layout>
              )}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
