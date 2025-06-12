import Link from "next/link";
import { rubik } from "./layout";

export default function Home() {
  return (
    <div className="bg-[#F7F8F9]">
      <div className="md:max-w-[375px] w-full mx-auto flex flex-col h-screen p-6">
        <div className="2xl:mt-auto xl:mt-auto md:mt-auto md:my-0 my-auto">
          <h1 className={`text-[#1D2226] text-[28px] font-medium ${rubik.className}`}>Welcome to PopX</h1>
          <p className={`text-[#1D2226] opacity-60 ${rubik.className} text-lg mt-[10px]`}>Manage your customers and grow <br /> your business with ease on PopX.</p>
          <button className={`bg-[#6C25FF] rounded-[6px] text-white w-full text-center mt-[30px] font-medium ${rubik.className} py-3 cursor-pointer hover:bg-[#5A1FD9] transition-all duration-300`}>
            Create Account
          </button>
          <Link href={'/signIn'} className="w-full">
            <button className={`bg-[#CEBAFB] rounded-[6px] text-[#1D2226] w-full text-center mt-[10px] font-medium ${rubik.className} py-3 cursor-pointer hover:bg-[#A582F5] hover:text-white transition-all duration-300`}>
              Already Registered? Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
