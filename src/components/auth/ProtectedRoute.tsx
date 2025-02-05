'use client'
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../global/LoadingSpinner";

const ProtectedRoute = ({ children }: {children: React.ReactNode}) => {
  const { authUser, loading } = useAuth();
  console.log(authUser, "=====authuser===")
  const router = useRouter();

  if (loading) return <LoadingSpinner />;

  if (!authUser) {
    router.push("/");
    return null;
  } else if (authUser.role === "vendor") {
    router.push("/business");
  } else if (authUser.role === "reviewer") {
    router.push("/home");
  }

  return children;
};

export default ProtectedRoute;
