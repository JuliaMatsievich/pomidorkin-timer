import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { useAuth } from '@/hooks/useAuth'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  const { user } = useAuth()
  // if (!user) {
  //   return <Auth />
  // }
  const theme = useThemeColor()
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: ColorsAppTheme[theme].background,
          borderWidth: 0
        },
        headerStyle: {
          borderWidth: 0
        },
        headerTitleStyle: {
          fontSize: 26
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Таймер',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'timer' : 'timer-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Настройки',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Статистика',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  )
}
