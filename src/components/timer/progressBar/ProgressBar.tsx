import { ThemedView } from '@/components/customUI/ThemedView'
import { Indicator } from '@/components/timer/progressBar/Indicator/Indicator'
import { Line } from '@/components/timer/progressBar/Line/Line'
import { RestIndicator } from '@/components/timer/progressBar/RestIndicator/RestIndicator'
import { sessionCount } from '@/constants/timer.const'
import { useThemeColor } from '@/hooks/useThemeColor'
import { IProgressBarProps } from '@/types/progressBar.types'
import { FC } from 'react'
import { styles } from './progressBar.styles'

export const ProgressBar: FC<IProgressBarProps> = ({
  currentSession,
  currentBreak
}) => {
  const theme = useThemeColor()
  const isSmallProgressBar = sessionCount > 7
  return (
    <>
      <ThemedView style={styles(theme).progressBarContainer}>
        {Array.from(Array(sessionCount)).map((_, index) => (
          <ThemedView
            key={`point-${index}`}
            style={styles(theme).progressBarItem}>
            <Indicator
              isSmallProgressBar={isSmallProgressBar}
              index={index}
              currentSession={currentSession}
            />
            <ThemedView style={styles(theme).progressBarLineItem}>
              <RestIndicator index={index} currentBreak={currentBreak} />
              {index + 1 !== sessionCount && (
                <Line
                  isSmallProgressBar={isSmallProgressBar}
                  index={index}
                  currentSession={currentSession}
                />
              )}
            </ThemedView>
          </ThemedView>
        ))}
      </ThemedView>
    </>
  )
}
