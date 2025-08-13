'use client'
import useAuth from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import LoadingSpinner from "../global/LoadingSpinner";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";

const ProtectedRoute = ({ children }: {children: React.ReactNode}) => {
  const { authUser, loading } = useAuth();
   const {role} = useAppSelector(state => state.auth);
  const router = useRouter();
  const pathname = usePathname();

 useEffect(()=>{
 if (!authUser) {
    router.push("/");
  } else if (role === "vendor" && !pathname.startsWith("/business")) {
    router.push("/business");
  } else if (role === "user") {
    router.push("/home");
  }
 },[authUser, role])

  if (loading) return <LoadingSpinner />;
  return children;
};

export default ProtectedRoute;
