var player;
var startTime = localStorage.getItem('startTime') || 0; // 開始時間（秒）
var trtime = localStorage.getItem('trtime') || 0;
var endTime = localStorage.getItem('endTime') || 82;  // 結束時間（秒）
var vid = localStorage.getItem('vid') || 'auto'; // 預設值改為'auto'

function onYouTubeIframeAPIReady() {
      // 如果 vid 是 'auto'，設置為預設影片ID
    if (vid === 'auto') {
        vid = 'c1TmVdHdpZE'; // 預設影片ID
    }
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
    event.target.playVideo(); // 播放影片
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        var checkTime = function() {
            var currentTime = player.getCurrentTime();
            if (currentTime >= endTime) {
                player.seekTo(trtime); // 當到達結束時間時，重新跳轉到開始時間
            }
            setTimeout(checkTime, 500); // 每秒檢查一次時間
        };
        checkTime(); // 開始檢查時間
    }
}
