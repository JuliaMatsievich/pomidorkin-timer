import { ThemedView } from '@/components/customUI/ThemedView'
import { Indicator } from '@/components/timer/progressBar/Indicator/Indicator'
import { Line } from '@/components/timer/progressBar/Line/Line'
import { RestIndicator } from '@/components/timer/progressBar/RestIndicator/RestIndicator'
import { sessionCount } from '@/constants/timer.const'
import { IProgressBarProps } from '@/types/progressBar.types'
import { FC } from 'react'
import { useColorScheme } from 'react-native'
import { styles } from './progressBar.styles'

export const ProgressBar: FC<IProgressBarProps> = ({
  isPlaying,
  currentSession,
  currentBreak
}) => {
  const colorScheme = useColorScheme()
  const isSmallProgressBar = sessionCount > 7
  return (
    <>
      <ThemedView style={styles(colorScheme, isPlaying).progressBarContainer}>
        {Array.from(Array(sessionCount)).map((_, index) => (
          <ThemedView
            key={`point-${index}`}
            style={styles(colorScheme, isPlaying).progressBarItem}>
            <Indicator
              isSmallProgressBar={isSmallProgressBar}
              index={index}
              isPlaying={isPlaying}
              currentSession={currentSession}
            />
            <ThemedView
              style={styles(colorScheme, isPlaying).progressBarLineItem}>
              <RestIndicator index={index} currentBreak={currentBreak} />
              {index + 1 !== sessionCount && (
                <Line
                  isSmallProgressBar={isSmallProgressBar}
                  index={index}
                  currentSession={currentSession}
                  isPlaying={isPlaying}
                />
              )}
            </ThemedView>
          </ThemedView>
        ))}
      </ThemedView>
    </>
  )
}
