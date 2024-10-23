import { ThemedView } from '@/components/customUI/ThemedView'
import { Indicator } from '@/components/timer/progressBar/Indicator/Indicator'
import { Line } from '@/components/timer/progressBar/Line/Line'
import { RestIndicator } from '@/components/timer/progressBar/RestIndicator/RestIndicator'
import { sessionCount } from '@/constants/timer.const'
import { IProgressBarProps } from '@/types/progressBar.types'
import { FC } from 'react'
import { styles } from './progressBar.styles'

export const ProgressBar: FC<IProgressBarProps> = ({
  isPlaying,
  currentSession,
  currentBreak
}) => {
  const isSmallProgressBar = sessionCount > 7
  return (
    <>
      <ThemedView style={styles.progressBarContainer}>
        {Array.from(Array(sessionCount)).map((_, index) => (
          <ThemedView key={`point-${index}`} style={styles.progressBarItem}>
            <Indicator
              isSmallProgressBar={isSmallProgressBar}
              index={index}
              currentSession={currentSession}
            />
            <ThemedView style={styles.progressBarLineItem}>
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
