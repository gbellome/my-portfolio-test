import { initializeApp } from "firebase/app"
import { getDatabase, ref, onValue } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBpTgdnxazeJ-WXZfdyfShw3PSK7anIdeU",
    authDomain: "my-portfolio-test-7be9c.firebaseapp.com",
    databaseURL: "https://my-portfolio-test-7be9c-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-test-7be9c",
    storageBucket: "my-portfolio-test-7be9c.appspot.com",
    messagingSenderId: "549268347700",
    appId: "1:549268347700:web:b02735a37baf5ca8546361"
}
initializeApp(firebaseConfig)


const getData = () => {
    let data
    onValue(ref(getDatabase()), async (snapshot) => {
        data = await snapshot.val()
    })
    return data
}

export default getData()