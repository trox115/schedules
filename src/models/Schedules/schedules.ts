import { createModel } from "@rematch/core"
import { RootModel } from ".."
import { get, post } from "../../Api/api";
import { apiUrls, replaceUrls } from "../../Api/apiUrls";
import ScheduleState from "../../interfaces/schedule/schedule";

export default createModel<RootModel>()({
  state: {
    schedules: []
  } as ScheduleState,

  reducers: {
    setSchedule(state: ScheduleState, payload){
      return { ...state, schedules: payload }
    }
  },

  effects: (dispatch) => ({

    async getSchedules():Promise<void>{
      try {
        dispatch.schedules.setSchedule([{ start: Date.now(), end: Date.now() }])
      } catch (error) {
        //TODO: handle error
      }
    },

    async postSchedule({name, email, message, date, time, duration}):Promise<any>{
      const response = await post(replaceUrls(apiUrls.checkout), {name, email, message, time, duration, date});
      if(response.status === 200){
        return response.data;  
      }
    }
  })

});
