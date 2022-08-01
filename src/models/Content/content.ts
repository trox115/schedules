import { createModel } from "@rematch/core"
import { RootModel } from ".."
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
    }
  },

  effects: (dispatch) => ({
    enableLoading(): void {
      dispatch.content.setLodading(true);
    }
  })

});