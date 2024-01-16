const Stream = require("node-rtsp-stream");
// 1.设置rtsp视频流地址
const rtsp_urls = "rtsp://localhost:8554/desktop";

// 2.开启ws通信
const streams = new Stream({
    name: "sockets",
    streamUrl: rtsp_urls,
    wsPort: 9998,
    ffmpegOptions: {
        // 选项ffmpeg标志
        "-stats": "", // 没有必要值的选项使用空字符串
        "-r": 60, // 具有必需值的选项指定键后面的值<br>　　　　
        '-s':'1920*1080'
    }
});
