<script>
import axios from 'axios';

export const PostModule = {
    state:() =>({
    posts:[]
  }),
  mutations:{
    SET_POSTS(state,posts){
      state.posts = posts;
    },
    RESET_POSTS(state) {
    state.posts = []
  }
  },
  actions:{
    fetchPosts({commit},id){
      return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(posts => {
        commit('SET_POSTS',posts.data)
      })
      .catch(error => {
        console.error('Failed to fetch posts:', error)
      })
    },
    resetPosts({ commit }) {
    commit('RESET_POSTS')
  }
  }
}
</script>