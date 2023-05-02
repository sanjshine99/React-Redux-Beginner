import { useDispatch } from "react-redux"; //modify the value
import { login, logOut } from "../features/user"; //action

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Sanjana",
              age: 24,
              email: "sanubandara12639@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logOut({}));
        }}
      >
        LogOut
      </button>
    </div>
  );
}
export default Login;
