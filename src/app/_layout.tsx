import { ColorsApp } from '@/constants/ColorsApp'
import { useAuth } from '@/hooks/useAuth'
import { AuthProvider } from '@/providers/AuthProvider'
import DarkTheme from '@/themes/DarkTheme'
import LightTheme from '@/themes/LightTheme'
import { ThemeProvider } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { useColorScheme } from 'react-native'

// Prevent the splash screen from auto-hiding before asset loading is complete.
const ignore = SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  const { user } = useAuth()

  const queryClient = new QueryClient()

  useEffect(() => {
    if (loaded) {
      const ignore = SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : LightTheme}>
          <Stack
            screenOptions={{
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}>
            <Stack.Screen
              name="(app)"
              options={{
                headerShown: true,
                headerTitle: 'Помидоркин Таймер',
                headerTitleAlign: 'center',
                statusBarColor: ColorsApp.black,
                navigationBarColor: ColorsApp.black
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
