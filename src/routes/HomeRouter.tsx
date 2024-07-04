import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const HomeRouter: FC = memo(() => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/user_management" element={<UserManagement />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
