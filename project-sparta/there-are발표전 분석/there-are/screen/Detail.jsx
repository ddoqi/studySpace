import React, { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';
import styled from '@emotion/native';
import { CustomH2, CustomH3 } from '../components/Common/CustomText';
import * as Animatable from 'react-native-animatable';
import CustomButton from '../components/Common/CustomButton';
import { TouchableOpacity } from 'react-native';
import { onSnapshot, query, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Detail = ({
  navigation: { navigate, goBack },
  route: {
    params: { id },
  },
}) => {
  // completed는 나중에 확언 리스트의 개수만큼 카운트수가 저장되도록 세팅
  const [toBeDetail, setToBeDetail] = useState({});
  const [completed, setCompleted] = useState(0);
  const [writtenDates, setWrittenDates] = useState();
  const [isIncludeDate, setIsIncludeDate] = useState(false);

  const getToBeDetail = () => {
    const q = query(doc(db, 'to-be-list', id));
    // console.log('id', id); //해당게시물 아이디네
    onSnapshot(q, (snapshot) => {
      const newToBeDetail = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      console.log(newToBeDetail); //newToBeDetail은 해당 id의 게시물을 파베에서 뽑았어
      setToBeDetail(newToBeDetail); //toBeDetail은 한마디로 그 게시물id의 데이터야
      // "writtenDate": [1673493149281, 1673574703098]}
      // writtenDate의 개수를 completed에 넣어준거지
      setCompleted(newToBeDetail?.writtenDate.length);
      // 파베에 해당 게시물의 데이터가 있으면?
      // 그 newToBeDetail의 writtenDate를 하나씩 뽑을건데, 뽑아서 그걸
      // new Date를 이용해서
      const newWrittenDates = [];
      //newToBeDetail.writtenDate는 [1673493149281, 1673574703098] 이렇게 들어있음
      console.log('newToBeDetail.writtenDate', newToBeDetail.writtenDate);
      //--------------------------------
      newToBeDetail?.writtenDate.forEach((date) => {
        // date는  1673574703098임
        const toBeDate = new Date(date);
        //toBeDate: 2023-01-13T01:51:43.098Z
        console.log('date:', date);
        console.log('toBeDate:', toBeDate);
        const newToBeDate = toBeDate.toLocaleDateString();
        // newToBeDate: 2023. 1. 13.
        console.log('newToBeDate', newToBeDate);
        //위에 만들어놨던 newWrittenDates애다가 2023. 1. 13. 요 형태로 푸쉬를 해줌
        newWrittenDates.push(newToBeDate);
      });
      //그 newWrittenDates를 writtenDates라는 state에 셋팅해주기
      //
      setWrittenDates(newWrittenDates);
      console.log('writtenDates', writtenDates);
      // writtenDates: ["2023. 1. 12.", "2023. 1. 13."]
    });
  };

  useEffect(() => {
    getToBeDetail();
  }, []);

  // 이 로직은 투데이가 들어있으면 버튼 비활성화 시키려는부분
  // 오늘 날짜를
  const todayMilliSecond = new Date();
  // todayMilliSecond: 2023-01-13T01:59:23.790Z
  console.log('todayMilliSecond', todayMilliSecond);
  const today = todayMilliSecond.toLocaleDateString();
  console.log('today', today);
  // today: 2023. 1. 13.

  useEffect(() => {
    //writtenDates: ["2023. 1. 12.", "2023. 1. 13."]
    //setIsIncludeDate는 불린형타입이다.
    writtenDates?.includes(today)
      ? setIsIncludeDate(true)
      : setIsIncludeDate(false);
  }, [writtenDates]);
  //writtenDates가 바뀔때마다 작동되도록 디펜던시어레이에 넣어주기

  const handleAddClick = () => {
    navigate('Stacks', {
      screen: 'AddToBe',
      params: { toBeDetail },
    });
  };

  const DDay = 31 - completed;

  return (
    <DetailContainer>
      <BackButtonContainer onPress={goBack}>
        <CustomButton fontSize="14px" width="80px" height="34px">
          뒤로가기
        </CustomButton>
      </BackButtonContainer>
      <TopStatusView>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount={'infinite'}
          direction="alternate"
        >
          <Progress.Bar
            progress={completed / 31}
            width={330}
            height={30}
            color={'#BC2649'}
            borderRadius={300}
          />
        </Animatable.View>
        <DayCounter>{completed} / 31</DayCounter>
        <DDayTitle>
          {DDay < 1 ? '🎊 목표 달성! 🎊' : `성공까지 D-day ${DDay}`}
        </DDayTitle>
      </TopStatusView>

      <DetailListScroll>
        <ItemTitle>🏃 내 인생은 달라진다 🏃</ItemTitle>
        {toBeDetail?.writtenDate?.map((item) => {
          const toBeDate = new Date(item);
          const newToBeDate = toBeDate
            .toLocaleDateString()
            .slice(2)
            .replace(/ /g, '');
          return (
            <DetailListText>
              {newToBeDate} 나는 {toBeDetail.toBeTitle}다.
            </DetailListText>
          );
        })}
      </DetailListScroll>
{/* isIncludeDate가 True이면 잠기는 것 */}
      <TouchableOpacity onPress={handleAddClick} disabled={isIncludeDate}>
        <CustomButton disable={isIncludeDate}>추가하기</CustomButton>
      </TouchableOpacity>
    </DetailContainer>
  );
};

export default Detail;

const BackButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding-left: 30px;
`;

const DetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TopStatusView = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const DetailListScroll = styled.ScrollView`
  margin-top: 15px;
`;

const DetailListText = styled(CustomH3)`
  margin: 10px;
`;

const DayCounter = styled(CustomH3)`
  padding-top: 15px;
  font-weight: 700;
`;

const DDayTitle = styled(CustomH2)`
  color: ${(props) => props.theme.color.brand100};
  margin-top: 5px;
  font-weight: 900;
`;

const ItemTitle = styled(CustomH2)`
  margin-bottom: 10px;
  font-weight: 700;
  text-decoration: underline;
`;
