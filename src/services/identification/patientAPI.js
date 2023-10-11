import axios from "axios";

const Patient_API_BASE_URL = "http://localhost:9091/hims/patients/";

class PatientAPI {
    //list all patients
    getPatients = async () => {
        return await axios.get(Patient_API_BASE_URL + "all");
    };

    //get a single patient
    getPatientsById = async (patientId) => {
        return await axios.get(Patient_API_BASE_URL + patientId);
    };

    //create a patient
    addPatient = async (patient) => {
        return await axios.post(Patient_API_BASE_URL + "save", patient);
    };

    //modifier un patient
    updatePatient = async (patientId, patient) => {
        return await axios.put(Patient_API_BASE_URL + "update/" + patientId, patient);
    };

    //supprimer un patient
    deletePatients = async (patientId) => {
        return await axios.delete(Patient_API_BASE_URL + "delete/" + patientId);
    };
}

export default new PatientAPI()