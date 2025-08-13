import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import {
  LogOutIcon
} from "lucide-react";

const Logout = () => {
  const {logout} = useAuth();
  const router = useRouter();
  const handleLogout = () => {
     logout();
     router.push("/");
  }
  return (
    <div onClick={handleLogout} className="flex gap-3 items-center hover:opacity-70 cursor-pointer pb-4">
        <LogOutIcon />
        <p>Logout</p>
    </div>
  )
};

export default Logout;
