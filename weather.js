document.querySelectorAll('#location>div')
    .forEach(x => {
        x.addEventListener('click', event => {
            loadWeather('https://hxz315.com/api/weather' + x.dataset.src);
        });
    });

document.querySelectorAll('#location>div')
    .forEach(x => {
        x.addEventListener('click', event => {
            document.title = x.textContent + '天气预报 - 回形针';
            loadWeather(`https://lucidu.cn/api/weather${x.dataset.src}`);
        });
    })


let timer = 0;

function loadWeather(uri) {
    fetch(uri || 'https://lucidu.cn/api/weather?province=湖南省&city=益阳市&county=桃江县')
        .then(res => res.text())
        .then(res => {
            var obj = JSON.parse(res);
            if (obj.data.alarm.length) {
                document.getElementById('alarm').style.display = 'block';

                document.getElementById('alarm').querySelector('h2').textContent = obj.data.alarm[0]
                    .type_name +
                    '预警';
                document.getElementById('alarm').querySelector('div').textContent = obj.data.alarm[0]
                    .detail;
            } else {
                document.getElementById('alarm').style.display = 'none';
            }

            document.getElementById('temperature').textContent = obj.data.observe.degree;
            document.getElementById('weather').textContent = obj.data.observe.weather_short;

            const items = document.getElementById('wind-humidity').querySelectorAll('p');
            items[0].textContent = `湿度 ${obj.data.observe.humidity}%`;
            items[1].textContent = `${windDirection(obj.data.observe.wind_direction)} ${obj.data.observe.wind_power}级`;

            let first = true;
            clearInterval(timer);
            timer = setInterval(() => {
                first = !first;
                if (first) {
                    items[0].classList.add('show');
                    items[1].classList.remove('show');
                } else {
                    items[1].classList.add('show');
                    items[0].classList.remove('show');
                }
            }, 3000);
            document.getElementById('tips').textContent = obj.data.tips.observe["1"];
            document.getElementById('today_min_max').textContent =
                `${obj.data.forecast_24h["1"].min_degree}/${obj.data.forecast_24h["1"].max_degree}°`;
            document.getElementById('today_weather').textContent =
                `${obj.data.forecast_24h["1"].day_weather}转${obj.data.forecast_24h["1"].night_weather}`;
            document.getElementById('tomorrow_min_max').textContent =
                `${obj.data.forecast_24h["2"].min_degree}/${obj.data.forecast_24h["2"].max_degree}°`;
            document.getElementById('tomorrow_weather').textContent =
                `${obj.data.forecast_24h["2"].day_weather}转${obj.data.forecast_24h["2"].night_weather}`;

            const days = document.querySelector('#days')
            buildDays(obj, days);



        });
}

navigator.geolocation.getCurrentPosition(position => {

    fetch(
            `https://lucidu.cn/api/geo?location=${position.coords.latitude},${position.coords.longitude}`
        )
        .then(res => res.json())
        .then(res => {
            if (res.result.address_component.nation === '中国') {
                loadWeather(`https://lucidu.cn/api/weather?province=${res.result.address_component.ad_level_1}&city=${res.result.address_component.ad_level_2}&county=${res.result.address_component.ad_level_3}`);
                document.title = `${res.result.address_component.ad_level_2}${res.result.address_component.ad_level_3}天气预报 - 回形针`;
            } else {
                console.log(res.result);
                loadWeather();
            }
            document.getElementById('current-location').textContent = res.result.address;
        })
        .catch(err => {
            console.log(err);
            loadWeather();
        })

}, positionError => {
    console.log(positionError);
    loadWeather();
})

function windDirection(value) {
    var r = {
        0: "\u65e0\u6301\u7eed\u98ce\u5411",
        1: "\u4e1c\u5317\u98ce",
        2: "\u4e1c\u98ce",
        3: "\u4e1c\u5357\u98ce",
        4: "\u5357\u98ce",
        5: "\u897f\u5357\u98ce",
        6: "\u897f\u98ce",
        7: "\u897f\u5317\u98ce",
        8: "\u5317\u98ce",
        9: "\u65cb\u8f6c\u98ce"
    };
    return r[value];
}


function parseString(string) {
    const array = [];
    let offset = 0;
    for (let index = 0; index < string.length; index++) {

        if (index + 1 < string.length && string[index] === '{' && string[index + 1] === '{') {
            array.push(['0', string.substring(offset, index)]);
            index += 2;
            offset = index;
        }
        if (index + 1 < string.length && string[index] === '}' && string[index + 1] === '}') {
            array.push(['1', string.substring(offset, index)]);
            index += 2;
            offset = index;
        }
    }
    if (offset < string.length) {
        array.push(['0', string.substring(offset)]);
    }
    return array;
}

function buildDays(obj, days) {
    const string = `<div>
            <p>{{name}}</p>
            <p>{{day_weather}}</p>
            <img src="//mat1.gtimg.com/pingjs/ext2020/weather/pc/icon/weather/day/{{day_weather_code}}.svg">
            <p>{{min_degree}}/{{max_degree}}°</p>
        </div>`;
    const templates = parseString(string);
    const datas = [];
    const names = ['昨天', '今天', '明天', '后天', '大后天'];
    for (let index = 0; index < 5; index++) {
        datas.push({
            name: names[index],
            obj: obj.data.forecast_24h[index]
        })
    }
    const buffer = [];
    for (let index = 0; index < 5; index++) {
        for (let j = 0; j < templates.length; j++) {
            const element = templates[j];
            if (element[0] === '0')
                buffer.push(element[1]);
            else {
                if (element[1] === 'name')
                    buffer.push(datas[index].name);
                else
                    buffer.push(datas[index].obj[element[1]]);
            }
        }
    }
    days.innerHTML = buffer.join('');
}