import { useState } from "react";
import Input from "../../../components/base/Input";
import images from "../../../components/image/imageGalery";
import Button from "../../../components/base/Button";
import Spinner from "../../../components/base/Spinner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState("password");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = [
    {
      name: "email",
      value: form?.email,
      label: "Email",
      type: "email",
    },
    {
      name: "password",
      value: form?.password,
      label: "Password",
      type: show,
    },
  ];
  const handleShowPassword = () => {
    if (show === "password") {
      return setShow("text");
    }
    setShow("password");
  };
  const onChange = (e) => {
    setForm({ ...form, [e?.target?.name]: e?.target?.value });
  };
  const handleLogin = () => {
    setLoading(true);
    // ganti dengan handler api login
    setTimeout(() => {
      alert(`email: ${form?.email} password: ${form?.password}`);
      setLoading(false);
      localStorage.setItem("token", "token");
      navigate("/");
    }, 5000);
  };
  return (
    <main className="flex flex-col items-center py-6 gap-y-6 font-poppins">
      <img src={images?.logoPeriplusLogin} alt="" />
      <div className="relative border border-gray-300 rounded w-[24%] px-3 py-5">
        <h1 className="font-bold text-orange-400 text-2xl">
          Sign In to Your Account
        </h1>
        {login?.map((item, i) => (
          <div key={i} className="flex flex-col my-4">
            <label htmlFor="" className="font-bold">
              {item?.label} :
            </label>
            <Input
              type={item?.type}
              onChange={(e) => onChange(e)}
              name={item?.name}
              value={item?.value}
              className={"border border-gray-300 rounded mt-1 w-full"}
            />
          </div>
        ))}
        <span
          className="absolute right-6 bottom-1/2 text-sm cursor-pointer"
          onClick={handleShowPassword}
        >
          Show
        </span>
        <Button
          onClick={handleLogin}
          className={
            "bg-blue-600 text-white w-full py-1 text-center font-semibold rounded mb-3"
          }
        >
          {loading ? <Spinner /> : "Login"}
        </Button>
        <p className="text-blue-700 text-sm">
          You don't have an account yet?{" "}
          <span className="ml-2 hover:underline cursor-pointer">
            Register here
          </span>{" "}
        </p>
        <p className="text-blue-700 text-sm cursor-pointer hover:underline">
          Forgot your password?
        </p>
        <div className="flex flex-col items-center mt-2">
          <p className="text-gray-500 font-bold text-sm">Or Login With</p>
          <Button className={"mt-2"} onClick={() => alert("login google")}>
            <img src={images?.googleBtn} alt="" />
          </Button>
        </div>
      </div>
    </main>
  );
}
