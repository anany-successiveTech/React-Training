"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        router.push("/assignment-5/question-9/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
