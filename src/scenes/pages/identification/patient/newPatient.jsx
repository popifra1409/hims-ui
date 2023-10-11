import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Formik, FieldArray, Form } from "formik";
import { CircularProgress, useTheme,ThemeProvider } from "@mui/material";
import * as Yup from "yup";
import TextFieldWrapper from "../../../../components/FormsUI/Textfield/index";
import SelectWrapper from "../../../../components/FormsUI/Select/index";
import RadioSelectWrapper from "../../../../components/FormsUI/RadioButton/index";
import professions from "../../../../../src/static/professions.json";
import religions from "../../../../../src/static/religions.json";
import pays from "../../../../../src/static/pays.json";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../components/Header";
import { tokens } from "../../../../theme";


const emptyInfoSup = { cle: '', valeur: '' };

const INITIAL_FORM_STATE = {
  adresse: "",
  email: "",
  patientAge: "",
  patientBarCode: "patient",
  patientBirthDay: "",
  patientLastName: "",
  patientFirstName: "",
  patientNationalite: "",
  patientPlaceOfBirth: "",
  patientProfession: "",
  patientReligion: "",
  patientSex: false,
  telephone: "",
  infosSup: [emptyInfoSup],
  parametreSoin: "",
};

const AGE_REGEX = /^(0|[1-9]\d*)$/;

const FORM_VALIDATION = Yup.object().shape({
  patientLastName: Yup.string()
    .required("Renseignez le nom du patient")
    .min(3, "Le nom du patient doit contenir au moins 3 caractères"),
  telephone: Yup.number()
    .integer()
    .typeError("Numéro de téléphone invalide")
    .required("Renseignez un numéro de téléphone")
    .min(9, "Le numéro doit contenir au moins 9 chiffres"),
  patientSex: Yup.string().required("Renseignez le genre"),
  patientBirthDay: Yup.date().required("Renseignez la date de naissance"),
  patientAge: Yup.string()
    .matches(AGE_REGEX, "L'âge doit être un nombre entier positif")
    .required("Required"),
  patientProfession: Yup.string().required("Renseignez la profession"),
  email: Yup.string().email("E-mail invalide"),
});


const NewPatient = () => {
  const theme = useTheme();
  //const isNonMobile = useMediaQuery("(min-width:600px)");
  

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  // Options pour le genre
  const genre = [
    { value: "0", label: "Masculin" },
    { value: "1", label: "Féminin" },
    { value: "2", label: "Non précisé" },
  ];

  return (
    <ThemeProvider theme={theme}>
    <Box m="20px">
      <Header title="NOUVEAU PATIENT" subtitle="Create a New User Profile" />
      <Card className="Card"  style={{
            background: theme.palette.mode === "dark" ? "#1F2A40" : "#fcfcfc",
          }} >
        <CardContent >
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={INITIAL_FORM_STATE}
            validationSchema={FORM_VALIDATION}
          >
            {({ values, isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="form">
                <Grid container spacing={2}>
                <Grid item xs={12}>
                                                <Typography variant="h2" >
                                                    Informations du patient
                                                </Typography>
                                            </Grid>
                  
                  <Grid item xs={4}>
                    <TextFieldWrapper
                      name="patientFirstName"
                      label="Nom(s)"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextFieldWrapper
                      type="date"
                      name="patientBirthDay"
                      label="Date de naissance"
                    />
                    <TextFieldWrapper
                      type="number"
                      name="patientAge"
                      label="Age du patient"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SelectWrapper
                      name="patientProfession"
                      label="Profession"
                      options={professions}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextFieldWrapper
                      name="patientLastName"
                      label="Prénom(s)"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextFieldWrapper
                      name="patientPlaceOfBirth"
                      label="Lieu de naissance"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SelectWrapper
                      name="patientNationalite"
                      label="Nationalité"
                      options={pays}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <RadioSelectWrapper
                      label="Genre"
                      name="patientSex"
                      options={genre}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SelectWrapper
                      name="patientReligion"
                      label="Religion"
                      options={religions}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h2">
                      Coordonnées du patient
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextFieldWrapper
                      name="telephone"
                      label="Contact (N° Téléphone)"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextFieldWrapper
                      name="email"
                      label="Adresse électronique"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextFieldWrapper name="adresse" label="Adresse postale" />
                  </Grid>

                  {/* Infos supplémentaires du patient */}
                  <Card style={{ width: "100%", marginTop: "10px", background: theme.palette.mode === "dark" ? "#1F2A40" : "#fcfcfc"}}   >
                    <CardContent>
                      <FieldArray name="infosSup">
                        {({ push, remove }) => (
                          <>
                            <Grid item xs={12}>
                              <Typography variant="h2">
                                Informations supplémentaires
                              </Typography>
                            </Grid>
                            {values.infosSup.map((_, index) => (
                              <Grid
                                container
                                item
                                key={index}
                                spacing={2}
                              >
                                <Grid item xs={5}>
                                  <TextFieldWrapper
                                    name={`infosSup[${index}].cle`}
                                    label="Information"
                                  />
                                </Grid>
                                <Grid item xs={5}>
                                  <TextFieldWrapper
                                    name={`infosSup[${index}].valeur`}
                                    label="Valeur"
                                  />
                                </Grid>
                                <Grid item xs={2}>
                                  <IconButton
                                    aria-label="supprimer"
                                    size="small"
                                    variant="outlined"
                                    onClick={() => remove(index)}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                  <IconButton
                                    aria-label="ajouter"
                                    size="small"
                                    variant="outlined"
                                    onClick={() => push(emptyInfoSup)}
                                  >
                                    <AddIcon />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            ))}
                          </>
                        )}
                      </FieldArray>
                    </CardContent>
                  </Card>
                  <Grid item style={{ marginTop: '10px' }}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      startIcon={isSubmitting ? <CircularProgress size="1rem" /> : undefined}
                    >
                      {isSubmitting ? 'Enregistrement en cours' : 'Enregistrer'}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
    </ThemeProvider>
  );
};

export default NewPatient;
