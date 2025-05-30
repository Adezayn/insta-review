import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const redirectToDashboard = (role: string, router: AppRouterInstance) => {
  if (role === "vendor") {
    router.push("/vendors");
  } else if (role === "user") {
    router.push("/home");
  } else {
    console.error("Unknown user role:", role);
  }
};
