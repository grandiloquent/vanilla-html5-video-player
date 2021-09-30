(function () {
    class Tabs {
        constructor() {

        }

        initialize(container) {
            const template = `
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
    `;

            const root = container.attachShadow({mode: 'open'});
            root.innerHTML = template;
            this.root = root;
            return this;
        }

        hide() {

        }

        show() {
            const tabsIndicator = this.root.querySelector('.tabs-indicator');
            const tabsItems = this.root.querySelectorAll('.tabs-item');
            const width = tabsItems[0].getBoundingClientRect().width;
            const x = tabsItems[1].getBoundingClientRect().x;
            const scale = width / 32;
            const middle = (width - 32) / 2;
            tabsIndicator.style.transform = `translate3d(${middle}px, 0px, 0px) scale3d(${scale}, 1, 1)`;

            tabsItems[0].addEventListener('click', ev => {
                tabsIndicator.style.transform = `translate3d(${middle}px, 0px, 0px) scale3d(${scale}, 1, 1)`;
                tabsIndicator.style.transition = '400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
                tabsIndicator.style.animation = '400ms ease 0s 1 normal none running qs-timer';
                if (this.onLeft)
                    this.onLeft();
            });

            tabsItems[1].addEventListener('click', ev => {
                tabsIndicator.style.transform = `translate3d(${middle + x}px, 0px, 0px) scale3d(${scale}, 1, 1)`;
                tabsIndicator.style.transition = '400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
                tabsIndicator.style.animation = '400ms ease 0s 1 normal none running qs-timer';

                if (this.onRight)
                    this.onRight();
            });
            tabsIndicator.addEventListener('transitionend', ev => {
                tabsIndicator.style.transition = '';
                tabsIndicator.style.animation = '';

            });
        }

        static onLeftClick(value) {
            this.onLeft = value;
        }

        static onRightClick(value) {
            this.onRight = value;
        }
    }

    window.Tabs = Tabs;
})()