import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/carInsurance";

export const getDriverInfo = (driverId) => {
  let config = {
    method: "get",
    url: `${baseUrl}/get/driver/${driverId}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
