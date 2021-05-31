class CustomDialog extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'placeholder', 'ok'];
    }
    // Fires when an instance of the element is created or updated
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        const style = document.createElement('style');
        style.textContent = CustomDialog.getStyle();
        this.root.appendChild(style);
        const dialogContainer = document.createElement('DIV');
        dialogContainer.setAttribute('class', 'dialog-container');
        const dialog = document.createElement('DIALOG');
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-labelledby', 'dialog-body');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('class', 'dialog');

        const dialogHeader = document.createElement('DIV');
        dialogHeader.setAttribute('id', 'dialog-header');
        dialogHeader.setAttribute('class', 'dialog-header');
        dialogHeader.setAttribute('aria-live', 'polite');
        dialogHeader.style.display = 'none';
        const h2 = document.createElement('H2');
        dialogHeader.appendChild(h2);
        dialog.appendChild(dialogHeader);


        const dialogBody = document.createElement('DIV');
        dialogBody.setAttribute('id', 'dialog-body');
        dialogBody.setAttribute('class', 'dialog-body user-text');
        const commentReplyInput = document.createElement('TEXTAREA');
        commentReplyInput.setAttribute('class', 'comment-reply-input');
        dialogBody.appendChild(commentReplyInput);
        dialog.appendChild(dialogBody);
        const dialogButtons = document.createElement('DIV');
        dialogButtons.setAttribute('class', 'dialog-buttons');
        const buttonRenderer = document.createElement('C3-MATERIAL-BUTTON');
        buttonRenderer.setAttribute('class', 'button-renderer compact ');
        buttonRenderer.setAttribute('data-style', '');
        buttonRenderer.setAttribute('data-icon-only', 'false');
        buttonRenderer.setAttribute('is-busy', 'false');
        buttonRenderer.setAttribute('aria-busy', 'false');
        buttonRenderer.setAttribute('disabled', 'false');
        buttonRenderer.setAttribute('data-button-id', '');
        const c3MaterialButtonButton = document.createElement('BUTTON');
        c3MaterialButtonButton.setAttribute('class', 'c3-material-button-button');
        c3MaterialButtonButton.setAttribute('aria-label', '');
        const cbox = document.createElement('DIV');
        cbox.setAttribute('class', 'cbox');
        const buttonRendererText = document.createElement('DIV');
        buttonRendererText.setAttribute('class', 'button-renderer-text');
        buttonRendererText.textContent = '取消';
        cbox.appendChild(buttonRendererText);
        c3MaterialButtonButton.appendChild(cbox);
        buttonRenderer.appendChild(c3MaterialButtonButton);
        dialogButtons.appendChild(buttonRenderer);

        const buttonRenderer1 = document.createElement('C3-MATERIAL-BUTTON');
        buttonRenderer1.setAttribute('class', 'button-renderer compact ');
        buttonRenderer1.setAttribute('data-style', 'STYLE_PRIMARY');
        buttonRenderer1.setAttribute('data-icon-only', 'false');
        buttonRenderer1.setAttribute('is-busy', 'false');
        buttonRenderer1.setAttribute('aria-busy', 'false');
        buttonRenderer1.setAttribute('disabled', 'false');
        buttonRenderer1.setAttribute('data-button-id', '');

        const c3MaterialButtonButton1 = document.createElement('BUTTON');
        c3MaterialButtonButton1.setAttribute('class', 'c3-material-button-button');
        c3MaterialButtonButton1.setAttribute('aria-label', '');
        const cbox1 = document.createElement('DIV');
        cbox1.setAttribute('class', 'cbox');

        const buttonRendererText1 = document.createElement('DIV');
        buttonRendererText1.setAttribute('class', 'button-renderer-text');
        buttonRendererText1.textContent = "回复";

        cbox1.appendChild(buttonRendererText1);
        c3MaterialButtonButton1.appendChild(cbox1);
        buttonRenderer1.appendChild(c3MaterialButtonButton1);
        dialogButtons.appendChild(buttonRenderer1);
        dialog.appendChild(dialogButtons);
        dialogContainer.appendChild(dialog);
        const c3Overlay = document.createElement('C3-OVERLAY');
        const hiddenButton = document.createElement('BUTTON');
        hiddenButton.setAttribute('class', 'hidden-button');
        hiddenButton.setAttribute('aria-label', 'close');
        c3Overlay.appendChild(hiddenButton);
        dialogContainer.appendChild(c3Overlay);
        this.root.appendChild(dialogContainer);

        this.dialogHeader = dialogHeader;
        this.h2 = h2;
        this.commentReplyInput = commentReplyInput;
        this.buttonRendererText1 = buttonRendererText1;

        c3MaterialButtonButton1.addEventListener('click', ev => {
            const event = new CustomEvent('ok', {
                detail: {
                    string: commentReplyInput.value
                }
            });
            this.dispatchEvent(event);
        });

        c3Overlay.addEventListener('click', event => {
            this.remove();
        });
        c3MaterialButtonButton.addEventListener('click', event => {
            this.remove();
        });
    }

    // Fires when an instance was inserted into the document
    connectedCallback() {}

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case 'title':
                this.dialogHeader.style.display = 'flex';
                this.h2.textContent = newVal;
                break;
            case 'placeholder':
                this.commentReplyInput.setAttribute(attrName, newVal);
                break;
            case 'ok':
                this.buttonRendererText1.textContent = newVal;
                break;
        }
    }

    // Fires when an element is moved to a new document
    adoptedCallback() {}
    static getTemplate(value) {
        return `
        ${CustomDialog.getStyle()}
        <div>
            ${value}
        </div>
        `;
    }
    static getStyle() {
        return `
        .dialog-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
            margin: 0 40px;
            padding: 0;
            padding: 0 env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
        }
        .dialog {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            max-height: 100%;
            max-width: 100%;
            box-sizing: border-box;
            padding: 16px;
            margin: 0 auto;
            overflow-x: hidden;
            overflow-y: auto;
            font-size: 1.3rem;
            color: #030303;
            background-color: #ffffff;
            border: none;
            min-width: 250px;
            max-width: 356px;
        }
        c3-overlay {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            cursor: pointer;
            background-color: rgba(0,0,0,0.8);
        }
        button {
            padding: 0;
            border: none;
            outline: none;
            font: inherit;
            text-transform: inherit;
            color: inherit;
            background: transparent;
        }
        button, select, [role="button"], input[type="checkbox"] {
            cursor: pointer;
        }
        .hidden-button {
            position: fixed;
            top: 0;
            left: 0;
            height: 1px;
            width: 1px;
        }
        .dialog-header {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
        }
        h1, h2, h3, h4 {
            margin: 0 0 3px 0;
        }
        h1, h2, h3, h4, .subhead {
            box-orient: vertical;
            -webkit-box-orient: vertical;
            display: box;
            display: -webkit-box;
            max-height: 2.5em;
            -webkit-line-clamp: 2;
            overflow: hidden;
            line-height: 1.25;
            text-overflow: ellipsis;
            font-weight: normal;
        }
        h2 {
            font-size: 1.8rem;
        }
        .user-text {
            white-space: pre-wrap;
        }
        .dialog-body {
            overflow-y: auto;
            overflow-x: hidden;
            max-height: 300px;
            max-height: 100vh;
        }
        textarea {
            background-color: transparent;
            outline: none;
            box-sizing: border-box;
            border-radius: 0;
            margin-bottom: 1px;
            font: inherit;
            color: #030303;
        }
        textarea {
            -webkit-appearance: none;
            appearance: none;
            min-height: 8.4rem;
            width: 100%;
            border: 1px solid rgba(0,0,0,0.102);
            padding: 8px;
        }
        .comment-reply-input {
            margin: 10px 0;
        }
        .dialog-buttons {
            -webkit-flex-shrink: 0;
            flex-shrink: 0;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            justify-content: flex-end;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            margin-top: 12px;
        }
        c3-material-button {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-user-select: none;
            min-width: 5.14em;
            margin: 0 .29em;
            font-size: 1.4rem;
            text-transform: uppercase;
            -webkit-border-radius: 3px;
            border-radius: 3px;
        }
        .button-renderer {
            position: relative;
        }
        c3-material-button.compact {
            margin: -0.7em -0.57em;
        }
        .c3-material-button-button {
            padding: .7em .57em;
        }
        .cbox, .vbox, .center {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .button-renderer-text {
            -webkit-align-self: center;
            align-self: center;
            min-height: 1em;
            line-height: 1em;
            font-weight: 500;
        }
        c3-material-button.compact+c3-material-button.compact {
            margin-left: .7em;
        }
        .button-renderer[data-style="STYLE_PRIMARY"]:not([disabled="true"]) {
            color: #ffffff;
            background-color: #065fd4;
        }
        `;
    }
}
customElements.define('custom-dialog', CustomDialog);
// <custom-dialog></custom-dialog>
// <script src="./components/dialog.js"></script>