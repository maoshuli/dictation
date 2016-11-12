$(function(){

    // 给 #btn 添加事件弹出 val
    $('#button').click(function(){
        
        // 获取输入框中的文字
        var inputVal = $('#input').val();

        // 修改音频链接
        $('#yuyin audio').attr('src', 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text="' + inputVal + '"');

        alert(val);
    });

    // 控制播放
    $('#start').click(function(){

         // 获取输入框中的文字
        var inputVal = $('#input').val();

        // 修改音频链接
        $('#yuyin audio').attr('src', 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text="' + inputVal + '"');

        // js 获取音频标签
        var music = $('#yuyin audio')[0];

        // js 获取播放按钮
        var musicPlay = $('#start')[0];

        if(music.paused){
            music.play();
        }else{
            music.pause();
        }
    });
}); // jq 函数结束