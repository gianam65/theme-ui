import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/default-layout/default-layout";
import LoginLayout from "./layouts/login-layout/login-layout";
import { Routes, Route } from "react-router-dom";
import "./libs/bootstrap.min.css";
import "./libs/font-awesome.min.css";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        const Layout = route.isLogin ? LoginLayout : DefaultLayout;
        const Page = route.component;

        return (
          <Route
            key={route.path}
            path={route.path}
            exact
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
