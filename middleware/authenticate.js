import firebase from 'firebase'

export default function ({ next, store }) {
  const currentUser = store.state.user;

  if ( ! currentUser) {
    next('/login')
  }
}
