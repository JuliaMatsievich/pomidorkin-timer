import { Auth } from '@/app/auth'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { useAuth } from '@/hooks/useAuth'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  // const colorScheme = useColorScheme()
  const { user } = useAuth()
  if (!user) {
    return <Auth />
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Tabs
      screenOptions={{
        headerShown: false
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

  // return (

  // <Tabs
  //   screenOptions={{
  //     headerShown: false
  //   }}>
  //   <Tabs.Screen
  //     name="index"
  //     options={{
  //       title: 'Главная',
  //       tabBarIcon: ({ color, focused }) => (
  //         <TabBarIcon
  //           name={focused ? 'home' : 'home-outline'}
  //           color={color}
  //         />
  //       )
  //     }}
  //   />
  //   <Tabs.Screen
  //     name="settings"
  //     options={{
  //       title: 'Настройки',
  //       tabBarIcon: ({ color, focused }) => (
  //         <TabBarIcon
  //           name={focused ? 'settings' : 'settings-outline'}
  //           color={color}
  //         />
  //       )
  //     }}
  //   />
  //   <Tabs.Screen
  //     name="statistics"
  //     options={{
  //       title: 'Статистика',
  //       tabBarIcon: ({ color, focused }) => (
  //         <TabBarIcon
  //           name={focused ? 'stats-chart' : 'stats-chart-outline'}
  //           color={color}
  //         />
  //       )
  //     }}
  //   />
  //   <Tabs.Screen
  //     name="profile"
  //     options={{
  //       title: 'Профиль',
  //       tabBarIcon: ({ color, focused }) => (
  //         <TabBarIcon
  //           name={focused ? 'person' : 'person-outline'}
  //           color={color}
  //         />
  //       )
  //     }}
  //   />
  // </Tabs>
  // )
}
