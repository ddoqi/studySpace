import axios from "axios";

export const getPros1Data = async (urlReqCompanyName: string) => {
  console.log(urlReqCompanyName);
  const response = await axios.get(
    // `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log("api.ts에 있음 ", response.data);
  return response.data;

  // axios.get(
  //   `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
  // );
};

//   axios.get(
//     `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
//   );
