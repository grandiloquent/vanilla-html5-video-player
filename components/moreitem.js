class CustomMoreItem extends HTMLElement {
    static get observedAttributes() {
        return ['d'];
    }
    // Fires when an instance of the element is created or updated
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        const style = document.createElement('style');
        style.textContent = CustomMoreItem.getStyle();
        this.root.appendChild(style);

        const button = document.createElement('BUTTON');
        const div = document.createElement('DIV');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('enable-background', 'new 0 0 24 24');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', '24');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z');
        svg.appendChild(path);
        div.appendChild(svg);
        button.appendChild(div);

        this.root.appendChild(button);
        this.path = path;
    }

    // Fires when an instance was inserted into the document
    connectedCallback() {}

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.path.setAttribute('d', newVal);
    }

    // Fires when an element is moved to a new document
    adoptedCallback() {}

    static getStyle() {
        return `
        button {
            border: none;
            background: transparent;
            padding: 12px;
            height: 48px;
            width: 48px;
            box-sizing: border-box;
        }
        div{
            display: inline-block;
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            fill: currentColor;
            stroke: none;
        }
        svg {
            width: 100%;
            height: 100%;
        }`;
    }
}
customElements.define('custom-more-item', CustomMoreItem);