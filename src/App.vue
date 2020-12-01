<template>
  <v-app>
      <div id="app1">
        <h1 id="title">
          CS: GO Launch Option Generator
          <h3>
            by Moritz Myrseth
          </h3>
        </h1>
        <Content></Content>
        <Tutorial></Tutorial>
    </div>
    <v-btn
      class="mx-2"
      fab
      dark
      color="pink darken-2"
      id="contribute-btn"
      href="https://github.com/moritzmyrz/launchoptions-generator"
      target="_blank"
    >
      <v-icon dark>
        mdi-github
      </v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Content from './components/Content';
import Tutorial from './components/Tutorial';

export default {
  name: 'App',
  metaInfo: {
    title: 'CS: GO Launch Option Generator'
  },

  components: {
    Content,
    Tutorial
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
html {
  width: 100%;
  height: 100%;
}

#contribute-btn {
  position: fixed;
  right: 1em;
  bottom: 1em;
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

#title > h3 {
  margin: 0;
  font-size: 25px;
  font-family: 'Ubuntu', sans-serif;
  text-align: right;
}

@media screen and (max-width: 900px) {
  #title {
    font-size: 34px;
  }
  #title > h3 {
    font-size: 17px;
  }
}


</style>
