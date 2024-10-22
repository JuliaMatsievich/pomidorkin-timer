import { ThemedView } from '@/components/customUI/ThemedView'
import { styles as stylesCommon } from '@/components/timer/progressBar/progressBar.styles'
import { IProgressPointProps } from '@/types/progressBar.types'
import { FC } from 'react'
import { useColorScheme } from 'react-native'
import { styles } from './indicator.styles'

interface IIndicatorProps extends Omit<IProgressPointProps, 'currentBreak'> {}

export const Indicator: FC<IIndicatorProps> = ({
  isSmallProgressBar,
  isPlaying,
  index,
  currentSession
}) => {
  const colorScheme = useColorScheme()
  return (
    <>
      <ThemedView
        style={[
          isSmallProgressBar
            ? styles(colorScheme, isPlaying).progressBarCircleSmall
            : styles(colorScheme, isPlaying).progressBarCircle,
          index + 1 === currentSession &&
            stylesCommon(colorScheme, isPlaying).active,
          index + 1 <= currentSession &&
            index + 1 !== currentSession &&
            stylesCommon(colorScheme, isPlaying).passed
        ]}
      />
    </>
  )
}
