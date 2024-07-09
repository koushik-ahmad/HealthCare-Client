"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/actions/logoutUser";

const Navbar = () => {
  const userInfo = useUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography component={Link} href="/" variant="h4" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/Health Plans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/Medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/Diagnostics">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/NGOs">
            NGOs
          </Typography>
          {userInfo?.userId && (
            <Typography component={Link} href="/dashboard">
              Dashboard
            </Typography>
          )}
        </Stack>

        {userInfo?.userId ? (
          <Button onClick={handleLogOut} color="error">
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
