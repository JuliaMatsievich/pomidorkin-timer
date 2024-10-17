// import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedView } from '@/components/customUI/ThemedView'
import { Timer } from '@/components/timer/timer'
import { StyleSheet } from 'react-native'

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Timer />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
