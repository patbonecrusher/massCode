import electronStore from '@@/store'

export default {
  namespaced: true,
  state: {
    os: process.platform,
    init: false,
    theme: 'dark',
    sidebarWidth: 180,
    snippetListWidth: 220,
    storagePath: null,
    markdownPreview: false,
    updateAvailable: false
  },
  getters: {},
  mutations: {
    SET_INIT (state, bool) {
      state.init = bool
    },
    SET_SIDEBAR_WIDTH (state, width) {
      state.sidebarWidth = width
    },
    SET_SNIPPET_LIST_WIDTH (state, width) {
      state.snippetListWidth = width
    },
    SET_STORAGE_PATH (state, path) {
      state.storagePath = path
    },
    SET_THEME (state, theme) {
      state.theme = theme
    },
    SET_MARKDOWN_PREVIEW (state, bool) {
      state.markdownPreview = bool
    },
    SET_UPDATE_AVAILABLE (state, bool) {
      state.updateAvailable = bool
    }
  },
  actions: {
    setSidebarWidth ({ commit }, width) {
      width = Math.ceil(width)
      commit('SET_SIDEBAR_WIDTH', width)
      electronStore.app.set('sidebarWidth', width)
    },
    setSnippetListWidth ({ commit }, width) {
      width = Math.ceil(width)
      commit('SET_SNIPPET_LIST_WIDTH', width)
      electronStore.app.set('snippetListWidth', width)
    },
    setTheme ({ commit }, theme) {
      commit('SET_THEME', theme)
      electronStore.app.set('theme', theme)
    }
  }
}
