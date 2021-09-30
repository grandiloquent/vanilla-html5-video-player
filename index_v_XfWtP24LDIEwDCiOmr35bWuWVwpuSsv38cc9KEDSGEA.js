(function(){class n{constructor(){}initialize(n){const i=`
<style>
.tabs {
        border-bottom: 1px solid #dadce0;
        background-color: #fff;
        padding: 0 16px;
        display: block;
        color: #fff;
        position: relative;
        z-index: 0;
    }

    .tabs-wrapper {
        font-family: Roboto-Medium, HelveticaNeue-Medium, Helvetica Neue, sans-serif-medium, Arial, sans-serif;
        overflow: hidden;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
    }

    .tabs-inner {
        white-space: nowrap;
        position: relative;
        z-index: 1;
        color: #202124;
    }

    .tabs-indicator {
        background-color: white;
        bottom: 0;
        height: 2px;
        left: -1px;
        right: 0;
        position: absolute;
        width: 0;
    }

    .tabs-item {
        box-sizing: border-box;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        text-overflow: ellipsis;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        white-space: normal;
        outline: 0;
        color: #202124;
        width: 50%;
        border-color: #3172E0;
        height: 45px;
        padding: 0 16px;
    }

    .tabs-text-wrapper {
        display: inline-block;
        vertical-align: middle;
        font-family: Google Sans, Roboto-Medium, HelveticaNeue-Medium, Helvetica Neue, sans-serif-medium, Arial, sans-serif !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        display: -webkit-inline-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 16px;
        word-break: break-word;
    }

    .tabs-text {
        font: 14px/20px Google Sans, Roboto-Medium, HelveticaNeue-Medium, Helvetica Neue, sans-serif-medium, Arial, sans-serif;
        text-transform: none;
        font-family: Google Sans, Roboto, Helvetica Neue, Arial, sans-serif;
        font-weight: 400;
    }

    @-webkit-keyframes qs-timer {
        0% {
        }
    }
</style>
 <div class="tabs">
        <div class="tabs-wrapper">
            <div class="tabs-inner">
                <div class="tabs-indicator" style="background-color: rgb(49, 114, 224);width:32px;">
                </div>
                <a class="tabs-item">
                    <div class="tabs-text-wrapper">
                        <div class="tabs-text">美团</div>
                    </div>
                    <div style="min-height: 45px;display: inline-block;vertical-align: middle;"></div>
                </a>
                <a class="tabs-item">
                    <div class="tabs-text-wrapper">
                        <div class="tabs-text">滴滴</div>
                    </div>
                    <div style="min-height: 45px;display: inline-block;vertical-align: middle;"></div>
                </a>
            </div>
        </div>
    </div>
    `,t=n.attachShadow({mode:"open"});return t.innerHTML=i,this.root=t,this}hide(){}show(){const n=this.root.querySelector(".tabs-indicator"),t=this.root.querySelectorAll(".tabs-item"),u=t[0].getBoundingClientRect().width,f=t[1].getBoundingClientRect().x,i=u/32,r=(u-32)/2;n.style.transform=`translate3d(${r}px, 0px, 0px) scale3d(${i}, 1, 1)`;t[0].addEventListener("click",()=>{n.style.transform=`translate3d(${r}px, 0px, 0px) scale3d(${i}, 1, 1)`,n.style.transition="400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",n.style.animation="400ms ease 0s 1 normal none running qs-timer",this.onLeft&&this.onLeft()});t[1].addEventListener("click",()=>{n.style.transform=`translate3d(${r+f}px, 0px, 0px) scale3d(${i}, 1, 1)`,n.style.transition="400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",n.style.animation="400ms ease 0s 1 normal none running qs-timer",this.onRight&&this.onRight()});n.addEventListener("transitionend",()=>{n.style.transition="",n.style.animation=""})}static onLeftClick(n){this.onLeft=n}static onRightClick(n){this.onRight=n}}window.Tabs=n})();const meituan=document.querySelector("#meituan"),tabs=new Tabs;tabs.initialize(meituan).show();tabs.onLeft=()=>{document.getElementById("tab-1").style.display="block",document.getElementById("tab-2").style.display="none"};tabs.onRight=()=>{document.getElementById("tab-1").style.display="none",document.getElementById("tab-2").style.display="block"};const items=[{href:"http://dpurl.cn/NiQeiGkz",image:"1507072232.jpg"},{href:"http://dpurl.cn/HplOAGYz",image:"670216631.jpg"}];let results=[];items.forEach(n=>{results.push(`<div class="card">
            <a href="${n.href}" class="card-wrapper">
                <img data-src="${n.image}">
            </a>
        </div>`)});document.getElementById("tab-1").innerHTML=results.join("");const observer=new IntersectionObserver(n=>{n.forEach(n=>{n.isIntersecting&&(n.target.src=`../images/${n.target.dataset.src}`,observer.unobserve(n.target))})});document.querySelectorAll(".card-wrapper>img").forEach(n=>observer.observe(n))