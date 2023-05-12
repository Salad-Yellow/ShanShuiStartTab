

function getDate() {
    var d = new Date();
    var date = {};
    date.year = d.getFullYear();
    date.month = d.getMonth() + 1;
    date.day = d.getDay() + 1;
    date.hours = d.getHours();
    date.minute = d.getMinutes();
    date.second = d.getSeconds();
    date.locale = d.toLocaleString();
    return date;
};

function printDate(e) {
    let d = getDate();
    e.innerHTML = d.locale;
    setInterval(() => {
        d = getDate();
        e.innerHTML = d.locale;
    }, 1000)
};

function searchE(c) {
    return document.getElementsByClassName(c);
};
function sleep(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

function keyup_submit(e) {
    var evt = window.event || e;
    if (evt.keyCode == 13) {
        inp = searchE('search')[0];
        switch (inp.value) {
            case 'bing':
                window.open('https://cn.bing.com', '_blank');
                break;
            case 'bd':
                window.open('https://www.baidu.com', '_blank');
                break;
            case 'gh':
                window.open('https://github.com', '_blank');
                break;
            case 'b3':
                window.open('https://box3.codemao.cn', '_blank');
                window.open('https://p', '_blank');
                window.open('https://docs.box3.codemao.cn', '_blank');
                break;
            case 'cn':
                window.open("https://https://www.runoob.com", '_blank');
                break;
            case 'sp':
                window.open("https://www.spaceparty.cn", '_blank');
                break;
            case 'csql':
                window.open("https://happy-cola.github.io/box3-code-maker/", '_blank');
            case 'csqle':
                window.open("https://githubcola.github.io/box3-code-maker-extend/", '_blank');
            default:
                window.open("https://" + inp.value, '_blank');
        };
    };
};


inputing:
function inputing() {
    const text = document.querySelector('.text');
    const txt = ["永远不要放弃寻找你的梦中情人和世外桃源。", "如果你瞄准的是月亮，即使迷失，也在星辰之间。", "缺角的月亮，同样可以把清柔的光撒满人间", '那天车窗起雾，我写了你的名字', '你也想起舞吗？'];

    var index = 0;
    var xiaBiao = 0;
    var huan = true;

    setInterval(function () {
        if (huan) {
            text.innerHTML = txt[xiaBiao].slice(0, ++index);
            console.log(index);
        }
        else {
            text.innerHTML = txt[xiaBiao].slice(0, index--);
            console.log(index);
        }

        if (index == txt[xiaBiao].length + 3) {
            huan = false;
        }
        else if (index < 0) {
            index = 0;
            huan = true;
            xiaBiao++;
            if (xiaBiao >= txt.length) {
                xiaBiao = 0;
            }
        }

    }, 200)
}

function changeColor(e) {
    if (!changeColor) return;
    setInterval(() => {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = "rgb(" + r + "," + g + "," + b + ")";
        console.log(color);
        e.style.color = color;
    }, 200);
};


