import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { HomeRouter } from "./HomeRouter";
import { Page404 } from "../components/pages/Page404";

export const MainRouter: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/*" element={<HomeRouter />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});
