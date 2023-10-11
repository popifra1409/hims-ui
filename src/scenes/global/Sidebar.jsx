import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MedicationIcon from '@mui/icons-material/Medication';
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Collapse from "@mui/material/Collapse";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";


const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        paddingLeft: title === "Data" ? "10px" : undefined,
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      {!isCollapsed && <Typography>{title}</Typography>}
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [accueil, setAccueil] = useState(false);
  const [admission, setAdmission] = useState(false);
  const [pharmacie, setPharmacie] = useState(false);
  const [parametrage, setParametrage] = useState(false);
  const [utilisateurs, setUtilisateurs] = useState(false);

  const [selected, setSelected] = useState("Dashboard");
  const [profileInfoOpen, setProfileInfoOpen] = useState(true);

  const toggleProfileInfo = () => {
    setProfileInfoOpen(!profileInfoOpen);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },

        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              toggleProfileInfo();
            }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Collapse in={profileInfoOpen}>
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Hounang
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          </Collapse>

          <Item
              title="Dashboard"
              to="/"
              icon={<DashboardIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
          
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Box
              display="flex"
              alignItems="center"
              onClick={() => setAccueil(!accueil)}
            >
               <Item
              title="Accueil"
              to="#"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
              {accueil ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </Box>
            <Collapse in={accueil}>
              <Item
                title="Patient"
                to="/identification/patients"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Groupe Patients"
                to="/identification/groupePatients"
                icon={<GroupOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="InfosSup"
                to="/identification/InfosSup"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Unités fonctionnelles"
                to="/identification/InfosSup"
                icon={<MedicalServicesIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Documents"
                to="/identification/InfosSup"
                icon={<TextSnippetIcon  />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
            </Collapse>

            <Box
              display="flex"
              alignItems="center"
              onClick={() => setAdmission(!admission)}
            >
               <Item
              title="Admision"
              to="#"
              icon={<AssignmentIndIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
              {admission ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </Box>
            <Collapse in={admission}>
              <Item
                title="Hospitalisation"
                to="/form"
                icon={<LocalHotelIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Urgence"
                to="/calendar"
                icon={<LocalHospitalIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Morgue"
                to="/faq"
                icon={<AirlineSeatFlatIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
            </Collapse>
            
            {/* Section Pharmacie */}
            <Box
              display="flex"
              alignItems="center"
              onClick={() => setPharmacie(!pharmacie)}
            >
               <Item
              title="Pharmacie"
              to="#"
              icon={<LocalPharmacyIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
              {pharmacie ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </Box>
            <Collapse in={pharmacie}>
              <Item
                title="Produit"
                to="/form"
                icon={<MedicationIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Paramétrage"
                to="/calendar"
                icon={<SettingsIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Mouvement interne"
                to="/faq"
                icon={<SyncAltIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Mouvement externe"
                to="/faq"
                icon={<KeyboardBackspaceIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Mouvement stock"
                to="/faq"
                icon={<AddBusinessIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Inventaire"
                to="/faq"
                icon={<InventoryIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Alerte"
                to="/faq"
                icon={<AddAlertIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
            </Collapse>
            
            {/* Section Paramétrage */}
            <Box
              display="flex"
              alignItems="center"
              onClick={() => setParametrage(!parametrage)}
            >
               <Item
              title="Paramétrage"
              to="#"
              icon={<BuildIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
              {parametrage ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </Box>
            <Collapse in={parametrage}>
              <Item
                title="Etablissement"
                to="/bar"
                icon={<LocalHospitalOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Logs"
                to="/pie"
                icon={<PsychologyOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Settings"
                to="/line"
                icon={<SettingsApplicationsIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
            </Collapse>
            
            {/* Section Utilisateurs */}
            <Box
              display="flex"
              alignItems="center"
              onClick={() => setUtilisateurs(!utilisateurs)}
            >
               <Item
              title="Utilisateurs"
              to="#"
              icon={<PeopleAltIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
              {utilisateurs ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </Box>
            <Collapse in={utilisateurs}>
              <Item
                title="Profile"
                to="/bar"
                icon={<AccountCircleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Logout"
                to="/pie"
                icon={<ExitToAppIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
            </Collapse>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
