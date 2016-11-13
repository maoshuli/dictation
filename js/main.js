$(function(){

    // 全局变量
    // 总的试题信息
    var resource = [
        // “题目”，“选项信息ABCD”，“正确答案”，“题目ID”
        /*
        *可以不用设置正确答案数组，
        *直接将选中答案字符与题目字符比较，
        *比较相等即为答对
        */

        // 期中一个正确答案字符串等于题目
        ['题号0', '题目0', '答案A', '答案B', '答案C', '答案D'], 
        [1, '题目1', '题目1答案1', '题目1答案2', '题目1答案3', '题目1答案4'],
        [2, '题目2', '题目2答案1', '题目2答案2', '题目2答案3', '题目2答案4'],
        [3, '题目3', '题目3答案1', '题目3答案2', '题目3答案3', '题目3答案4'],
        [4, '题目4', '题目4答案1', '题目4答案2', '题目4答案3', '题目4答案4'],
        [5, '题目5', '题目5答案1', '题目5答案2', '题目5答案3', '题目5答案4'],
        [6, '题目6', '题目6答案1', '题目6答案2', '题目6答案3', '题目6答案4'],
        [7, '题目7', '题目7答案1', '题目7答案2', '题目7答案3', '题目7答案4'],
        [8, '题目8', '题目8答案1', '题目8答案2', '题目8答案3', '题目8答案4'],
        [9, '题目9', '题目9答案1', '题目9答案2', '题目9答案3', '题目9答案4'],
        [10, '题目10', '题目10答案1', '题目10答案2', '题目10答案3', '题目10答案4'],
        [11, '题目11', '题目11答案1', '题目11答案2', '题目11答案3', '题目11答案4'],
        [12, '题目12', '题目12答案1', '题目12答案2', '题目12答案3', '题目12答案4'],
        [13, '题目13', '题目13答案1', '题目13答案2', '题目13答案3', '题目13答案4'],
        [14, '题目14', '题目14答案1', '题目14答案2', '题目14答案3', '题目14答案4'],
        [15, '题目15', '题目15答案1', '题目15答案2', '题目15答案3', '题目15答案4'],
        [16, '题目16', '题目16答案1', '题目16答案2', '题目16答案3', '题目16答案4'],
        [17, '题目17', '题目17答案1', '题目17答案2', '题目17答案3', '题目17答案4'],
        [18, '题目18', '题目18答案1', '题目18答案2', '题目18答案3', '题目18答案4'],
        [19, '题目19', '题目19答案1', '题目19答案2', '题目19答案3', '题目19答案4'],
        [20, '题目20', '题目20答案1', '题目20答案2', '题目20答案3', '题目20答案4'],
        [21, '题目21', '题目21答案1', '题目21答案2', '题目21答案3', '题目21答案4'],
        [22, '题目22', '题目22答案1', '题目22答案2', '题目22答案3', '题目22答案4'],
        [23, '题目23', '题目23答案1', '题目23答案2', '题目23答案3', '题目23答案4'],
        [24, '题目24', '题目24答案1', '题目24答案2', '题目24答案3', '题目24答案4'],
        [25, '题目25', '题目25答案1', '题目25答案2', '题目25答案3', '题目25答案4'],
        [26, '题目26', '题目26答案1', '题目26答案2', '题目26答案3', '题目26答案4'],
        [27, '题目27', '题目27答案1', '题目27答案2', '题目27答案3', '题目27答案4'],
        [28, '题目28', '题目28答案1', '题目28答案2', '题目28答案3', '题目28答案4'],
        [29, '题目29', '题目29答案1', '题目29答案2', '题目29答案3', '题目29答案4'],
        [30, '题目30', '题目30答案1', '题目30答案2', '题目30答案3', '题目30答案4'],
        [31, '题目31', '题目31答案1', '题目31答案2', '题目31答案3', '题目31答案4'],
        [32, '题目32', '题目32答案1', '题目32答案2', '题目32答案3', '题目32答案4'],
        [33, '题目33', '题目33答案1', '题目33答案2', '题目33答案3', '题目33答案4'],
        [34, '题目34', '题目34答案1', '题目34答案2', '题目34答案3', '题目34答案4'],
        [35, '题目35', '题目35答案1', '题目35答案2', '题目35答案3', '题目35答案4'],
        [36, '题目36', '题目36答案1', '题目36答案2', '题目36答案3', '题目36答案4'],
        [37, '题目37', '题目37答案1', '题目37答案2', '题目37答案3', '题目37答案4'],
        [38, '题目38', '题目38答案1', '题目38答案2', '题目38答案3', '题目38答案4'],
        [39, '题目39', '题目39答案1', '题目39答案2', '题目39答案3', '题目39答案4'],
        [40, '题目40', '题目40答案1', '题目40答案2', '题目40答案3', '题目40答案4']
    ];

    // 存放正确题目编号
    var right = [];

    // 存放错误题目编号
    var wrong = [];

    // 应作答题目编号
    var subject = [];

    // 题目总数，用 resource.length-1
    var max = resource.length-1;
    console.log(resource.length-1);
    
    // 应该答题的数目
    var item = 20;

    // 生成随机答题号码，存放在 subject 中
    function buildSubject (max, item){ // 题号从 1 到 max；取 item 道题目
        var localArr = [];
        for(var i =0; i < max; i++){
            localArr[i] = i + 1;
        }
        
        //排序
        localArr.sort(function() {
            return 0.5 - Math.random();
        }); 

        // 取出需要的随机数
        var randomNam = localArr.slice(0, item);
        console.log(randomNam); // 打印出答题题号

        // 循环读取随机数，将对应的数组放入 subject 中
        for(var j = 0; j < item; j++){
            subject.push(resource[randomNam[j]]);
        }
    }
    buildSubject(max, item); //执行函数
    console.log(subject); // 打印出答题题号

    // 针对冲首页进入答题函数
    // 点击start 后开始答题，给star绑定事件
    // 1.隐藏首页内容
    // 2.执行答题开始，开始显示第一道题目
    function startFirst(){
 

            console.log('隐藏#index');
            $(this).hide();

            // 执行显示第一个题目函数
            function first(){
                $('#main').html('<div id="subject"><div class="subject subject-' + subject[0][0] + '"><div class="audio"><audio src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=\'' + subject[0][1] + '\'" controls="controls" autoplay="autoplay">不支持格式，换个好点的浏览器吧！</audio></div><div class="choice"><label><input type="radio" name="choice">' + subject[0][2] + '</label><label><input type="radio" name="choice">' + subject[0][3] + '</label><label><input type="radio" name="choice">' + subject[0][4] + '</label><label><input type="radio" name="choice">' + subject[0][5] + '</label></div><div class="submit"><input id="nextSubject" type="submit" value="下一题"></div></div></div>');
            }
            first();
       
    }

    // 进入第一题按钮事件绑定函数
    $('#index .start').click(function(){
        startFirst();
    });

    // 判断本题题号，点击事件进入下一题
    function nextSubject(){

        // 先获取当前题目的有关信息
        // 获取当前题目的位置
        // 给 下一题按钮 绑定事件
        var currentID;

        // 获取当前题目在 subject 中的序数，从0开始
        var currentIndex;

        // 取得class 的名字，对字符串进行处理，取出最后1-4位的数字字符串转化成整数数字
        var klassname = $('#subject .subject').attr('class');
        console.log(klassname.length);
        console.log(klassname);
        var klassStr = klassname.substring(16, klassname.length);
        console.log(klassStr);

        // 将取得的字符串转化成数字给 currentID
        var currentID = parseInt(klassStr, 10);
        console.log(currentID);

        // 循环 subject ,将其中数组的 ID 与当前 currentID 对比，
        // 得出 currentID 在当前 subject 中的序数（index)
        for(var i = 0; i < subject.length; i++){
            if(subject[i][0] == currentID){
                console.log('i = ' + i);
                console.log(i);
                currentIndex = i;
            }
        }

        // 进入下一题
        $('#main').html('<div id="subject"><div class="subject subject-' + subject[currentIndex+1][0] + '"><div class="audio"><audio src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=\'' + subject[currentIndex+1][1] + '\'" controls="controls" autoplay="autoplay">不支持格式，换个好点的浏览器吧！</audio></div><div class="choice"><label><input type="radio" name="choice">' + subject[currentIndex+1][2] + '</label><label><input type="radio" name="choice">' + subject[currentIndex+1][3] + '</label><label><input type="radio" name="choice">' + subject[currentIndex+1][4] + '</label><label><input type="radio" name="choice">' + subject[currentIndex+1][5] + '</label></div><div class="submit"><input id="nextSubject" type="submit" value="下一题"></div></div></div>');


    }

    // 给 id="nextSubject" 按钮绑定事件
    $('#main').delegate('#nextSubject', 'click',function(){
        console.log('绑定事件执行');
        nextSubject();
    });
}); // jq函数结束
