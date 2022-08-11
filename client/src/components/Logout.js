import { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../contexts/Auth";
import internal_api from "../services/internal";

const Logout = () => {
  const navigate = useNavigate();
  const auth = useContext(Auth);
  useEffect(() => {
    internal_api.logout();
    auth.user = undefined;
    auth.isLoggedIn = false;
    navigate("/");
  }, []);
};

export default Logout;