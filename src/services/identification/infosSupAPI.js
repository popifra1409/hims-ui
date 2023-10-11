import axios from "axios";

const InfosSup_API_BASE_URL = "http://localhost:9091/hims/infossup/";

class InfosSupAPI {
    //list all patients
    getInfosSup = async (patientId) => {
        return await axios.get(InfosSup_API_BASE_URL + "patient/" + patientId);
    };

    getInfosSupById = async (infosSupId) => {
        return await axios.get(InfosSup_API_BASE_URL  + infosSupId);
    };
}
export default new InfosSupAPI()