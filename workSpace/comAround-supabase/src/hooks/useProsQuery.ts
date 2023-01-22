import { useQueryClient, useQuery } from "react-query";
import { useEffect, useState } from "react";
// const queryClient = useQueryClient();
import axios from "axios";

// 불러온 데이터타입
// company	commute	convenient	restaurant	pros1	pros2	pros3	pros4	pros5	cons1	cons2	cons3	cons4	cons5
// 정익님이 짜주신 코드-------------------------
interface RootObject {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
// 정익님이 짜주신 코드-------------------------

interface ServerResponseType {
  company: string;
  [key: string]: number | string;
}

// 정익님이 짜주신 코드-------------------------
// const usePropsQuery = () => {
//   const [testData, setTestData] = useState({});
//   const { data } = useQuery<RootObject>("temp", async () => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     return data;
//   });
// 정익님이 짜주신 코드-------------------------

// undefined가 떴던 이유? typing을 안해줬기 때문
// 안되었던 코드 :const { data } = useQuery("getPros1Data", () =>
// 해결된 코드 : const { data } = useQuery<surverResponseType>("getPros1Data", () =>
const usePropsQuery = (urlReqCompanyName: string) => {
  const [sheetData, setSheetData] = useState({});
  const { data } = useQuery<ServerResponseType>("getPros1Data", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"

      // `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
    );
    return data;
  });

  useEffect(() => {
    if (data) {
      setSheetData(data);
      console.log("data에 변화감지시 useEffect실행");
    }
  }, [data]);

  return { sheetData };
};

export default usePropsQuery;
