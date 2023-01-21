import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screen/Main';
import MyPage from '../screen/MyPage';
import { Feather, Ionicons } from '@expo/vector-icons';
import useDarkMode from '../hooks/useDarkMode';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  // 이 theme는 다크,라이트인지에 따라서 darkTheme,lightTheme가 담겨있음
  const { theme } = useDarkMode();
  return (
    // 여기서theme는 darkTheme,lightTheme 둘 중 하나가 들어있음
    // App.js에서 프로바이더가 내려주는 theme랑 이름만 같을뿐임
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.color?.background,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.color?.background,
        },
        tabBarLabelStyle: { color: theme.color?.mono100 },
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerTitleAlign: 'left',
          tabBarLabel: '메인',
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: (color, size) => {
            return (
              <Feather name="menu" size={24} color={theme.color?.mono100} />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerTitleAlign: 'left',
          tabBarLabel: '내정보',
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: (color, size) => {
            return (
              <Ionicons name="people" size={24} color={theme.color?.mono100} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
