class CustomLoadDialog extends HTMLElement {
    static get observedAttributes() {
        return [];
    }
    // Fires when an instance of the element is created or updated
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        const style = document.createElement('style');
        style.textContent = CustomLoadDialog.getStyle();
        this.root.appendChild(style);

        const c3Overlay = document.createElement('c3-overlay');
        c3Overlay.style.zIndex = '999';

        const div = document.createElement('div');
        div.className = 'spinner';
        c3Overlay.appendChild(div);

        this.root.appendChild(c3Overlay);
    }

    // Fires when an instance was inserted into the document
    connectedCallback() {}

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {}

    // Fires when an element is moved to a new document
    adoptedCallback() {}
    static getStyle() {
        return `
        @keyframes spinner {
            0% {
                transform: rotate(0deg)
            }
        
            to {
                transform: rotate(360deg)
            }
        }
        
        .spinner {
            display: block;
            box-sizing: border-box;
            margin: 12px auto;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid #eee;
            border-top-color: #666;
            animation: spinner .8s linear infinite
        }
        
        .spinner:not([hidden]) {
            color: #333;
            font-size: 1.6rem
        }
        c3-overlay {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.8);
            display:flex;
            align-items:center;
        }

        `;
    }
}
customElements.define('custom-load-dialog', CustomLoadDialog);
// <custom-load-dialog></custom-load-dialog>
// <script src="./components/loaddialog.js"></script>