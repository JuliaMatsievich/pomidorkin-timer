import React from 'react'

export enum EnumStatus {
  REST = 'ОТДЫХАЕМ',
  WORK = 'РАБОТАЕМ',
  COMPLETED = 'ТАК ДЕРЖАТЬ!'
}

export enum EnumStatusImg {
  REST = require('@/assets/images/percent.png'),
  WORK = require('@/assets/images/calculate.png'),
  COMPLETED = require('@/assets/images/delivery.png')
}

export interface ITimerOptions {
  isPlaying: boolean
  status: EnumStatus
  statusImg: EnumStatusImg
  currentSession: number
  currentBreak: number
  key: number
}

export interface ITimerProps {
  timerOptions: ITimerOptions
  setTimerOptions: React.Dispatch<React.SetStateAction<ITimerOptions>>
}
