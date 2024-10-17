export const timeFormatFunc = (remainingTime: number) => {
  let minutes: string | number = Math.floor(remainingTime / 60)
  let seconds: string | number = remainingTime % 60
  seconds = seconds < 10 ? '0' + seconds : seconds
  minutes = minutes < 10 ? '0' + minutes : minutes
  return `${minutes}:${seconds}`
}
