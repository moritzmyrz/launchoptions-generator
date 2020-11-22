<template>
  <v-app>
      <div id="app1">
        <h1 id="title">
          CS: GO Launch Options Generator
        </h1>
        <Content></Content>
    </div>
  </v-app>
</template>

<script>
import Content from './components/Content';

export default {
  name: 'App',

  components: {
    Content
  },

  data: () => ({
    //
  }),
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
html {
  width: 100%;
  height: 100%;
}
#app {
  background: #4a4e69;
  width: 100%;
  height: 100%;
}

#app1 {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
}

#title {
  font-family: 'Josefin Sans', sans-serif;
  color: whitesmoke;
  margin: 0 3em;
  font-size: 50px;
  margin-top: 2em;
  margin-bottom: 1em;
}

@media screen and (max-width: 900px) {
  #title {
    font-size: 34px;
  }
}


</style>
