import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:8080/api/v1/carInsurance";

export const getDriverInfo = async (driverId) => {
  console.log("Get Drivers info api:", driverId);
  try {
    let getDriversInfoResponse = await axios.get(
      `${baseUrl}/get/driver/${driverId}`
    );
    console.log("GetDriver info response::", getDriversInfoResponse);
    toast.success("Quote fetched");

    return getDriversInfoResponse.data;
  } catch (error) {
    console.warn("Get Drivers info Error:", error.response.data.status);
    toast.success(error.response.data.status);
    return error.response;
  }
};
