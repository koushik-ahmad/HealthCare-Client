"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/actions/logoutUser";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInfo = useUserInfo();
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!userInfo?.userId);
  }, [userInfo]);

  const handleLogOut = async () => {
    await logoutUser(router);
    setIsLoggedIn(false);
  };

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
      }}
    >
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            P
            <Box component="span" color="#ffffff">
              H
            </Box>{" "}
            Health Care
          </Typography>

          <Stack direction="row" justifyContent="space-between" gap={4}>
            <Typography component={Link} href="/consultation" color="#ffffff">
              Consultation
            </Typography>

            <Typography color="#ffffff">Diagnostics</Typography>
            <Typography component={Link} href="/doctors" color="#ffffff">
              Doctors
            </Typography>

            {isLoggedIn ? (
              <Typography component={Link} href="/dashboard" color="#ffffff">
                Dashboard
              </Typography>
            ) : null}
          </Stack>

          {isLoggedIn ? (
            <Button color="error" onClick={handleLogOut} sx={{ boxShadow: 0 }}>
              Logout
            </Button>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
