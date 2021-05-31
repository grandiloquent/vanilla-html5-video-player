class CustomTimeDisplay extends HTMLElement {
    static get observedAttributes() {
        return ['duration', 'current'];
    }
    // Fires when an instance of the element is created or updated
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        const style = document.createElement('style');
        style.textContent = CustomTimeDisplay.getStyle();
        this.root.appendChild(style);
        const timeDisplay = document.createElement('DIV');
        timeDisplay.setAttribute('id', 'time-display');
        const timeDisplayContent = document.createElement('DIV');
        timeDisplayContent.setAttribute('id', 'time-display-content');
        const timeFirst = document.createElement('DIV');
        timeFirst.setAttribute('id', 'time-first');
        timeFirst.appendChild(document.createTextNode('0:00'));
        timeDisplayContent.appendChild(timeFirst);
        const timeDelimiter = document.createElement('DIV');
        timeDelimiter.setAttribute('id', 'time-delimiter');
        timeDelimiter.appendChild(document.createTextNode('/'));
        timeDisplayContent.appendChild(timeDelimiter);
        const timeSecond = document.createElement('DIV');
        timeSecond.setAttribute('id', 'time-second');
        timeSecond.appendChild(document.createTextNode('0:00'));
        timeDisplayContent.appendChild(timeSecond);
        timeDisplay.appendChild(timeDisplayContent);
        this.root.appendChild(timeDisplay);

        this.timeFirst = timeFirst;
        this.timeSecond = timeSecond;

    }

    // Fires when an instance was inserted into the document
    connectedCallback() {}

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'duration') {
            this.timeSecond.textContent = newVal;
        } else {
            this.timeFirst.textContent = newVal;
        }
    }

    // Fires when an element is moved to a new document
    adoptedCallback() {}
    static getStyle() {
        return `

        #time-display {
            display: flex;
            align-items: center;
            margin-left: 16px;
            font-weight: 500;
        }
        #time-display-content {
            pointer-events: none;
            display: flex;
            align-items: center;
        }
        
        #time-first,
        #time-second,
        #time-delimiter {
            color: #ffffff;
        }
        
        #time-delimiter {
            opacity: .7;
            margin: 0 4px;
        }
        
        #time-second {
            opacity: .7;
        }
        
        
        `;
    }
}
customElements.define('custom-time-display', CustomTimeDisplay);
// <custom-time-display></custom-time-display>
// <script src="./components/timedisplay.js"></script>