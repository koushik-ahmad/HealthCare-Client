"use client";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React from "react";
import DoctorInformation from "./components/DoctorInformations";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Profile = () => {
  const { data, isLoading } = useGetMYProfileQuery({});
  console.log(data);

  const fileUploadHandler = (file: any) => {};

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              src={data?.profilePhoto}
              height={300}
              width={400}
              alt="User Photo"
            />
          </Box>

          <AutoFileUploader
            name="file"
            label="Choose Your Profile Photo"
            icon={<CloudUploadIcon />}
            onFileUpload={fileUploadHandler}
            variant="text"
          />
        </Grid>
        <Grid xs={12} md={8}>
          <DoctorInformation data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
