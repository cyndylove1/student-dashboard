import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo";
import Checkbox from "../../components/checkbox";
import Button from "../../components/button";
import CustomInput from "../../components/customInput";
import Cover from "../../components/cover";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character";
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      setPasswordError(validatePassword(value));
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validatePassword(formData.password);

    if (error) {
      setPasswordError(error);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Login Section */}
      <div className="w-full lg:w-1/2 min-h-screen border-r border-[#DEDEDF]">
        <div className="lg:pl-[50px] px-4 pt-10">
          {/* Logo */}
          <Logo />

          <h2 className="pt-[3rem] text-(--color) text-[28px] leading-[30px]">
            Hi, Welcome Back!
          </h2>

          <h5 className="text-(--color) text-[14px] pt-[10px] leading-[100%] pb-[2rem]">
            Please sign in using your credentials.
          </h5>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-[20px]">
              <CustomInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div>
              <CustomInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                required
                disabled={isLoading}
              />

              {passwordError && (
                <p className="text-red-500 text-[12px] mt-1">{passwordError}</p>
              )}
            </div>

            {/* Forgot Password */}
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-[14px] pt-[6px] leading-[20px] text-(--color)"
            >
              Forgot Password?
            </button>

            {/* Remember Me */}
            <div className="flex items-center gap-[12px] pt-[1rem]">
              <Checkbox height="20px" width="20px" />

              <h3 className="text-[14px] leading-[20px] text-[#161616]">
                Remember me
              </h3>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              text={isLoading ? "Logging in..." : "Login"}
              disabled={isLoading}
              className="bg-(--main) w-full h-[44px] rounded-[8px] mt-[1rem]"
            />
          </form>
        </div>
      </div>

      {/* Cover Section */}
      <div className="hidden lg:block lg:w-1/2 min-h-screen">
        <Cover />
      </div>
    </div>
  );
}
