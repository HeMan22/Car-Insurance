import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:8080/api/v1/carInsurance";

export const saveDriverInfo = async (driverInfo) => {
  console.log("Save Driver API -> ", driverInfo);
  try {
    let saveDriverInfoResponse = await axios.post(
      `${baseUrl}/save/driver`,
      driverInfo
    );
    console.log("Save Driver API Response", saveDriverInfoResponse);
    toast.success("Driver Info Saved");
    return saveDriverInfoResponse.data;
  } catch (error) {
    console.log("Error Saving Driver Info -> ", error.message);
    toast.error(error.message);
    return error.response;
  }
};

export const getDriverInfo = async (driverId) => {
  console.log("Get Driver Info API -> ", driverId);
  try {
    let getDriversInfoResponse = await axios.get(
      `${baseUrl}/get/driver/${driverId}`
    );
    console.log("Get Driver Info API Response -> ", getDriversInfoResponse);
    toast.success("Driver Info Fetched");

    return getDriversInfoResponse.data;
  } catch (error) {
    console.warn("Get Driver Info API Error:", error.response.data.status);
    toast.error(error.response.data.message);
    return error.response;
  }
};

export const deleteDriverInfo = async (driverId) => {
  console.log("Delete Driver Info API-> ", driverId);
  try {
    let deleteDriverInfoResponse = await axios.delete(
      `${baseUrl}/delete/driver/${driverId}`
    );
    console.log(
      "Driver Delete Info API Response -> ",
      deleteDriverInfoResponse
    );
    toast.success("Driver Info Deleted");
    return deleteDriverInfoResponse.data;
  } catch (error) {
    console.warn("Driver Delete Info API Error -> ", error.response);
    toast.error(error.response.data.message);
    return error.response;
  }
};

export const updateDriverInfo = async (driverInfo) => {
  console.log("Update Driver API -> ", driverInfo);
  try {
    let updateDriverInfoResponse = await axios.post(
      `${baseUrl}/update/driver`,
      driverInfo
    );
    const { status, message } = updateDriverInfoResponse.data;
    if (status === "SUCCESS") {
      console.log("updateDriverInfoResponse -> ", updateDriverInfoResponse);
      toast.success(message);
      return updateDriverInfoResponse.data;
    }
  } catch (error) {
    console.warn("Error Updating Driver -> ", error);
    toast.error(error.response.message);
  }
};
