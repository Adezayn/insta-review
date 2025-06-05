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

export const formatDate = (dateString: string | Date) => {
    let date;
    if(typeof dateString == 'string') {
      date = new Date(dateString);
    }else {
      date = dateString;
    }
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const time = date
      .toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .toUpperCase();

    // return `${day}/${month}/${year} at ${time}`;
    return `${day}/${month}/${year}`;
  };
