class CustomProgressBar extends HTMLElement {
    static get observedAttributes() {
        return ['played', 'loaded'];
    }
    // Fires when an instance of the element is created or updated
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        const style = document.createElement('style');
        style.textContent = CustomProgressBar.getStyle();
        this.root.appendChild(style);
       
        const progressBarLine = document.createElement('DIV');
        progressBarLine.setAttribute('id', 'progress-bar-line');
        const progressBarBackground = document.createElement('DIV');
        progressBarBackground.setAttribute('id', 'progress-bar-background');
        progressBarLine.appendChild(progressBarBackground);
        const progressBarLoaded = document.createElement('DIV');
        progressBarLoaded.setAttribute('id', 'progress-bar-loaded');
        progressBarLine.appendChild(progressBarLoaded);
        const progressBarPlayed = document.createElement('DIV');
        progressBarPlayed.setAttribute('id', 'progress-bar-played');
        progressBarLine.appendChild(progressBarPlayed);
        this.root.appendChild(progressBarLine);
        const progressBarPlayheadWrapper = document.createElement('DIV');
        progressBarPlayheadWrapper.setAttribute('id', 'progress-bar-playhead-wrapper');
        const progressBarPlayhead = document.createElement('DIV');
        progressBarPlayhead.setAttribute('id', 'progress-bar-playhead');
        const progressBarPlayheadDot = document.createElement('DIV');
        progressBarPlayheadDot.setAttribute('id', 'progress-bar-playhead-dot');
        progressBarPlayhead.appendChild(progressBarPlayheadDot);
        progressBarPlayheadWrapper.appendChild(progressBarPlayhead);
        this.root.appendChild(progressBarPlayheadWrapper);
         
        this.progressBarPlayed = progressBarPlayed;
        this.progressBarPlayheadWrapper = progressBarPlayheadWrapper;
        this.progressBarLoaded = progressBarLoaded;

    }

    // Fires when an instance was inserted into the document
    connectedCallback() {}

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'played') {
            this.progressBarPlayed.style.width = newVal;
            this.progressBarPlayheadWrapper.style.marginLeft = newVal;
        } else if (attrName === 'loaded') {
            this.progressBarLoaded.style.width = newVal ;
        }
    }

    // Fires when an element is moved to a new document
    adoptedCallback() {}
    static getStyle() {
        return `

        :host {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 12px 0 16px;
            width: 100%;
            overflow: visible;
            cursor: pointer;
        }
        
        #progress-bar-line {
            top: 50%;
            transform: translateY(-50%);
            padding: 24px 0;
            width: -webkit-calc(100% - 12px - 16px);
            position: absolute;
            height: 3px;
        }
        
        #progress-bar-background {
            position: absolute;
            height: 3px;
            width: 100%;
            background-color: #ffffff;
            opacity: .3;
        }
        
        #progress-bar-loaded {
            width: 0;
            position: absolute;
            height: 3px;
            background-color: #ffffff;
            opacity: .6;
            pointer-events: none !important;
        }
        
        #progress-bar-played {
            width: 0%;
            position: absolute;
            height: 3px;
            background-color: #ff0000;
            pointer-events: none !important;
        }
        
        #progress-bar-playhead-wrapper {
            margin-left: 0%;
            z-index: 0;
        }
        
        #progress-bar-playhead {
            display: block;
            padding: 8px 6px 8px 0;
        }
        
        #progress-bar-playhead-dot {
            display: block;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background-color: #ff0000;
        }
        `;
    }
}
customElements.define('custom-progress-bar', CustomProgressBar);
// <custom-progress-bar></custom-progress-bar>
// <script src="./components/this.root.js"></script>