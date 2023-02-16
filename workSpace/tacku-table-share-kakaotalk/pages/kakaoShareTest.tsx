import React, { useEffect } from "react";

const KakaoShareTest = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  const kakaoShare = () => {
    const { Kakao, location } = window;
    console.log("Kakao", Kakao.Link);
    console.log("location.href", location.href);

    Kakao.Share?.sendScrap({
      requestUrl: location.href,
    });
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          kakaoShare();
        }}
      >
        카카오 공유하기
      </button>
    </div>
  );
};

export default KakaoShareTest;
