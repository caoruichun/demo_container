import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultNote = {
  id: +new Date(),
  title: '我的笔记',
  content: '第一篇笔记内容',
  favorite: false
}
const state = {
  notes: [defaultNote],
  activeNote: defaultNote,
  show: 'all'
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});