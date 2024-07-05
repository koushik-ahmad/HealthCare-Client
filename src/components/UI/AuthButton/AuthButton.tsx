import { authKey } from "@/constants/authkey";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <>
      {userInfo?.userId ? (
        <Button onClick={handleLogOut} color="error">
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
