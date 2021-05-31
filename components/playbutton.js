class CustomPlayButton extends HTMLElement {
    static get observedAttributes() {
        return ['status'];
    }
    // Fires when an instance of the element is created or updated
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        const style = document.createElement('style');
        style.textContent = CustomPlayButton.getStyle();
        this.root.appendChild(style);
        const playerControlPlayPauseIcon = document.createElement('BUTTON');

        const c3Icon = document.createElement('C3-ICON');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '24');
        svg.setAttribute('enable-background', 'new 0 0 24 24');
        const g = document.createElementNS('http://www.w3.org/2000/svg','g');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M6,4l12,8L6,20V4z');
        g.appendChild(path);
        svg.appendChild(g);
        c3Icon.appendChild(svg);
        playerControlPlayPauseIcon.appendChild(c3Icon);
        this.root.appendChild(playerControlPlayPauseIcon);
        this.path = path;
    }

    // Fires when an instance was inserted into the document
    connectedCallback() {}

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (newVal === 'pause') {
            this.path.setAttribute('d','M6,4l12,8L6,20V4z');
        }
        else if(newVal==='play'){
            this.path.setAttribute('d','M9,19H7V5H9ZM17,5H15V19h2Z');
        }else if(newVal==='restart'){
            this.path.setAttribute('d','M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38 C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74C3,7.65,3.03,7.57,3.07,7.49 C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z');
        }
    }

    // Fires when an element is moved to a new document
    adoptedCallback() {}

    static getStyle() {
        return `
        button{
            height: 56px;
    width: 56px;
    padding: 0;
    margin: 0 60px;
    border: none;
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font: inherit;
    text-transform: inherit;
    color: inherit;
        }
        c3-icon {
            height: 56px;
            width: 56px;
            padding: 0;
            display: inline-block;
            flex-shrink: 0;
            fill: currentColor;
            stroke: none;
        }
        svg {
            width: 100%;
            height: 100%;
        }
        path {
            fill: #ffffff;
        }`;
    }
}
customElements.define('custom-play-button', CustomPlayButton);
// <custom-play-button></custom-play-button>
// <script src="./components/playbutton.js"></script>