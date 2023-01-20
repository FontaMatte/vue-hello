  const { createApp } = Vue;

  createApp({
    data() {
      return {

        info : {
            message: "Hello Vue!",
            // imageUrl: "vue.png"

        }
      }
    }
  }).mount('#app')
