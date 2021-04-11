new Vue({
  el: "#app",
  template: "#main",
  data: {
    index: true,
    api: "https://api.thecatapi.com/v1/images/search?format=json&limit=100",
    allCats: [],
    likeCats: [],
    hoverCat: null
  },
  methods: {
    toggle: function (cat) {
      if (this.likeCats.includes(cat)) {
        this.disLike(cat);
      } else {
        this.like(cat);
      }
    },
    like: function (img) {
      let indx = this.allCats.indexOf(img);
      this.likeCats.push(this.allCats[indx]);
    },
    disLike: function (img) {
      let indx = this.likeCats.indexOf(img);
      this.likeCats.splice(indx, 1);
    },
    checkFav: function (img) {
      return this.likeCats.includes(img) || img === this.hoverCat;
    },
    hover: function (cat) {
      this.hoverCat = cat;
    },
    unhover: function () {
      this.hoverCat = null;
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
      .then((data) => (this.allCats = data));
  }
});
