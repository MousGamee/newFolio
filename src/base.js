import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApxdg5xMz8-bebVCk9HGhXlALWzmvfLYk",
    authDomain: "chatboxapp-e598a.firebaseapp.com",
    databaseURL: "https://chatboxapp-e598a.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base





