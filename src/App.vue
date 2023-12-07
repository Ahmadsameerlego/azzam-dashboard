<template>
  <router-view/>
  <router-link to="/notification">
    <Toast />
  </router-link>
  
</template>

<script>
  import {messaging} from './firebase'
  import {getToken , onMessage }  from "firebase/messaging"
  import Toast from 'primevue/toast';

  export default{
    data(){
      return{

      }
    },
    methods:{
        // making request permission to ask user to accept Notification  
        async requestPermission(){
          const permission = await Notification.requestPermission()
          if( permission === "granted" ){
  
            // console.log('granted')
            // Generate token
            // we get the token from project setting => cloud messaging => generateKey
            getToken( messaging , {PublicVapidKey:"AAAA8-xvTys:APA91bHLwKHrA8qtYKPVxLqoFKS0DMBzEMV9V77WkeP_CUEpPTmsRFW1y9PC5AaYNq-CNsBrQHOYLWEKowQmdZuJFXWBOk0WMJF1eNipaQ2qZxcoTFoCzd4xx4wWeV0UF_wMoK_trx0R"} )
            // {vapidKey:"BFpjV9Ma8fIm3fnaCxRZMuQM_iPkZcyUpmje05C7sG-S7K7MNcep0DLwwim9mKV0w6hyLKaPtyHQDiXlJBol64w"}
            .then((currentToken) => {
  
              if (currentToken) {
                localStorage.setItem('FCMToken', currentToken.toString());
                console.log(currentToken.toString())
              } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
            });
  
  
            //To handle foreground messages
            onMessage(messaging, (message) => {
              this.$toast.add({ severity: 'success', summary: message.notification.body, life: 5000 });
              console.log('fcm is \n',message)           
            })
  
            // messaging.onMessage((message) => {
            //   this.$toast.add({ severity: 'success', summary: message.notification.body, life: 5000 });
            //   console.log('fcm is \n', message);
            // });

  
  
          }else if( permission === "denied" ){
  
              console.log('you denied')
  
          }
        }
      },
      components:{
        Toast
      },
     mounted(){ 
      this.requestPermission(); 
      localStorage.setItem('locale', this.$i18n.locale)
      if (localStorage.getItem("locale") == "en") {
        document.querySelector("body").classList.add("ltr");
      } else {
        document.querySelector("body").classList.remove("ltr");
      }
    }
  }
</script>
<style lang="scss">

</style>