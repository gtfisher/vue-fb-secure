<template>
    <div>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
<script>
import firebase from "firebase"
import firebaseui from "firebaseui"
import "../../node_modules/firebaseui/dist/firebaseui.css"
import { config } from "../firebase"
export default {
    mounted() {
        let self = this
        let uiConfig = {
            signInOptions: [{
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
            }],
            callbacks: {
                signInSuccessWithAuthResult() {
                    localStorage.setItem('authenticated', true)
                    window.location.href = '/'
                }
            }
        }
        var fbauth = firebase.auth()
        console.log("fb.auth:", fbauth)
        var ui = new firebaseui.auth.AuthUI(fbauth)
        ui.start("#firebaseui-auth-container", uiConfig)
    }
}
</script>