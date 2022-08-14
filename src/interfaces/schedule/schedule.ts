interface Schedule {
    start: Date,
    end: Date
}

interface ScheduleState {
   schedules: Schedule[]
}

export default ScheduleState;