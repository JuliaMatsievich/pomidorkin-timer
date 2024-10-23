import { TimerInfo } from '@/components/timer/circleTimer/TimerInfo'
import { ColorsAppTheme } from '@/constants/ColorsAppTheme.const'
import { breakDuration, flowDuration } from '@/constants/timer.const'
import { useEffectTimer } from '@/hooks/useEffectTimer'
import { useThemeColor } from '@/hooks/useThemeColor'
import { EnumStatus, EnumStatusImg, ITimerProps } from '@/types/timer.types'
import React, { FC } from 'react'
import {
  ColorFormat,
  CountdownCircleTimer
} from 'react-native-countdown-circle-timer'

interface ICircleTimerProps
  extends Pick<ITimerProps, 'timerOptions' | 'setTimerOptions'> {
  startConfetti: () => void
}

export const CircleTimer: FC<ICircleTimerProps> = ({
  timerOptions: { key, isPlaying, status, statusImg, currentSession },
  setTimerOptions,
  startConfetti
}) => {
  const theme = useThemeColor()
  useEffectTimer({ setTimerOptions, startConfetti, currentSession, status })
  return (
    <>
      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        duration={status === EnumStatus.REST ? breakDuration : flowDuration}
        trailColor={ColorsAppTheme[theme].trailColor as ColorFormat}
        colors={[`#fe6927`, `#bb6c40`]}
        colorsTime={[
          status === EnumStatus.REST ? breakDuration : flowDuration,
          0
        ]}
        size={300}
        strokeWidth={15}
        onComplete={() => {
          setTimerOptions((prev) => ({
            ...prev,
            isPlaying: false,
            key: prev.key + 1
          }))
          if (status === EnumStatus.REST && currentSession % 2 === 0) {
            setTimerOptions((prev) => ({
              ...prev,
              status: EnumStatus.WORK,
              statusImg: EnumStatusImg.WORK,
              currentSession: currentSession + 1
            }))
          }

          if (currentSession % 2 === 0 && status !== EnumStatus.REST) {
            setTimerOptions((prev) => ({
              ...prev,
              status: EnumStatus.REST,
              statusImg: EnumStatusImg.REST,
              currentBreak: prev.currentBreak + 1
            }))
          }

          if (status === EnumStatus.WORK && currentSession % 2 !== 0) {
            setTimerOptions((prev) => ({
              ...prev,
              currentSession: prev.currentSession + 1
            }))
          }
        }}>
        {({ remainingTime }) => {
          return (
            <TimerInfo
              remainingTime={remainingTime}
              status={status}
              statusImg={statusImg}
            />
          )
        }}
      </CountdownCircleTimer>
    </>
  )
}
