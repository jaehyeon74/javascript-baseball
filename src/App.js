const MissionUtils = require('@woowacourse/mission-utils');
const generateNumber = require('./generateNumber');
const validateInputValue = require('./validator');
const compareTwoArrayResult = require('./compare');

class App {
  play() {
    this.start();
    this.computerNumArr = generateNumber();
    this.getInputAndCompare();
  }

  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputAndCompare() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
      try {
        const { computerNumArr } = this;
        const isInputValidate = validateInputValue(input);
        const inputNumArr = input.split('').map(element => +element);
        const gameResult = compareTwoArrayResult(computerNumArr, inputNumArr);
        MissionUtils.Console.print(gameResult);
      } catch (error) {
        this.wrongInput(error);
      }
    });
  }

  wrongInput(err) {
    MissionUtils.Console.print(err);
    MissionUtils.Console.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
