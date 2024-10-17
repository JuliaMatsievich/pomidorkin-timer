import { ButtonCustom } from '@/components/customUI/ButtonCustom'
import { ThemedText } from '@/components/customUI/ThemedText'
import { ThemedView } from '@/components/customUI/ThemedView'
import { useAuth } from '@/hooks/useAuth'
import { StyleSheet } from 'react-native'

export default function Profile() {
  const { user, setUser } = useAuth()

  const handleSignOut = () => {
    setUser(null)
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle" style={styles.subtitle}>
        Добро пожаловать, {user?.username}
      </ThemedText>
      <ButtonCustom type="primaryBtn" title="Выйти" onPress={handleSignOut} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center'
  },
  subtitle: {
    marginBottom: 20
  }
})
