class CustomToolbarItem extends HTMLElement {
    static get observedAttributes() {
        return ["name", "d"];
    }
    // Fires when an instance of the element is created or updated
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        const style = document.createElement('style');
        style.textContent = CustomToolbarItem.getStyle();
        this.root.appendChild(style);

        const c3MaterialButtonButton = document.createElement('BUTTON');
        c3MaterialButtonButton.setAttribute('class', 'c3-material-button-button');
        c3MaterialButtonButton.setAttribute('aria-label', 'Save to playlist');
        const cbox = document.createElement('DIV');
        cbox.setAttribute('class', 'cbox');
        const buttonRendererIcon = document.createElement('C3-ICON');
        buttonRendererIcon.setAttribute('class', 'button-renderer-icon');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('enable-background', 'new 0 0 24 24');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '24');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M18.984 21v-14.016h-10.969v14.016h10.969zM18.984 5.016q0.797 0 1.406 0.586t0.609 1.383v14.016q0 0.797-0.609 1.406t-1.406 0.609h-10.969q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h10.969zM15.984 0.984v2.016h-12v14.016h-1.969v-14.016q0-0.797 0.586-1.406t1.383-0.609h12z');
        svg.appendChild(path);
        buttonRendererIcon.appendChild(svg);
        cbox.appendChild(buttonRendererIcon);
        const buttonRendererText = document.createElement('DIV');
        buttonRendererText.setAttribute('class', 'button-renderer-text');
        buttonRendererText.textContent = "复制";
        cbox.appendChild(buttonRendererText);
        c3MaterialButtonButton.appendChild(cbox);
        this.root.appendChild(c3MaterialButtonButton);
        this.path = path;
        this.buttonRendererText = buttonRendererText;

    }

    // Fires when an instance was inserted into the document
    connectedCallback() {}

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case "name": {
                this.buttonRendererText.textContent = newVal;
                break;
            }
            case "d": {
                this.path.setAttribute('d', newVal);
            }
        }
    }

    // Fires when an element is moved to a new document
    adoptedCallback() {}
    static getTemplate(value) {
        return `
        ${CustomToolbarItem.getStyle()}
        <div>
            ${value}
        </div>
        `;
    }
    static getStyle() {
        return `
        :host{
            font-size: 1.2rem;
            text-transform: none;
            min-width: 0;
            align-items: flex-start;
            margin: -0.7em 0;
            margin-left: .7em;
            flex: 1 1;
            position: relative;
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            border-radius: 3px;
        }
        
        button {
            overflow: hidden;
            padding: .7em .57em;
            cursor: pointer;
            border: none;
            outline: none;
            font: inherit;
            text-transform: inherit;
            color: inherit;
            background: transparent;
        }
        
        .cbox {
            flex-direction: column;
            display: flex;
            align-items: center;
        }
        
        c3-icon {
            margin: 0 8px;
            display: inline-block;
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            fill: currentColor;
            stroke: none;
        }
        
        c3-icon>svg {
            width: 100%;
            height: 100%;
        }
        
        .button-renderer-text {
            align-self: center;
            min-height: 1em;
            line-height: 1em;
            font-weight: 500;
            margin-top: 7px;
        }
        `;
    }
}
customElements.define('custom-toolbar-item', CustomToolbarItem);
// <custom-toolbar-item></custom-toolbar-item>
// <script src="./components/toolbaritem.js"></script>