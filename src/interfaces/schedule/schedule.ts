interface Schedule {
    start: Date,
    end: Date,
    date: string
}

interface ScheduleState {
   schedules: Schedule[]
}

export default ScheduleState;