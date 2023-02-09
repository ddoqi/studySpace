import { searchMovieTitle } from "@/api/tmdb";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [searchWord, setSearchWord] = useState("");
  const [titleArr, setTitleArr] = useState([]);
  const [targetTitle, setTargetTitle] = useState("");

  // searchWord가 "" 값이 아닐때만 useQuery를 작동시킬수 있는 방법이 없을까...
  const { data, refetch } = useQuery(["tmdb"], () => {
    return searchMovieTitle(searchWord);
  });

  // 글자가 바뀔때마다 refetch를 해서 서버데이터를 가져온다.
  // refetch가 되면 data가 업데이트가 될 것이다.
  // 데이터가 업데이트가 될 때마다 state도 업데이트가 되게 만들어주고 싶다.
  useEffect(() => {
    if (searchWord) {
      refetch();
      // 다시 input창을 지우면, 클릭한 영화제목에서 사라지도록
      setTargetTitle("");
      // input창을 지우면 데이터도 다시 없어지도록
      setTitleArr([]);
    }
  }, [refetch, searchWord]);

  useEffect(() => {
    if (data) {
      setTitleArr(data.results);
    }
  }, [data]);

  const onChange = (e) => {
    setSearchWord(e.target.value);
  };

  const movieSelect = (e) => {
    console.log(e.target.innerText);
    setTargetTitle(e.target.innerText);
  };

  return (
    <>
      <input type="text" onChange={onChange} placeholder="영화 제목 입력" />
      <div>
        <br />
        👇 영화를 선택해주세용ㅇㅅㅇ👇
        <br />
        <br />
        {titleArr?.map((item) => (
          <button type="button" onClick={movieSelect}>
            {item.title}
          </button>
        ))}
      </div>
      <br />
      <div>
        <b>클릭한 영화제목:</b>
        {targetTitle}
      </div>
    </>
  );
};

export default TestPage;

// ---------------------
// import { searchMovieTitle } from "@/api/tmdb";
// import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";

// const TestPage = () => {
//   const [searchWord, setSearchWord] = useState("");
//   const [titleArr, setTitleArr] = useState([]);

//   const { data, refetch } = useQuery(["tmdb"], () => {
//     return searchMovieTitle(searchWord);
//   });

//   // 글자가 바뀔때마다 refetch를 해서 서버데이터를 가져온다.
//   // refetch가 되면 data가 업데이트가 될 것이다.
//   // 데이터가 업데이트가 될 때마다 state도 업데이트가 되게 만들어주고 싶다.
//   useEffect(() => {
//     if (searchWord) {
//       refetch();
//     }
//   }, [refetch, searchWord]);

//   useEffect(() => {
//     if (data) {
//       setTitleArr(data.results);
//     }
//   }, [data]);

//   const onChange = (e) => {
//     setSearchWord(e.target.value);
//   };

//   return (
//     <>
//       <input type="text" onChange={onChange} />
//       <div>
//         select movie title:
//         {titleArr?.map((item) => (
//           <div>{item.title}</div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default TestPage;
