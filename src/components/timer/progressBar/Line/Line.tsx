import { ThemedView } from '@/components/customUI/ThemedView'
import { styles as stylesCommon } from '@/components/timer/progressBar/progressBar.styles'
import { FC } from 'react'
import { useColorScheme } from 'react-native'
import { styles } from './line.styles'

interface ILineProps {
  isSmallProgressBar: boolean
  index: number
  currentSession: number
  isPlaying: boolean
}

export const Line: FC<ILineProps> = ({
  isSmallProgressBar,
  currentSession,
  index,
  isPlaying
}) => {
  const colorScheme = useColorScheme()

  return (
    <>
      <ThemedView
        style={[
          isSmallProgressBar
            ? styles.progressBarLineSmall
            : styles.progressBarLine,
          index + 2 <= currentSession &&
            stylesCommon(colorScheme, isPlaying).passed
        ]}
      />
    </>
  )
}
