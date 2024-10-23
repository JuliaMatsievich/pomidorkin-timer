import { ThemedText } from '@/components/customUI/ThemedText'
import { ThemedView } from '@/components/customUI/ThemedView'
import { styles } from '@/components/timer/circleTimer/circleTimer.styles'
import { flowDuration } from '@/constants/timer.const'
import { EnumStatus, EnumStatusImg } from '@/types/timer.types'
import { timeFormatFunc } from '@/utils/timeFormatFunc'
import React, { FC } from 'react'
import { Image } from 'react-native'

interface ITimerInfoProps {
  remainingTime: number
  status: EnumStatus
  statusImg: EnumStatusImg
}

export const TimerInfo: FC<ITimerInfoProps> = ({
  remainingTime,
  status,
  statusImg
}) => {
  return (
    <>
      <ThemedText type="time">
        {status === EnumStatus.REST
          ? timeFormatFunc(flowDuration)
          : timeFormatFunc(remainingTime)}
      </ThemedText>
      <ThemedView style={styles.timerStatusContainer}>
        <Image style={styles.timerImage} source={statusImg} />
        <ThemedText type="subtitle" style={styles.timerSubTitle}>
          {status}
        </ThemedText>
      </ThemedView>
    </>
  )
}
