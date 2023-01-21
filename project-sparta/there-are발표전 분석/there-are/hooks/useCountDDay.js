import React from 'react';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import useGetToBeList from '../hooks/useGetToBeList';
import { useFocusEffect } from '@react-navigation/native';

const useCountDDay = () => {
  const auth = getAuth();
  // toBeLength : 파이어베이스에서 뽑아온 리스트
  const { toBeLength } = useGetToBeList();
  // user를 객체로 만들었음
  const [user, setUser] = useState({});
  // 유저가 가입한 날짜 뽑으려고 하는듯
  const [userCreatedDay, setUserCreatedDay] = useState();
  useFocusEffect(() => {
    if (auth.currentUser) {
      // 먼저 user를 auth.currentUser에서 뽑아오고
      setUser(auth.currentUser);
      // 디데이를 카운트하는 함수를 실행한것
      getUserCreatedDay();
    }
  });

  const getUserCreatedDay = async () => {
    // user의 정보는 아래 유즈포커스이펙트에서 auth.currentUser에서 셋이 될거고
    // user에는 auth.currentUser의 데이터가 들어있고
    // 그 정보를 stringfy로 만들어서 가져오고
    // 그걸 다시 parse로 만든다음 그 안의 createdAt을 불러온다.
    const userCreatedAt = await JSON.parse(JSON.stringify(user)).createdAt;
    // createdAt은 1679883 이런 형태로 되어있는데
    // 이게 string타입으로 되어있다.
    // +를 붙이면 number가 된다.
    // new Date에 number타입으로 넣어주면
    // console.log('userCreatedAt의 타입?', typeof +userCreatedAt);
    const newUserCreatedAt = new Date(+userCreatedAt);
    // 2023-01-12T03:12:10.313Z 이런식으로 뱉어낸다.
    // console.log('newUserCreatedAt:', typeof newUserCreatedAt);
    // 결론 ===> newUserCreatedAt : 유저의 가입일자를 뽑아낸거임
    // newUserCreatedAt가 object 타입이넹

    // ---------------------------
    // 오늘 날짜를 뽑아내기 위한 작업
    const nowDate = new Date();
    //nowDate가 2023-01-13T00:37:54.696Z 를 string 타입으로 뱉어냄
    console.log('nowDate:', nowDate);
    const distance = +nowDate.getTime() - newUserCreatedAt.getTime();
    // getTime을 쓰면 밀리세컨드초로 바꿔준대
    // 둘다 밀리세컨드초로 바꿔주고, 그 차이 숫자가 distance임
    console.log('distance:', distance);
    // distance: 77239101
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    console.log('day:', typeof +day);
    setUserCreatedDay(+day + 1);
  };

  return { toBeLength, userCreatedDay };
};

export default useCountDDay;
