import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

import { GlobalState } from '@/store/types'

export const key: InjectionKey<Store<GlobalState>> = Symbol()

const store = createStore<GlobalState>({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
})

export default store
