import {React, useState} from 'react'
import { tokens } from '../../../theme'; 
import { Box, Typography,useTheme, Button } from '@mui/material';
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { groupePatientColumns } from '../../../scenes/pages/identification/groupepatient/groupePatientDatatableSource';
import Header from '../../Header';
import { mockDataTeam } from '../../../data/mockData';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";



const PatientDatatable = () => {
    const [pageSize, setPageSize] = useState(10);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName:"ID"},
        {field: "name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},
        {field: "age", headerName:"Age", type:"number", headerAlign:"left",align:"left"},
        {field: "phone", headerName:"Phone Number", flex:1},
        {field: "email", headerName:"Email", flex:1},
        {field: "access", headerName:"Access Level", flex:1, renderCell:({row: {access}})=>{
          return(
            <Box
            width ="30%"
            m ="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
                access === "admin" ?
                colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
            >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
                {access === "manager" && <SecurityOutlinedIcon/>}
                {access === "user" && <LockOpenOutlinedIcon/>}
                <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
                    {access}
                </Typography>

            </Box>
          )
        }},
    ]

    const actionColumn = [
        {
          field: "action",
          headerName: "ACTIONS",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <div className="actionButtons">
                  <Link>
                    <button className="buttonWithIconText" style={{ backgroundColor: "#fcfcfc", border: "none", cursor: "pointer", borderRadius: "3px", marginRight: "10px" }}>
                      <DeleteOutlinedIcon className="icon" style={{ color: "red" }} />
                      <span style={{ color: "red" }}>Delete</span>
                    </button>
                  </Link>
                  <Link to={`/identification/patients/${params.id}`} style={{ textDecoration: "none" }}>
                    <button className="buttonWithIconText"  style={{ backgroundColor: "purple", border: "none", cursor: "pointer", borderRadius: "3px" }}>
                      <ContentPasteSearchOutlinedIcon className="icon" style={{ color: "white" }} />
                      <span style={{ color: "white" }}>View</span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          },
        },
      ];

  return (
    <Box m="20px">
    <Header title="GROUPE DE PATIENT"/>
    
    <Box
    m="40px 0 0 0"
    height="75vh"
    sx={{"& .MuiDataGrid-root":{
        border:"none",
    },
    "& .MuiDataGrid-cell":{
        borderBottom: "none",
    },

    "& .name-column--cell":{
       color: colors.greenAccent[300], 
    },
    "& .MuiDataGrid-columnHeaders":{
        backgroundColor: colors.BlueAccent[700],
        borderBottom:"none",
    },
    "& .MuiDataGrid-virtualScroller":{
        backgroundColor:colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer":{
        borderTop:"none",
        backgroundColor: colors.BlueAccent[700],
    },
    "& .MuiCheckbox-root": {
        color: `${colors.greenAccent[200]} !important`,
      },
      "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        color: `${colors.grey[100]} !important`,
      },
  
}}
    >
      <Box >
        <Link to="/identification/patients" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              backgroundColor: colors.BlueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
            Nouveau
          </Button>
          </Link>
        </Box>
        <DataGrid
         rows={mockDataTeam}
         columns={groupePatientColumns.concat(actionColumn)}
         rowsPerPageOptions={[5, 10, 20]}
         pageSize={pageSize}
         onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
         components={{ Toolbar: GridToolbar }}
         checkboxSelection
        />
    </Box>
</Box>
  )
}

export default PatientDatatable
