'use strict';
let imgArr = [];
let keyArr = [];

function Img(url,name,description,keyword,horns) {
  this.url=url;
  this.name=name;
  this.description=description;
  this.keyword=keyword;
  this.horns=horns;
}

Img.prototype.render = function() {
  $('main').append(`
  <div class=${this.name}>
  <h2>${this.name}
  <img src="${this.url}"/>
  <p>${this.horns}</p>`
  );

};

let obj = new Img{}

