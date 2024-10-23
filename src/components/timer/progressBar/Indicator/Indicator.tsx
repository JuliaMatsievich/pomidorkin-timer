import { ThemedView } from '@/components/customUI/ThemedView'
import { styles as stylesCommon } from '@/components/timer/progressBar/progressBar.styles'
import { useThemeColor } from '@/hooks/useThemeColor'
import { IProgressPointProps } from '@/types/progressBar.types'
import { FC } from 'react'
import { styles } from './indicator.styles'

interface IIndicatorProps
  extends Omit<IProgressPointProps, 'currentBreak' | 'isPlaying'> {}

export const Indicator: FC<IIndicatorProps> = ({
  isSmallProgressBar,
  index,
  currentSession
}) => {
  const theme = useThemeColor()
  return (
    <>
      <ThemedView
        style={[
          isSmallProgressBar
            ? styles(theme).progressBarCircleSmall
            : styles(theme).progressBarCircle,
          index + 1 === currentSession && stylesCommon(theme).active,
          index + 1 <= currentSession &&
            index + 1 !== currentSession &&
            stylesCommon(theme).passed
        ]}
      />
    </>
  )
}
