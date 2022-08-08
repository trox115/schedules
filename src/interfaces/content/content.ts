
interface TimeInterval {
  id: number,
  label: string,
  price: number,
  value: number
}

interface AvailableTime {
  id: number,
  name: string,
  from: string,
  to: string
}

interface ContentState {
  timeIntervals: TimeInterval[]
  availableTimes: AvailableTime[]
}

export default ContentState;