import {
    getSearchParam,
    getStringAsync,
    readText,
    substringAfter,
    substringAfterLast,
    substringBefore,
    substringBeforeLast,
    writeText
}
from "./modules/share.js";
const player = document.querySelector('custom-video-player');
const header = document.querySelector('custom-header');
const toast = document.querySelector('custom-toast');
const dialog = document.querySelector('custom-dialog');
const autonavBar = document.querySelector('.autonav-bar');
const items = [
    // N9nkvj.jpg
    {
        src: 'https://lucidu.cn/api/obs/【小岛浪吹】地方教育改革政策出炉，上海取消英语考试，老外学生反而会越来越多？一个视频聊清楚未来五到十年教育改革.mp4',
        image: 'N9nkvj.jpg',
        title: '【小岛浪吹】地方教育改革政策出炉，上海取消英语考试，老外学生反而会越来越多？一个视频聊清楚未来五到十年教育改革'
    },
    {
        src: 'https://lucidu.cn/api/obs/麻团 煎堆 不开裂 不回缩的小技巧 Sesame Balls.mp4',
        image: 'k3APkn.jpg',
        title: '麻团 煎堆 不开裂 不回缩的小技巧 Sesame Balls'
    }, {
        src: 'https://lucidu.cn/api/obs/麻团 没有比这更详细的教程了 Fried Sesame Balls.mp4',
        image: 'rCFttl.jpg',
        title: '麻团 没有比这更详细的教程了 Fried Sesame Balls'
    },
    {
        src: 'https://lucidu.cn/api/obs/%E5%B0%8F%E5%B2%9B%E4%B8%AD%E5%9B%BD%E6%95%99%E8%82%B2.mp4',
        image: 'xdzgjy.jpg',
        title: '【小岛浪吹】中国教育改革“双减”能成功吗，你愿意生三胎吗，聊聊中国近几年的几个失误'
    },
    {
        src: 'https://lucidu.cn/api/obs/%E6%97%A5%E6%9C%AC%E6%8B%89%E9%9D%A2%E5%B1%8B.mp4',
        image: 'japanese-ramen-stall.jpg',
        title: '日本拉面屋'
    },
    {
        src: 'https://psycho.obs.cn-south-1.myhuaweicloud.com/YiGuoLiangZhi.mp4',
        image: '961174231.jpg',
        title: '【小岛浪吹】一个视频说清楚一国两制的前世今生，五十年不变到底变没变，未来一国两制还会继续吗？'
    },
    {
        src: 'https://psycho.obs.cn-south-1.myhuaweicloud.com/LaoGao1.mp4',
        image: '972251131.jpg',
        title: '打疫苗前你該知道的事 _ 老高與小茉 Mr & Mrs Gao'
    },
    {
        src: 'https://psycho.obs.cn-south-1.myhuaweicloud.com/LaoGao2.mp4',
        image: '1895394361.jpg',
        title: '人為什麼是人，人類最不可思議的六個特征 _ 老高與小茉 Mr & Mrs Gao'
    }
];
let playIndex = 0;
/**/
player.addEventListener('fullscreen', ev => {
    if (ev.detail)
        header.style.display = 'none';
    else
        header.removeAttribute('style');
});
player.addEventListener('resize', ev => {
    const playerSize = document.querySelector('.player-size');
    playerSize.style.height = `${ev.detail}px`;
    playerSize.style.paddingBottom = '0';
});
player.addEventListener('error', ev => {
    toast.setAttribute('message', ev.detail);
});

document.getElementById('expand-button').addEventListener('click', ev => {
    if (!ev.currentTarget.dataset.expand) {
        ev.currentTarget.dataset.expand = 1;
        ev.currentTarget.querySelector('path').setAttribute('d', 'M18.4 14.6L12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z');
    } else {
        ev.currentTarget.dataset.expand = '';
        ev.currentTarget.querySelector('path').setAttribute('d', 'M18 9.28l-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z');
    }
});
document.getElementById('input-video').addEventListener('click', ev => {
    dialog.removeAttribute('hidden');
});
document.getElementById('share-video').addEventListener('click', ev => {
    toast.setAttribute('message', '已成功复分享信息');
});
document.getElementById('help-video').addEventListener('click', ev => {
    window.location.href = '/help';
});

dialog.addEventListener('submit', async ev => {
    if (!ev.detail) return;
    const viewkey = getSearchParam(ev.detail, "viewkey");
    if (viewkey) {
        const string = await getStringAsync(`https://service-mayeka3y-1258705152.hk.apigw.tencentcs.com/release/?viewkey=${viewkey}`);
        let src = substringBefore(substringAfter(eval(string), 'src=\''), '\'');
        player.setAttribute('src', src);
        return;
    } else {
        player.setAttribute('src', ev.detail);
    }
});
const wrapper = document.createElement('div');

items.forEach((x, index) => {
    const item = buildItem(x, index);
    wrapper.appendChild(item);
    item.addEventListener('click', ev => {
        playIndex = parseInt(ev.currentTarget.dataset.index);
        play();
    });
});
autonavBar.insertAdjacentElement('afterend', wrapper);
const ur = new URL(window.location.href);
const uri = ur.searchParams.get("v");

if (uri) {
    player.setAttribute('src', uri);
    if (ur.searchParams.get("t")) {
        player.currentTime = covertDuration(ur.searchParams.get("t"));
    }
} else {
    play();
}
/**/

function covertDuration(duration) {
    let result = 0;
    if (/(\d{1,2}:){1,2}\d{1,2}/.test(duration)) {
        const pieces = duration.split(':');
        for (let i = pieces.length - 1; i > -1; i--) {
            result += Math.pow(60, i) * parseInt(pieces[pieces.length - i - 1]);
        }
        return result;
    }
    result = parseInt(duration);
    if (isNaN(result)) {
        result = 0;
    }
    return result;
}

function buildItem(obj, index) {
    const videoRenderer = document.createElement('DIV');
    videoRenderer.dataset.index = index;
    videoRenderer.setAttribute('class', 'video-renderer');
    videoRenderer.setAttribute('data-src', obj.src);
    const videoThumbnailContainerLarge = document.createElement('DIV');
    videoThumbnailContainerLarge.setAttribute('class', 'video-thumbnail-container-large');
    const videoThumbnailBg = document.createElement('DIV');
    videoThumbnailBg.setAttribute('class', 'video-thumbnail-bg');
    videoThumbnailContainerLarge.appendChild(videoThumbnailBg);
    const videoThumbnailImg = document.createElement('IMG');
    videoThumbnailImg.setAttribute('class', 'video-thumbnail-img');
    videoThumbnailImg.setAttribute('src', `images/${obj.image}`);
    videoThumbnailContainerLarge.appendChild(videoThumbnailImg);
    videoRenderer.appendChild(videoThumbnailContainerLarge);
    const details = document.createElement('DIV');
    details.setAttribute('class', 'details');
    const largeMediaChannel = document.createElement('DIV');
    largeMediaChannel.setAttribute('class', 'large-media-channel');
    details.appendChild(largeMediaChannel);
    const largeMediaItemInfo = document.createElement('DIV');
    largeMediaItemInfo.setAttribute('class', 'large-media-item-info');
    const largeMediaItemMetadata = document.createElement('DIV');
    largeMediaItemMetadata.setAttribute('class', 'large-media-item-metadata');
    const h3 = document.createElement('H3');
    h3.appendChild(document.createTextNode(obj.title));
    largeMediaItemMetadata.appendChild(h3);
    largeMediaItemInfo.appendChild(largeMediaItemMetadata);
    details.appendChild(largeMediaItemInfo);
    videoRenderer.appendChild(details);
    return videoRenderer;
}

function play() {
    const item = items[playIndex];
    document.title = `${item.title} - 视频播放 - 回形针`;
    player.setAttribute('src', item.src);
    document.querySelector('.slim-video-metadata-title').textContent = item.title;
}


function render(string, objList) {
    let offset = 0;
    const results = [];
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === '{' && string.charAt(i + 1) === '{') {
            results.push(['0', string.substring(offset, i)]);
            let index = string.indexOf("}}", i + 2);
            results.push(['1', string.substring(i + 2, index)]);
            offset = index + 2;
        }
    }
    if (offset < string.length) {
        results.push(['0', string.substring(offset)]);
    }

    return objList.map(obj => results.map(i => {
        if (i[0] === '0') {
            return i[1];
        } else {
            return obj[i[1]];
        }
    }).join('')).join('');
}
