import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    }
  },
})

export default store
