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
            items[1].textContent = `风速 ${obj.data.observe.wind_power}级`;

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

            const days = document.querySelectorAll('#days>div>div')

            days[0].querySelector('p:nth-child(2)').textContent = obj.data.forecast_24h[0].day_weather;
            days[0].querySelector('p:nth-child(3)').textContent =
                `${obj.data.forecast_24h[0].min_degree}/${obj.data.forecast_24h[0].max_degree}°`;

            days[1].querySelector('p:nth-child(2)').textContent = obj.data.forecast_24h[1].day_weather;
            days[1].querySelector('p:nth-child(3)').textContent =
                `${obj.data.forecast_24h[1].min_degree}/${obj.data.forecast_24h[1].max_degree}°`;

            days[2].querySelector('p:nth-child(2)').textContent = obj.data.forecast_24h[2].day_weather;
            days[2].querySelector('p:nth-child(3)').textContent =
                `${obj.data.forecast_24h[2].min_degree}/${obj.data.forecast_24h[2].max_degree}°`;

            days[3].querySelector('p:nth-child(2)').textContent = obj.data.forecast_24h[3].day_weather;
            days[3].querySelector('p:nth-child(3)').textContent =
                `${obj.data.forecast_24h[3].min_degree}/${obj.data.forecast_24h[3].max_degree}°`;

            days[4].querySelector('p:nth-child(2)').textContent = obj.data.forecast_24h[4].day_weather;
            days[4].querySelector('p:nth-child(3)').textContent =
                `${obj.data.forecast_24h[4].min_degree}/${obj.data.forecast_24h[4].max_degree}°`;
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
            document.getElementById('current-location').textContent =res.result.address;
        })
        .catch(err => {
            console.log(err);
            loadWeather();
        })

}, positionError => {
    loadWeather();
})