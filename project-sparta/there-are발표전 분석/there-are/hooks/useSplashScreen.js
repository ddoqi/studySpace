const { loadAsync } = require('expo-font');
const { useEffect, useCallback, useState } = require('react');
import * as SplashScreen from 'expo-splash-screen';

//hideAsync가 오기전까지 SplashScreen유지
SplashScreen.preventAutoHideAsync();
//Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.

const useSplashScreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // hideAsync : 스플래쉬 스크린이 사라져랏!
      // SplashScreen.hideAsync는 appIsReady가 될때까지 기다려잉
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    onLayoutRootView();
  }, [appIsReady]);

  useEffect(() => {
    const prepare = async () => {
      // 폰트가 모두 다운이 되고 나서야, setAppIsReady를 true로 바꿔주면
      // App.js에서
      await loadAsync({
        'NotoSansKr-Bold': require('../assets/fonts/NotoSansKR-Bold.otf'),
        'NotoSansKr-Medium': require('../assets/fonts/NotoSansKR-Medium.otf'),
        'NotoSansKr-Regular': require('../assets/fonts/NotoSansKR-Regular.otf'),
        'YiSunShin-Dotum-B': require('../assets/fonts/YiSunShin-Dotum-B.otf'),
      });
      setAppIsReady(true);
    };
    prepare();
  }, []);

  return { appIsReady };
};

export default useSplashScreen;
