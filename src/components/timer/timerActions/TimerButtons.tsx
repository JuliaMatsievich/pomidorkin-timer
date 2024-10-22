import { ThemedView } from '@/components/customUI/ThemedView'
import { Arrow } from '@/components/timer/timerActions/arrow/Arrow'
import { PlayButton } from '@/components/timer/timerActions/playButton/PlayButton'
import { ITimerProps } from '@/types/timer.types'
import React, { FC } from 'react'
import { useColorScheme } from 'react-native'
import { styles } from './timerButtons.styles'

export const TimerButtons: FC<ITimerProps> = ({
  timerOptions: { isPlaying, currentSession },
  setTimerOptions
}) => {
  const colorScheme = useColorScheme()

  return (
    <>
      <ThemedView style={styles(colorScheme, isPlaying).timerBtnContainer}>
        <Arrow
          direction={'left'}
          currentSession={currentSession}
          isPlaying={isPlaying}
          setTimerOptions={setTimerOptions}
        />
        <PlayButton
          isPlaying={isPlaying}
          currentSession={currentSession}
          setTimerOptions={setTimerOptions}
        />
        <Arrow
          direction={'right'}
          currentSession={currentSession}
          isPlaying={isPlaying}
          setTimerOptions={setTimerOptions}
        />
      </ThemedView>
    </>
  )
}
