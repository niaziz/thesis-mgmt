import { CalculatorIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import Login from "../components/Login";

export default function LoginPage() {
  return (
      <div className="w-screen h-screen flex flex-row">
        <div className="bg-red w-[50%]"></div>
        <div className="w-[50%]">
          <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login /></div>
      </div>
   
  );
}
