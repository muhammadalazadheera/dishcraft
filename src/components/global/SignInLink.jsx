"use client"
import { login } from "@/lib/actions/authActions";


function SignInLink() {
  return (
    <li>
      <a onClick={() => login()}>Login</a>
    </li>
  );
}

export default SignInLink;
