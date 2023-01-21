import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '../styles/theme';

const useDarkMode = () => {
  const isDark = useColorScheme() === 'dark';
  const [theme, setTheme] = useState({});

  const getTheme = () => {
    if (isDark) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  };

  // darkTheme,lightTheme 는 theme.js에 객체타입으로 css내용들이 저장되어있음
  useFocusEffect(() => {
    setTheme(getTheme());
  });

  return { isDark, theme };
};

export default useDarkMode;
