
const counterDisplay = document.querySelector('.counter');

const incrementButton = document.querySelector('.increment');
const resetButton = document.querySelector('.reset');

// カウンターの値
let counterValue = 0;

// カウンターの表示を更新する関数
function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}

// イベントリスナーの設定
incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
});

resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounterDisplay();
});

function getScreenWidth() {
    return innerWidth; // ブラウザの横幅を取得
}

// 画面幅をチェックする関数
function checkScreenWidth() {
    const width = getScreenWidth();
    console.log('現在の画面幅:', width + 'px');

    if (width <= 60) {
        console.log('600px以下: 横2×縦3で表示');
        createTable2x3();
    } else {
        console.log('600px以上: 横3×縦2で表示');
        createTable3x2();
    }
}

function createTable2x3() {
    const table = document.querySelector('.number-table');
    table.innerHTML = `
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr class="blue">
            <td>3</td>
            <td>4</td>
        </tr>
        <tr>
            <td>5</td>
            <td>6</td>
        </tr>
    `;
}

function createTable3x2() {
    const table = document.querySelector('.number-table');
    table.innerHTML = `
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr class="blue">
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
    `;
}

// 画面サイズが変更されたときに実行
addEventListener('resize', checkScreenWidth);

// ページ読み込み時に一度だけ実行
checkScreenWidth();

const clockDisplay = document.querySelector('.clock');

function getCurrentTime() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    return {hours, minutes, seconds, milliseconds};
}

function formatTime(hours, minutes, seconds, milliseconds) {
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    const ms = Math.floor(milliseconds / 100);  // 0.1秒単位

    return `${h}:${m}:${s}.${ms}`;
}

function updateClock() {
    const time = getCurrentTime();
    const timeString = formatTime(time.hours, time.minutes, time.seconds, time.milliseconds);
    clockDisplay.textContent = timeString;
}

setInterval(updateClock, 100);  // 100ミリ秒 = 0.1秒
updateClock();  // 最初に一度実行


const textInput = document.querySelector('.string-input');
const stringCounterDisplay = document.querySelector('.string-counter');

function updateCharacterCount() {
    const text = textInput.value;
    const count = text.length;
    stringCounterDisplay.textContent = count;
}

setInterval(updateCharacterCount, 1000);
updateCharacterCount();  // 初期値を更新


