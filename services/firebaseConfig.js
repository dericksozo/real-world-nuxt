import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: "AIzaSyDudw5mR0pbLM5qRropmL80tFfF4RYWEec",
  authDomain: "real-world-nuxt.firebaseapp.com",
  databaseURL: "https://real-world-nuxt.firebaseio.com",
  projectId: "real-world-nuxt",
  storageBucket: "real-world-nuxt.appspot.com",
  messagingSenderId: "828644795313"
};
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const eventsCollection = db.collection('events')

export default {
  db,
  auth,
  currentUser,
  usersCollection,
  eventsCollection
}
