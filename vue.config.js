const openInEditor = require("launch-editor-middleware");

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devServer: {
      before(app) {
        app.use("/__open-in-editor", openInEditor("code"));
      }
    }
  }
}