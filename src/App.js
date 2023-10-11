import TopBar from "./scenes/global/TopBar";
import { ColorModecontext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import PatientDatatableList from "./components/datatable/identification/PatientDatatableList";
import NewPatient from "./scenes/pages/identification/patient/newPatient";
import UpdatePatient from "./scenes/pages/identification/patient/updatePatient";
import SinglePatient from "./scenes/pages/identification/patient/singlePatient"
import GroupePatientDatatable from "./components/datatable/identification/GroupePatientDatatable";
import InfosSupDatatable from "./components/datatable/identification/InfosSupDatatable";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModecontext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* identification resources */}
              <Route path="identification">
                <Route path="patients" element={<PatientDatatableList />} />
                <Route path="newpatient" element={<NewPatient />} />
                <Route path="updatepatient" element={<UpdatePatient />} />
                <Route path="singlepatient" element={<SinglePatient />} />

                <Route path="groupePatients">
                    <Route index element={<GroupePatientDatatable />} />
                </Route>

                <Route path="infosSup">
                    <Route index element={<InfosSupDatatable />} />
                </Route>



              </Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModecontext.Provider>
  );
}

export default App;
