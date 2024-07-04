import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            navigate("/home");
            showMessage({ title: "ログイン成功", status: "success" });
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
          }
        })
        .catch(() => showMessage({ title: "ログイン失敗", status: "error" }))
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate, showMessage]
  );
  return { login, loading };
};
