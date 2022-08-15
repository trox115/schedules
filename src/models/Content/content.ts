import { createModel } from "@rematch/core"
import { RootModel } from ".."
import { get } from "../../Api/api";
import { apiUrls, replaceUrls } from "../../Api/apiUrls";
import ContentState from "../../interfaces/content/content"

export default createModel<RootModel>()({

  state: {
    timeIntervals: [{ id: 0, label: '', value: 0, price: 9 }],
    availableTimes: [{ id: 0, name: '', from: '', to: '' }],
    loading: false
  } as ContentState,

  reducers: {
    setLodading(state: ContentState, payload: boolean) {
      return { ...state, loading: payload }
    },

    setContent(state: ContentState, payload){
      return { ...state, availableTimes: payload.availableTimes, timeIntervals: payload.timeIntervals }
    }
  },

  effects: (dispatch) => ({
    enableLoading(): void {
      dispatch.content.setLodading(true);
    },

    disableLoading(): void {
      dispatch.content.setLodading(false);
    },

    async getContent():Promise<void>{
      try {
        dispatch.content.enableLoading();
        const response = await get(replaceUrls(apiUrls.content));
        if(response.status === 200){
          const data = response.data;
          dispatch.content.setContent(data);   
          dispatch.content.disableLoading();
        }
      } catch (error) {
        //TODO: handle error
      }
    },
  })

});
