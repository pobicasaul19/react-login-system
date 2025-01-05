import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path }) => (
    <Route key={path} path={path} />
  ));

  return (
      <Routes>{pageRoutes}</Routes>
  );
};

export default Router;
