import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import Root from './navigation/Root';

import { darkTheme, lightTheme } from './styles/theme';
import useSplashScreen from './hooks/useSplashScreen';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  // useColorScheme : 유저의 핸폰상태가 dark라면 true를 토해낼것
  const isDark = useColorScheme() === 'dark';
  console.log('isDark?', isDark);
  // appIsReady가 처음에 받아지는데,
  // 폰트가 모두 다운이 안되었다면 appIsReady는 false일테고
  // 정상적으로 loadAsync가 완료가 되었다면, appIsReady는 true가 되어있을거임
  const { appIsReady } = useSplashScreen();
  const queryClient = new QueryClient();

  // appIsReady가 false면 요 if문에서 걸러져버림
  // 한마디로 아래 것들을 실행을 못시키는거지
  // 폰트를 받는게 무조건 먼저되도록 로직을 짜신거임
  if (!appIsReady) {
    return null;
  }

  return (
    // App.js에서의 theme는
    // 프로바이더 자식들의 styled 안에 Props로 theme로 넘겨준 애들임
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
