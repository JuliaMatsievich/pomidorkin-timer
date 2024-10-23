import { ThemedView } from '@/components/customUI/ThemedView'
import { styles as stylesCommon } from '@/components/timer/progressBar/progressBar.styles'
import { IProgressPointProps } from '@/types/progressBar.types'
import { FC } from 'react'
import { useColorScheme } from 'react-native'
import { styles } from './line.styles'

interface ILineProps
  extends Omit<IProgressPointProps, 'currentBreak' | 'isPlaying'> {}

export const Line: FC<ILineProps> = ({
  isSmallProgressBar,
  currentSession,
  index
}) => {
  const colorScheme = useColorScheme()

  return (
    <>
      <ThemedView
        style={[
          isSmallProgressBar
            ? styles.progressBarLineSmall
            : styles.progressBarLine,
          index + 2 <= currentSession && stylesCommon.passed
        ]}
      />
    </>
  )
}
