
//일반 리덕스 예시코드

//액션 벨류

const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// 액션 크리에이터
export const addNumber = (payload) =>{
    return {
        type:ADD_NUMBER,
        payload
    }
}

export const minusNumber = (payload) =>{
    return {
        type:MINUS_NUMBER,
        payload
    }
}

