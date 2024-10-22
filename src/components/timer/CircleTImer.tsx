import { ThemedText } from '@/components/customUI/ThemedText'
import { ThemedView } from '@/components/customUI/ThemedView'
import { styles } from '@/components/timer/timer.styles'
import { ColorsApp } from '@/constants/ColorsApp'
import {
  breakDuration,
  flowDuration,
  sessionCount
} from '@/constants/timer.const'
import { EnumStatus, EnumStatusImg, ITimerProps } from '@/types/timer.types'
import { timeFormatFunc } from '@/utils/timeFormatFunc'
import React, { FC } from 'react'
import { Image, useColorScheme } from 'react-native'
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
  const colorScheme = useColorScheme()
  const isAllSessionsCompleted = currentSession - 1 >= sessionCount
  return (
    <>
      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        duration={status === EnumStatus.REST ? breakDuration : flowDuration}
        trailColor={ColorsApp.colorProgress as ColorFormat}
        colors={[`#fe6927`, `#bb6c40`]}
        colorsTime={[
          status === EnumStatus.REST ? breakDuration : flowDuration,
          0
        ]}
        size={300}
        strokeWidth={15}
        onComplete={() => {
          setTimerOptions((prev) => ({ ...prev, isPlaying: false }))

          if (isAllSessionsCompleted) {
            setTimerOptions((prev) => {
              return {
                ...prev,
                status: EnumStatus.COMPLETED,
                statusImg: EnumStatusImg.COMPLETED,
                currentBreak: 0
              }
            })
            startConfetti()
          }
          setTimerOptions((prev) => ({ ...prev, key: prev.key + 1 }))

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
        }}
        // onUpdate={(remainingTime) => {
        //   if (remainingTime) {
        //     setStatus(EnumStatus.WORK)
        //     setStatusImg(EnumStatusImg.WORK)
        //   }
        // }}
      >
        {({ remainingTime }) => {
          return (
            <>
              <ThemedText type="time">
                {timeFormatFunc(remainingTime)}
              </ThemedText>
              <ThemedView
                style={styles(colorScheme, isPlaying).timerStatusContainer}>
                <Image
                  style={styles(colorScheme, isPlaying).timerImage}
                  source={statusImg}
                />
                <ThemedText
                  type="subtitle"
                  style={styles(colorScheme, isPlaying).timerSubTitle}>
                  {status}
                </ThemedText>
              </ThemedView>
            </>
          )
        }}
      </CountdownCircleTimer>
    </>
  )
}
