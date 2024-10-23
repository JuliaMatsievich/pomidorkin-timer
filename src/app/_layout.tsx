import { useAuth } from '@/hooks/useAuth'
import { useThemeColor } from '@/hooks/useThemeColor'
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
import { Platform, SafeAreaView, useColorScheme } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Prevent the splash screen from auto-hiding before asset loading is complete.
const ignore = SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const { top, bottom } = useSafeAreaInsets()
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
          <SafeAreaView
            style={{
              flex: 1,
              paddingTop: Platform.OS === 'ios' ? top / 5 : top * 1.6,
              paddingBottom: Platform.OS === 'ios' ? bottom * 5 : bottom
            }}>
            <Stack
              screenOptions={{
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}>
              <Stack.Screen
                name="(app)"
                options={{
                  headerShown: false,
                  statusBarColor: useThemeColor('statusBarColor'),
                  statusBarStyle: colorScheme === 'dark' ? 'light' : 'dark',
                  navigationBarColor: useThemeColor('navigationBarColor')
                }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
          </SafeAreaView>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
