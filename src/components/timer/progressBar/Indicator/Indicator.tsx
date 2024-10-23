import { ThemedView } from '@/components/customUI/ThemedView'
import { styles as stylesCommon } from '@/components/timer/progressBar/progressBar.styles'
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
  return (
    <>
      <ThemedView
        style={[
          isSmallProgressBar
            ? styles.progressBarCircleSmall
            : styles.progressBarCircle,
          index + 1 === currentSession && stylesCommon.active,
          index + 1 <= currentSession &&
            index + 1 !== currentSession &&
            stylesCommon.passed
        ]}
      />
    </>
  )
}
