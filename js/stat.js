'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270; // размеры облака
var CLOUD_X = 100;
var CLOUD_Y = 10; // координаты облака
var GAP = 10; // отступ тень-облако
var FONT_GAP = 16; // размер шрифта
/*
var TEXT_WIDTH = 65; // ширина текста
var BAR_WIDTH = 40; // ширина колонки
*/

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx/* , names, times */) {
  // отрисовка облака с тенью
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  // отрисовка финишного текста
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP * 2 + GAP);
};
