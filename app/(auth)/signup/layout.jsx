import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sign Up",
  description: "Autamation of payments car allowed, ",
};

export default function SignupLayout({ children }) {
  return (
   <div>
    {children}
   </div> 
    
  );
}