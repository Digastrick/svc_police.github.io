<script>
import axios from 'axios';

export const UsersModule = {
    state:() =>({
        users: [],
  }),
  mutations:{
    SET_USERS(state, users) {
      state.users = users;
    },
    RESET_USERS(state) {
    state.users = []
  }
  },
  actions:{
    fetchUsers({ commit }) {
      return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => {
        commit('SET_USERS',users.data);
      })
        .catch(error => {
          console.error('Failed to fetch users:', error);
        });
    },
    resetUsers({ commit }) {
    commit('RESET_USERS')
  }
  }
}
</script>