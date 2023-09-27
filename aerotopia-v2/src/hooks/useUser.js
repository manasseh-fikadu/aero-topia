import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logoutUser, setError } from "../redux/auth/slice";
import { AxiosError } from "axios";
import axios from "../util/axios";
const useUser = () => {
  const dispatch = useDispatch();
  const { user, isLogged, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isAuthorized = (role, user) => {
    if (!user || user.role !== role) {
      const err = new AxiosError("Unauthorized access!", 401);
      setError(err);
      return false;
    }
    return true;
  };
  const loginUser = (userData) => {
    // console.log(userData);
    dispatch(login(userData)).then((data) => {
      if (isAuthorized("Admin", data.payload)) {
        navigate("/admin/dashboard");
      } else {
        dispatch(logoutUser());
        setError(new AxiosError("Unauthorized access!", 401));
      }
    });
  };
  const get = () => {
    return user;
  };
  const startup = () => {};
  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return {
    loginUser,
    isAuthorized,
    get,
    startup,
    isLogged,
    error,
    logout,
  };
};

export default useUser;