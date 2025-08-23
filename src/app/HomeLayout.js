import NavBar from "@/components/global/NavBar";
import { auth } from "@/auth";
import "./style.css";
import { ToastContainer } from "react-toastify";

export default async function HomeLayout({ children }) {
  const session = await auth();
  return (
    <>
      <div className="w-full md:w-[95%] mx-auto">
        <NavBar session={session} />
      </div>
      {children}
      <ToastContainer />
      <footer className="mt-5 py-3 w-full md:w-[95%] mx-auto grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#b75d69]">DishCraft</h1>
          <p className="text-[#0081a7]">&copy; 2025 Dishcraft. All rights reserved.</p>
        </div>
        <div className="useful-links text-center">
          <h2 className="text-xl font-bold text-[#b75d69]">Useful Links</h2>
          <ul>
            <li>
              <a href="#" className="text-[#0081a7]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#0081a7]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-[#0081a7]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="social-links text-center">
          <h2 className="text-xl font-bold text-[#b75d69] mb-2">Follow Us</h2>
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="text-2xl text-[#0081a7]">
                <i className="fab fa-facebook"></i>

              </a>
            </li>
            <li>
              <a href="#" className="text-2xl text-[#0081a7]">
                <i className="fab fa-twitter"></i>

              </a>
            </li>
            <li>
              <a href="#" className="text-2xl text-[#0081a7]">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
