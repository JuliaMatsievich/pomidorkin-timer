// import { ThemedText } from '@/components/Custom/ThemedText'
import { ThemedView } from '@/components/Custom/ThemedView'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/hooks/useAuth'
import { router } from 'expo-router'
import { Button, StyleSheet, useColorScheme } from 'react-native'

export const Auth = () => {
  const { setUser } = useAuth()
  const colorScheme = useColorScheme()

  return (
    <ThemedView style={styles.container}>
      <Button
        title="Войти"
        color={
          colorScheme === 'dark' ? Colors.primaryDark : Colors.primaryLight
        }
        onPress={() => {
          setUser({
            _id: 'string',
            name: 'string',
            email: 'string'
          })
          router.replace('/')
        }}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
