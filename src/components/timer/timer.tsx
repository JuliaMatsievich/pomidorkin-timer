import { ThemedText } from '@/components/customUI/ThemedText'
import { ThemedView } from '@/components/customUI/ThemedView'
import { CircleTimer } from '@/components/timer/CircleTImer'
import { ProgressBar } from '@/components/timer/progressBar/ProgressBar'
import { ResetButton } from '@/components/timer/timerActions/resetButton/ResetButton'
import { TimerButtons } from '@/components/timer/timerActions/TimerButtons'
import { EnumStatus, EnumStatusImg, ITimerOptions } from '@/types/timer.types'
import { FC, useRef, useState } from 'react'
import { useColorScheme } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'
import { styles } from './timer.styles'

export const Timer: FC = () => {
  const colorScheme = useColorScheme()
  const [timerOptions, setTimerOptions] = useState<ITimerOptions>({
    isPlaying: false,
    status: EnumStatus.WORK,
    statusImg: EnumStatusImg.WORK,
    currentSession: 1,
    currentBreak: 0,
    key: 0
  })

  const confettiRef = useRef<ConfettiCannon>()

  const startConfetti = () => {
    confettiRef.current?.start()
  }

  // useEffect(() => {
  //   if (isAllSessionsCompleted) {
  //     setStatus(EnumStatus.COMPLETED)
  //     setStatusImg(EnumStatusImg.COMPLETED)
  //     setCurrentBreak(0)
  //     confettiRef.current?.start()
  //   }
  // }, [currentSession, currentBreak, confettiRef])

  return (
    <>
      <ThemedView style={styles(colorScheme, timerOptions.isPlaying).container}>
        <ThemedText
          style={styles(colorScheme, timerOptions.isPlaying).timerTitle}>
          Название задачи
        </ThemedText>

        <ResetButton setTimerOptions={setTimerOptions} />

        <CircleTimer
          timerOptions={timerOptions}
          setTimerOptions={setTimerOptions}
          startConfetti={startConfetti}
        />

        <ConfettiCannon
          count={200}
          origin={{ x: -100, y: 0 }}
          autoStart={false}
          ref={confettiRef}
        />

        <ProgressBar
          isPlaying={timerOptions.isPlaying}
          currentSession={timerOptions.currentSession}
          currentBreak={timerOptions.currentBreak}
        />

        <TimerButtons
          timerOptions={timerOptions}
          setTimerOptions={setTimerOptions}
        />
      </ThemedView>
    </>
  )
}
