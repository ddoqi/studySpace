import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../util/supabase";

const CompanyPage = () => {
  const location = useLocation();
  const urlReqCompanyName = location.state["companyName"];

  // supabase연결되었는지 찍어봤음
  console.log("supabase:", supabase);

  // 총점1개, 장점1개 state 만들어보기
  const [totalPros1, setTotalPros1] = useState(0);
  const [commuteAve, setCommuteAve] = useState(0);

  // supabase에서 table 가져오는 함수
  const getTable = async () => {
    const { data, error } = await supabase
      .from("SurveyData")
      .select()
      .eq("company", `${urlReqCompanyName}`);

    // 데이터 담길 배열들
    // getTable 함수 바깥에 선언하면, 안됌!!! 중복으로 또 더해져
    const prosArray: number[] = [];
    const commuteArray: number[] = [];

    if (data) {
      console.log(data);
      data?.map((item: any) => {
        //pros1을 배열에 넣어주는 작업
        console.log("item.pros1:", item.pros1);
        prosArray.push(item.pros1);
        console.log("길이가 2여야됑..", prosArray.length);
        console.log("난 prosArray얌", prosArray);
        let pros1TotalResult: number = prosArray.reduce(
          (total: number, value: number) => (total += value),
          0
        );
        console.log("result가 2가 나와야댕 : ", pros1TotalResult);
        setTotalPros1(pros1TotalResult);
        //commute를 배열에 넣어주는 작업
        console.log("item.commute:", item.commute);
        commuteArray.push(item.commute);
        console.log("나도 길이가 2여야댕..", commuteArray.length);
        let commuteTotalResult: number = commuteArray.reduce(
          (total: number, value: number) => (total += value),
          0
        );
        console.log("commuteTotalResult는 commute의 총합", commuteTotalResult);
        let commuteAve = commuteTotalResult / commuteArray.length;
        console.log("난 평균값이야", commuteAve);
        setCommuteAve(commuteAve);
      });
    }
    if (error) {
      console.log("에러가 나쪙 ㅠ.ㅠ", error);
    }
  };

  // useEffect 부분
  useEffect(() => {
    getTable();
  }, []);

  return (
    <div>
      <h3>urlRequest:{urlReqCompanyName}</h3>
      <h3>pros1의 합계 : {totalPros1}</h3>
      <h3>commute의 평균 : {commuteAve}</h3>
    </div>
  );
};

export default CompanyPage;

//------------------------------------------------------------------
// const getList = () => {
//   axios
//     .get(
//       "https://sheet.best/api/sheets/325137bc-19de-426f-a61c-bae2208f94db/company/kakao"
//     )
//     .then((response: any) => {
//       // 결과값 [{'회사명':카카오, '장점1':'카카오장점1', '장점2':'카카오장점2'}, {'회사명':카카오, '장점1':'카카오장점1', '장점2':'카카오장점2'}]
//       console.log(response.data);
//       // wholeData : [{'회사명':'카카오','장점1':'1','장점2':'0'},{'회사명':'카카오','장점1':'1'},...]
//       const wholeData = response.data;
//       const 장점1: number[] = [];
//       {
//         wholeData.map((item: any) => {
//           // wholeData의 객체를 하나씩 뽑아서(=item),
//           // item의 '장점1'의 value들만 미리 만들어놓은 장점1 배열에 push해준다.

//           장점1.push(Number(item.장점1));
//         });
//       }
//       // reduce 함수를 이용해서, 장점1 배열값을 모두 합산해준다.
//       console.log(장점1);
//       let result: number = 장점1.reduce(
//         (total: number, value: number) => (total += value),
//         0
//       );
//       console.log("result:", result);
//     });
// };
//
//
//---------------------------------------------

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
//
//
// const CompanyPage = () => {
//   const location = useLocation();
//   const urlReqCompanyName = location.state["companyName"];
//   let pros1Result: number = 0;
//   // const [dataList, setDataList] = useState([]);
//   const [pros1State, setPros1State] = useState(0);
//
// const getList = () => {
//   axios
//     .get(
//       // 마미껄로 연동한 url
//       `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
//       // `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/naver`

//       // 얘 막힌애임
//       // `https://sheet.best/api/sheets/325137bc-19de-426f-a61c-bae2208f94db/company/${urlReqCompanyName}`
//       // "https://sheet.best/api/sheets/325137bc-19de-426f-a61c-bae2208f94db/company/kakao"
//     )
//     .then((response) => {
//       // response.data : [{'company':kakao, 'comute':'5', 'convenient':'3'...}, {'company':kakao, 'comute':'5', 'convenient':'3'...}]
//       console.log("response.data:", response.data);
//       // wholeData : [{'company':kakao, 'comute':'5', 'convenient':'3'...},{'company':kakao, 'comute':'5', 'convenient':'3'...}]
//       const wholeData = response.data;
//       // setDataList(wholeData);
//       // console.log("dataList에 담겼니? dataList:", dataList);
//       // 장점1의 배열
//       console.log("wholeData:", wholeData);
//       const pros1Array: number[] = [];
//       {
//         //wholeData.map((item: any)
//         wholeData?.map((item: any) => {
//           // dataList배열의 객체를 하나씩 뽑아서(=item),
//           // 각 item의  'pros1'의 value만 pros1Array에 push해준다.
//           // *string배열이었기 때문에, Number로 형변환을 해주기
//           pros1Array.push(Number(item.pros1));
//         });
//       }
//       console.log("pros1Array 잘 들어왔니?", pros1Array);
//       // reduce 함수를 이용해, 장점1 안의 배열값들을 모두 합산해준다.
//       // 이 코드는 구글링해왔음
//       pros1Result = pros1Array.reduce(
//         (total: number, value: number) => (total += value),
//         0
//       );
//       console.log("getList안에서의 pros1Result:", pros1Result);
//       return pros1Result;
//     })
//     .then((result) => {
//       console.log("thethen의 리절트", result);
//       setPros1State(result);
//     });
// };

// // <<주의>>
// // 1)return위에 useEffect쓰라고 하심
// // 2) set함수는 마지막에 실행된다.
// // 3) useEffect는 리턴문이 실행되고나서 실행된다.
// useEffect(() => {
//   getList();
// }, []);

//----------튜터님한테 물어봐야징-------------
// const CompanyPage = () => {
//   const location = useLocation();
//   const urlReqCompanyName = location.state["companyName"];
//   // useLocation() 얘로 바꿔
//   const [dataState, setDataState] = useState({});
//   const { data, isError, error, isLoading } = useQuery("getPros1Data", () => {
//     getPros1Data(urlReqCompanyName);
//   });

//   useEffect(() => {
//     // if (data) {
//     //   console.log("data머라고오니", data);
//     // }
//     //  else {
//     //   console.log(isError, error);
//     // }
//     // console.log(data);
//     if (data) {
//       setDataState(data);
//     }
//     console.log("dataState", dataState);
//   }, [data]);
//   console.log(data);

//   if (isLoading) {
//     return <div>isLoading...</div>;
//   }

///-----------------------유즈쿼리 사용전 코드-------------------------
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const CompanyPage = () => {
//   const location = useLocation();
//   const urlReqCompanyName = location.state["companyName"];
//   let pros1Result: number = 0;
//   // const [dataList, setDataList] = useState([]);
//   const [pros1State, setPros1State] = useState(0);

//   const getList = () => {
//     axios
//       .get(
//         // 마미껄로 연동한 url
//         `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/${urlReqCompanyName}`
//         // `https://sheet.best/api/sheets/96f08cd2-b20d-452a-8442-517f9353968f/company/naver`

//         // 얘 막힌애임
//         // `https://sheet.best/api/sheets/325137bc-19de-426f-a61c-bae2208f94db/company/${urlReqCompanyName}`
//         // "https://sheet.best/api/sheets/325137bc-19de-426f-a61c-bae2208f94db/company/kakao"
//       )
//       .then((response) => {
//         // response.data : [{'company':kakao, 'comute':'5', 'convenient':'3'...}, {'company':kakao, 'comute':'5', 'convenient':'3'...}]
//         console.log("response.data:", response.data);
//         // wholeData : [{'company':kakao, 'comute':'5', 'convenient':'3'...},{'company':kakao, 'comute':'5', 'convenient':'3'...}]
//         const wholeData = response.data;
//         // setDataList(wholeData);
//         // console.log("dataList에 담겼니? dataList:", dataList);
//         // 장점1의 배열
//         console.log("wholeData:", wholeData);
//         const pros1Array: number[] = [];
//         {
//           // wholeData.map((item: any)
//           wholeData?.map((item: any) => {
//             // dataList배열의 객체를 하나씩 뽑아서(=item),
//             // 각 item의  'pros1'의 value만 pros1Array에 push해준다.
//             // *string배열이었기 때문에, Number로 형변환을 해주기
//             // ['1','1','0']
//             pros1Array.push(Number(item.pros1));
//           });
//         }
//         console.log("pros1Array 잘 들어왔니?", pros1Array);
//         // reduce 함수를 이용해, 장점1 안의 배열값들을 모두 합산해준다.
//         // 이 코드는 구글링해왔음
//         pros1Result = pros1Array.reduce(
//           (total: number, value: number) => (total += value),
//           0
//         );
//         console.log("getList안에서의 pros1Result:", pros1Result);
//         return pros1Result;
//       })
//       .then((result) => {
//         console.log("thethen의 리절트", result);
//         setPros1State(result);
//       });
//   };

//   // <<주의>>
//   // 1)return위에 useEffect쓰라고 하심
//   // 2) set함수는 마지막에 실행된다.
//   // 3) useEffect는 리턴문이 실행되고나서 실행된다.
//   useEffect(() => {
//     getList();
//   }, []);

//   return (
//     <div>
//       <h3>urlRequest:{urlReqCompanyName}</h3>
//       <h3>pros1의 합계 : {pros1State}</h3>
//     </div>
//   );
// };

// export default CompanyPage;
//------------------짜투리코드들---------------

// const queryClient = useQueryClient();
// const { data, isError, error, isLoading } = useQuery("getPros1Data", () => {
//   // axios.get("https://jsonplaceholder.typicode.com/todos/1");
//   getPros1Data(urlReqCompanyName);
// });
//-----------------
// const { data } = useQuery({
//   //      ^? const data: string | undefined
//   queryKey: ["getPros1Data"],
//   queryFn: () => {
//     getPros1Data(urlReqCompanyName).then((response) =>
//       setDataState(response)
//     );
//   },
// });
//------------------------------------
// function getData :TData() {
//   const { data } = useQuery <
//   TData = TQueryFnData,
// >("getPros1Data", getPros1Data(urlReqCompanyName), {
//     select: (data) => data,
//   });
//   return <div>Username: {data}</div>;
// }
//-----------------------------------

// useEffect(() => {
//   console.log("useEffect실행");
//   console.log("data는", data);
//   console.log("넌뜬금없이나오니", dataState);
// }, [dataState]);
// --------------------------------------------

// //------------------
// useEffect(() => {
//   console.log("useEffect의 data", data);
// }, []);

// if (isLoading) {
//   return <div>isLoading...</div>;
// }

// if (error || isError) {
//   console.log("error이거나 isError다.");
// }
//----------------------------------supabase연결됏엇던 코드(아래)---------------
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// // import usePropsQuery from "../hooks/useProsQuery";
// import { supabase } from "../util/supabase";

// const CompanyPage = () => {
//   const location = useLocation();
//   const urlReqCompanyName = location.state["companyName"];

//   // const { sheetData } = usePropsQuery(urlReqCompanyName);

//   const getTable = async () => {
//     const { data, error } = await supabase.from("testTable").select();
//     if (data) {
//       console.log(data);
//     }
//     if (error) {
//       console.log(error);
//     }
//   };
//   console.log("supabase:", supabase);

//   useEffect(() => {
//     getTable();
//   }, []);

//   return (
//     <div>
//       <h3>urlRequest:{urlReqCompanyName}</h3>
//       {/* <h3>pros1의 합계 : {pros1State}</h3> */}
//     </div>
//   );
// };

// export default CompanyPage;
