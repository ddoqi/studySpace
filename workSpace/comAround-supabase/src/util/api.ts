import axios from "axios";

interface surverResponseType {
  company: string;
  [key: string]: number | string;
}

export const getPros1Data = async (urlReqCompanyName: string) => {
  const { data } = await axios.get(
    // `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log("api의 data", data);
  return data;
  // return {data}

  // axios.get(
  //   `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
  // );
};

//   axios.get(
//     `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
//   );
