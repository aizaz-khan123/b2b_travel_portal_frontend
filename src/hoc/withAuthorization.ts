import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuthorization = (Component: React.FC, requiredPermissions: string[]) => {
  return () => {
    const router = useRouter();
    const userPermissions = useSelector((state: any) => state.auth?.permissions || []);

    useEffect(() => {
      if (!requiredPermissions.some((perm) => userPermissions.includes(perm))) {
        router.replace("/unauthorized"); // Redirect if unauthorized
      }
    }, [userPermissions, requiredPermissions, router]);

    return <Component />;
  };
};