new Vue({
  el: "#app",
  template: "#main",
  data: {
    index: true,
    api: "https://api.thecatapi.com/v1/images/search?mime_types=jpg&&limit=100",
    allCats: [],
    likeCats: []
  },
  methods: {
    like: function (img) {
      if (this.likeCats.includes(img)) {
        return;
      }
      let indx = this.allCats.indexOf(img);
      this.likeCats.push(this.allCats[indx]);
    },
    disLike: function (img) {
      let indx = this.likeCats.indexOf(img);
      this.likeCats.splice(indx, 1);
    }
  },
  mounted: function () {
    fetch(this.api, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
      }
    })
      .then((response) => response.json())
      .then((data) => (this.allCats = data))
      .then(console.log(this.allCats));
  }
});
