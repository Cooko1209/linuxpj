var player;

function getSetting(key, defaultValue) {
    var value = localStorage.getItem(key);
    console.log(`Getting setting ${key}: ${value}`);
    if (value === 'auto' || value === null || isNaN(value)) {
        return defaultValue;
    }
    return parseFloat(value);
}

var startTime = getSetting('startTime', 4); // 開始時間（秒）
var trtime = getSetting('trtime', 10); // 跳轉時間（秒）
var endTime = getSetting('endTime', 23);  // 結束時間（秒）
var vid = localStorage.getItem('vid') || 'auto'; // 替換為'auto'

// 設置預設值
if (vid === 'auto') {
    vid = '9jBA3SA2aIs'; // 預設影片ID
}

console.log(`Player settings: startTime=${startTime}, trtime=${trtime}, endTime=${endTime}, vid=${vid}`);

function onYouTubeIframeAPIReady() {
    console.log('YouTube Iframe API Ready');
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: vid, // 替換為你的影片ID
        playerVars: {
            'autoplay': 1,            // 自動播放
            'controls': 0,            // 不顯示控制項
            'showinfo': 0,            // 不顯示影片資訊（此參數在新版API中已被廢棄）
            'modestbranding': 1,      // 隱藏YouTube標誌
            'loop': 1,                // 迴圈播放
            'mute': 1,                // 靜音播放
            'start': startTime,       // 設置開始播放時間
            'playlist': vid,          // 替換為你的影片ID
        },
        events: {
            'onReady': onPlayerReady,           // 當播放器準備好時觸發的事件處理函數
            'onStateChange': onPlayerStateChange // 當播放器狀態改變時觸發的事件處理函數
        }
    });
}

function onPlayerReady(event) {
    console.log('Player Ready');
    event.target.playVideo(); // 播放影片
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        console.log('Player Playing');
        var checkTime = function() {
            var currentTime = player.getCurrentTime();
            console.log(`Current time: ${currentTime}`);
            if (currentTime >= endTime) {
                player.seekTo(trtime); // 當到達結束時間時，重新跳轉到開始時間
            }
            setTimeout(checkTime, 100); // 每秒檢查一次時間
        };
        checkTime(); // 開始檢查時間
    }
}

// 确保 YouTube API 脚本加载完成后执行
if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
