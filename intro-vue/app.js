const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref('i am batman');
    const author = ref('bruce wayne');

    const cambio = () => {
      message.value = 'soy goku';
      author.value = 'goku';
    };

    return {
      message,
      author,
      cambio,
    };
  },
});

app.mount('#myApp');
