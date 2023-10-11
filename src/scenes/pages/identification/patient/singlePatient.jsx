import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

const PatientInfoCard = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        background: theme.palette.mode === "dark" ? "#1F2A40" : "#fcfcfc",
        marginBottom: "20px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="h2" gutterBottom sx={{ fontSize: "1.2rem" }}>
          Informations du Patient
        </Typography>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} >
            <strong>{`${key}: `}</strong>
            {value}
          </div>
        ))}
      </CardContent>
      <Button
        variant="contained"
        component={Link}
        to="/identification/updatePatient"
        sx={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "blue",
          color: "white",
        }}
        startIcon={<Edit />}
      >
        Modifier
      </Button>
    </Card>
  );
};

const PatientProfile = () => {
  const theme = useTheme();
  const patientData = {
    nom: "Loic",
    adresse: "123 Rue de la Santé",
    email: "loic@example.com",
    patientAge: "30",
    patientBarCode: "patient123",
    patientBirthDay: "1993-10-01",
    patientLastName: "Doe",
    patientFirstName: "John",
    patientNationalite: "French",
    patientPlaceOfBirth: "Paris",
    patientProfession: "Doctor",
    patientReligion: "None",
    patientSex: "Male",
    telephone: "123-456-7890",
    parametreSoin: "Some parameter",
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box m="20px">
      {isMobile ? (
        <>
          <PatientInfoCard data={patientData} sx={{ fontSize: "1.2rem" }}/>
          <PatientInfoCard data={patientData} sx={{ fontSize: "1.2rem" }}/>
        </>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <PatientInfoCard data={patientData} sx={{ fontSize: "1.2rem" }}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <PatientInfoCard data={patientData} sx={{ fontSize: "1.2rem" }}/>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default PatientProfile;
