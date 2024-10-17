import { ThemedText } from '@/components/customUI/ThemedText'
import { ThemedView } from '@/components/customUI/ThemedView'
import { ColorsApp } from '@/constants/ColorsApp'
import { EnumStatus, EnumStatusImg } from '@/types/timer.types'
import { timeFormatFunc } from '@/utils/timeFormatFunc'
import { Foundation } from '@expo/vector-icons'
import { FC, useEffect, useState } from 'react'
import { Image, Pressable, useColorScheme } from 'react-native'
import {
  ColorFormat,
  CountdownCircleTimer
} from 'react-native-countdown-circle-timer'
import { styles } from './timer.styles'

export const Timer: FC = () => {
  const colorScheme = useColorScheme()
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [status, setStatus] = useState<EnumStatus>(EnumStatus.WORK)
  const [statusImg, setStatusImg] = useState<EnumStatusImg>(EnumStatusImg.WORK)
  const [currentSession, setCurrentSession] = useState(1)
  const [key, setKey] = useState(0)
  const colors:
    | ColorFormat
    | ({ 0: `#${string}` } & { 1: `#${string}` } & `#${string}`[]) = [
    `#${ColorsApp.colorTimer1}`,
    `#${ColorsApp.colorTimer2}`,
    '#dc5e15',
    '#812e00'
  ]

  const flowDuration = 1 * 10
  const sessionCount = 7
  const breakDuration = 1 * 60

  useEffect(() => {
    if (isPlaying && status === EnumStatus.REST) {
      setKey((prev) => prev + 1)
    }
  }, [isPlaying])

  return (
    <>
      <ThemedView style={styles(colorScheme, isPlaying).container}>
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={flowDuration}
          trailColor={ColorsApp.colorProgress as ColorFormat}
          colors={colors}
          colorsTime={[flowDuration, 0]}
          size={300}
          strokeWidth={15}
          onComplete={() => {
            setIsPlaying(false)
            setCurrentSession((prev) => prev + 1)
            setStatus(EnumStatus.REST)
            setStatusImg(EnumStatusImg.REST)
            if (currentSession === sessionCount) {
              //TODO Animation congrats
              setStatus(EnumStatus.COMPLETED)
              setStatusImg(EnumStatusImg.COMPLETED)
            }
          }}
          onUpdate={(remainingTime) => {
            if (remainingTime) {
              setStatus(EnumStatus.WORK)
              setStatusImg(EnumStatusImg.WORK)
            }
          }}>
          {({ remainingTime }) => {
            return (
              <>
                <ThemedText type="time">
                  {status === EnumStatus.REST
                    ? timeFormatFunc(flowDuration)
                    : timeFormatFunc(remainingTime)}
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

        <ThemedView style={styles(colorScheme, isPlaying).progressBarContainer}>
          {Array.from(Array(sessionCount)).map((_, index) => (
            <ThemedView
              key={`point-${index}`}
              style={styles(colorScheme, isPlaying).progressBarItem}>
              <ThemedView
                style={[
                  styles(colorScheme, isPlaying).progressBarCircle,
                  index + 1 === currentSession &&
                    styles(colorScheme, isPlaying).active,
                  index + 1 <= currentSession &&
                    index + 1 !== currentSession &&
                    styles(colorScheme, isPlaying).passed
                ]}
              />
              {index + 1 !== sessionCount && (
                <ThemedView
                  style={[
                    styles(colorScheme, isPlaying).progressBarLine,
                    index + 2 <= currentSession &&
                      styles(colorScheme, isPlaying).passed
                  ]}
                />
              )}
            </ThemedView>
          ))}
        </ThemedView>

        <Pressable
          style={styles(colorScheme, isPlaying).timerButton}
          onPress={() => {
            setIsPlaying(!isPlaying)
          }}>
          <Foundation
            name={isPlaying ? 'pause' : 'play'}
            size={44}
            color={ColorsApp.white}
          />
        </Pressable>
      </ThemedView>
    </>
  )
}
