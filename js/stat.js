'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270; // размеры облака
var CLOUD_X = 100;
var CLOUD_Y = 10; // координаты облака
var GAP = 10; // отступ тень-облако
var FONT_GAP = 16; // размер шрифта
var BAR_WIDTH = 40; // ширина колонки
var BAR_GAP = 50; // отступ между колонками
var BAR_MAX_HEIGHT = 150; // максимальная высота колонки

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, NAMES, times) {
  // отрисовка облака с тенью
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  // отрисовка финишного текста
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP * 2 + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < NAMES.length; i++) {
    var barHeight = BAR_MAX_HEIGHT / maxTime * times[i]; // вычисление высоты блока
    ctx.fillText(NAMES[i], CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - GAP); // отрисовка имен игроков

    if (NAMES[i] === 'Вы') { // смена заливки блока под конкретного игрока
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.floor(Math.random() * 255) + ', 1)';
    }

    ctx.fillRect(CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - barHeight - GAP - FONT_GAP, BAR_WIDTH, barHeight); // отрисовка блоков
    ctx.fillStyle = '#000'; // сброс цвета заливки
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - GAP * 2 - FONT_GAP - barHeight); // отрисовка показателей времени игроков
  }
};
