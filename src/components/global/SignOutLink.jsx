"use client"
import { logout } from "@/lib/actions/authActions";


function SignOutLink() {
  return (
    <li>
      <a onClick={() => logout()}>Logout</a>
    </li>
  );
}

export default SignOutLink;
