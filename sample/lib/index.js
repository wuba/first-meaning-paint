import firstMeaningPaint from '../../lib';

const option = {
  eleSelector: 'body',  // 非必填
  intervalTime: 100,  // 非必填
  totalTime: 2000  // 非必填
};

firstMeaningPaint(option).then(function (data) {
  console.log('time', data);
}, function (e) {
  console.log('e', e);
});