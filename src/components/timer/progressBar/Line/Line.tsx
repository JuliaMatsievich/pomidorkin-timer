import { ThemedView } from '@/components/customUI/ThemedView'
import { styles as stylesCommon } from '@/components/timer/progressBar/progressBar.styles'
import { useThemeColor } from '@/hooks/useThemeColor'
import { IProgressPointProps } from '@/types/progressBar.types'
import { FC } from 'react'
import { styles } from './line.styles'

interface ILineProps
  extends Omit<IProgressPointProps, 'currentBreak' | 'isPlaying'> {}

export const Line: FC<ILineProps> = ({
  isSmallProgressBar,
  currentSession,
  index
}) => {
  const theme = useThemeColor()

  return (
    <>
      <ThemedView
        style={[
          isSmallProgressBar
            ? styles(theme).progressBarLineSmall
            : styles(theme).progressBarLine,
          index + 2 <= currentSession && stylesCommon.passed
        ]}
      />
    </>
  )
}
