// Table
function getScreenWidth() {
    return innerWidth;
}

const numbers = [1, 2, 3, 4, 5, 6];

function createTable(rows, cols) {
    const table = document.querySelector('.number-table');
    table.innerHTML = '';
    
    for(let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for(let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            const index = i * cols + j;
            
            // TailwindCSSクラスを追加（統一された色）
            cell.className = 'border border-gray-400 px-4 py-2 text-center font-semibold bg-gray-50 hover:bg-gray-100 transition-colors';
            
            // 配列の範囲内かチェック
            if (index < numbers.length) {
                cell.textContent = numbers[index];
            }
            
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// 画面幅をチェックする関数
function checkScreenWidth() {
    const width = getScreenWidth();
    console.log('現在の画面幅:', width + 'px');

    if (width <= 600) {
        console.log('600px以下: 3行2列で表示');
        createTable(3, 2);  // 3行2列
    } else {
        console.log('600px以上: 2行3列で表示');
        createTable(2, 3);  // 2行3列
    }
}

// 画面サイズが変更されたときに実行
addEventListener('resize', checkScreenWidth);

// ページ読み込み時に実行
addEventListener('load', checkScreenWidth);

// カウンター
const counterDisplay = document.querySelector('.counter');
const incrementButton = document.querySelector('.increment');
const resetButton = document.querySelector('.reset');

// カウンターの値
let counterValue = 0;

// カウンターの表示を更新する関数
function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
    
    // 数値に応じて色を変更
    if (counterValue > 10) {
        counterDisplay.className = 'counter text-6xl font-bold text-red-600';
    } else if (counterValue > 5) {
        counterDisplay.className = 'counter text-6xl font-bold text-yellow-600';
    } else {
        counterDisplay.className = 'counter text-6xl font-bold text-blue-600';
    }
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

// 時計
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
    const ms = Math.floor(milliseconds / 100);

    return `${h}:${m}:${s}.${ms}`;
}

function updateClock() {
    const time = getCurrentTime();
    const timeString = formatTime(time.hours, time.minutes, time.seconds, time.milliseconds);
    clockDisplay.textContent = timeString;
}

setInterval(updateClock, 100);
updateClock();

// 文字数カウンター
const textInput = document.querySelector('.string-input');
const stringCounterDisplay = document.querySelector('.string-counter');

function updateCharacterCount() {
    const text = textInput.value;
    const count = text.length;
    stringCounterDisplay.textContent = count;
    
    // 文字数に応じて色を変更
    if (count > 100) {
        stringCounterDisplay.className = 'string-counter text-2xl font-bold text-red-600';
    } else if (count > 50) {
        stringCounterDisplay.className = 'string-counter text-2xl font-bold text-yellow-600';
    } else {
        stringCounterDisplay.className = 'string-counter text-2xl font-bold text-purple-600';
    }
}

// リアルタイム更新に変更
textInput.addEventListener('input', updateCharacterCount);
updateCharacterCount();


