import { ThemedView } from '@/components/customUI/ThemedView'
import { Arrow } from '@/components/timer/timerActions/arrow/Arrow'
import { PlayButton } from '@/components/timer/timerActions/playButton/PlayButton'
import { ITimerProps } from '@/types/timer.types'
import React, { FC } from 'react'
import { styles } from './timerButtons.styles'

export const TimerButtons: FC<ITimerProps> = ({
  timerOptions: { isPlaying, currentSession },
  setTimerOptions
}) => {
  return (
    <>
      <ThemedView style={styles.timerBtnContainer}>
        <Arrow
          direction={'left'}
          currentSession={currentSession}
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
          setTimerOptions={setTimerOptions}
        />
      </ThemedView>
    </>
  )
}
