class CustomHeader extends HTMLElement {
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
        style.textContent = CustomHeader.getStyle();
        this.root.appendChild(style);

        const container = document.createElement('DIV');
        container.setAttribute('class', 'container');
        const c3Overlay = document.createElement('C3-OVERLAY');
        c3Overlay.setAttribute('hidden', '');
        const hiddenButton = document.createElement('BUTTON');
        hiddenButton.setAttribute('class', 'hidden-button');
        hiddenButton.setAttribute('aria-label', 'Close search');
        c3Overlay.appendChild(hiddenButton);
        container.appendChild(c3Overlay);
        const header = document.createElement('HEADER');

        const mobileTopbarHeaderEndpoint = document.createElement('BUTTON');
        mobileTopbarHeaderEndpoint.setAttribute('aria-label', '回形针');
        mobileTopbarHeaderEndpoint.setAttribute('role', 'link');
        mobileTopbarHeaderEndpoint.setAttribute('class', 'mobile-topbar-header-endpoint');
        const homeIcon = document.createElement('C3-ICON');
        homeIcon.setAttribute('class', 'mobile-topbar-logo ringo-logo');
        homeIcon.setAttribute('id', 'home-icon');

        mobileTopbarHeaderEndpoint.appendChild(homeIcon);
        header.appendChild(mobileTopbarHeaderEndpoint);
        const mobileTopbarBackArrow = document.createElement('BUTTON');
        mobileTopbarBackArrow.setAttribute('hidden', '');
        mobileTopbarBackArrow.setAttribute('aria-label', 'Close search');
        mobileTopbarBackArrow.setAttribute('class', 'mobile-topbar-back-arrow');
        const c3Icon = document.createElement('C3-ICON');
        c3Icon.setAttribute('flip-for-rtl', 'true');
        const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg1.setAttribute('viewBox', '0 0 24 24');
        svg1.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg1.setAttribute('enable-background', 'new 0 0 24 24');
        svg1.setAttribute('height', '24');
        svg1.setAttribute('width', '24');
        const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path3.setAttribute('d', 'M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z');
        svg1.appendChild(path3);
        c3Icon.appendChild(svg1);
        mobileTopbarBackArrow.appendChild(c3Icon);
        header.appendChild(mobileTopbarBackArrow);
        const mobileTopbarHeaderContent = document.createElement('DIV');
        mobileTopbarHeaderContent.setAttribute('hidden', '');
        mobileTopbarHeaderContent.setAttribute('class', 'mobile-topbar-header-content');
        const searchboxForm = document.createElement('FORM');
        searchboxForm.setAttribute('class', 'searchbox-form');
        const searchboxInputWrapper = document.createElement('DIV');
        searchboxInputWrapper.setAttribute('class', 'searchbox-input-wrapper');
        const searchboxInput = document.createElement('INPUT');
        searchboxInput.setAttribute('class', 'searchbox-input title');
        searchboxInput.setAttribute('name', 'search');
        searchboxInput.setAttribute('placeholder', '在 回形针 中搜索');
        searchboxInput.setAttribute('autocomplete', 'off');
        searchboxInput.setAttribute('autocorrect', 'off');
        searchboxInput.setAttribute('spellcheck', 'false');
        searchboxInput.setAttribute('type', 'text');
        searchboxInput.setAttribute('aria-haspopup', 'false');
        searchboxInput.setAttribute('role', 'combobox');
        searchboxInput.setAttribute('aria-autocomplete', 'list');
        searchboxInput.setAttribute('dir', 'ltr');
        searchboxInputWrapper.appendChild(searchboxInput);
        searchboxForm.appendChild(searchboxInputWrapper);
        const input = document.createElement('INPUT');
        input.setAttribute('type', 'submit');
        input.setAttribute('hidden', '');
        searchboxForm.appendChild(input);
        const iconButton = document.createElement('BUTTON');
        iconButton.setAttribute('class', 'icon-button ');
        iconButton.setAttribute('aria-label', 'Search 回形针');
        iconButton.setAttribute('aria-haspopup', 'false');
        const c3Icon1 = document.createElement('C3-ICON');
        const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg2.setAttribute('enable-background', 'new 0 0 24 24');
        svg2.setAttribute('height', '24');
        svg2.setAttribute('viewBox', '0 0 24 24');
        svg2.setAttribute('width', '24');
        const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path4.setAttribute('d', 'M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z');
        svg2.appendChild(path4);
        c3Icon1.appendChild(svg2);
        iconButton.appendChild(c3Icon1);
        searchboxForm.appendChild(iconButton);
        mobileTopbarHeaderContent.appendChild(searchboxForm);
        const searchboxDropdown = document.createElement('DIV');
        searchboxDropdown.setAttribute('class', 'searchbox-dropdown');
        searchboxDropdown.setAttribute('hidden', 'hidden');
        const searchboxDropdownContainer = document.createElement('DIV');
        searchboxDropdownContainer.setAttribute('class', 'searchbox-dropdown-container');
        const a = document.createElement('A');
        a.appendChild(document.createTextNode('Suggestion Removed'));
        searchboxDropdownContainer.appendChild(a);
        searchboxDropdown.appendChild(searchboxDropdownContainer);
        mobileTopbarHeaderContent.appendChild(searchboxDropdown);
        header.appendChild(mobileTopbarHeaderContent);
        const mobileTopbarHeaderContent1 = document.createElement('DIV');
        mobileTopbarHeaderContent1.setAttribute('class', 'mobile-topbar-header-content');
        const iconButton1 = document.createElement('BUTTON');
        iconButton1.setAttribute('class', 'icon-button topbar-menu-button-avatar-button');
        iconButton1.setAttribute('aria-label', 'Search 回形针');
        iconButton1.setAttribute('aria-haspopup', 'false');
        const c3Icon2 = document.createElement('C3-ICON');
        const svg3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg3.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg3.setAttribute('enable-background', 'new 0 0 24 24');
        svg3.setAttribute('height', '24');
        svg3.setAttribute('viewBox', '0 0 24 24');
        svg3.setAttribute('width', '24');
        const path5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path5.setAttribute('d', 'M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z');
        svg3.appendChild(path5);
        c3Icon2.appendChild(svg3);
        iconButton1.appendChild(c3Icon2);
        mobileTopbarHeaderContent1.appendChild(iconButton1);
        const iconButton2 = document.createElement('BUTTON');
        iconButton2.setAttribute('class', 'icon-button topbar-menu-button-avatar-button');
        iconButton2.setAttribute('aria-label', 'Account');
        iconButton2.setAttribute('aria-haspopup', 'true');
        const c3Icon3 = document.createElement('C3-ICON');
        const svg4 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg4.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg4.setAttribute('enable-background', 'new 0 0 24 24');
        svg4.setAttribute('height', '24');
        svg4.setAttribute('viewBox', '0 0 24 24');
        svg4.setAttribute('width', '24');
        const path6 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path6.setAttribute('d', 'M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z');
        svg4.appendChild(path6);
        c3Icon3.appendChild(svg4);
        iconButton2.appendChild(c3Icon3);
        mobileTopbarHeaderContent1.appendChild(iconButton2);
        header.appendChild(mobileTopbarHeaderContent1);
        container.appendChild(header);

        homeIcon.appendChild(this.makeLogo());

        this.root.appendChild(container);

        this.iconButton1 = iconButton1;
        this.c3Overlay = c3Overlay;
        this.mobileTopbarHeaderEndpoint = mobileTopbarHeaderEndpoint;
        this.mobileTopbarBackArrow = mobileTopbarBackArrow;
        this.mobileTopbarHeaderContent = mobileTopbarHeaderContent;
        this.mobileTopbarHeaderContent1 = mobileTopbarHeaderContent1;
        this.header = header;
    }

    makeLogo() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 89 20');
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('transform', 'matrix(1 0 0 1 29.2971 15.4845)');
        text.style.fontFamily = "'FZLTHJW--GB1-0'";
        text.style.fontSize = '18px';
        text.style.fontFamily = 'FZLTHJW--GB1-0';
        text.style.fontSize = '18px';
        text.appendChild(document.createTextNode('回形针'));
        svg.appendChild(text);
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M8.6,12.5c-0.3,0-0.5-0.1-0.7-0.3c-1.9-1.9-1.9-5,0-6.9l3.8-3.8C12.6,0.5,13.8,0,15.1,0s2.5,0.5,3.5,1.4   c1.9,1.9,1.9,5,0,6.9l-1.8,1.8c-0.4,0.4-1.1,0.4-1.5,0s-0.4-1.1,0-1.5l1.8-1.8c1.1-1.1,1.1-2.9,0-4c-0.5-0.5-1.2-0.8-2-0.8   c-0.7,0-1.5,0.3-2,0.8L9.3,6.7c-1.1,1.1-1.1,2.9,0,4c0.4,0.4,0.4,1.1,0,1.5C9.1,12.4,8.8,12.5,8.6,12.5z');
        g.appendChild(path);
        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('d', 'M4.9,20c-1.3,0-2.5-0.5-3.5-1.4c-1.9-1.9-1.9-5,0-6.9l1.8-1.8c0.4-0.4,1.1-0.4,1.5,0c0.4,0.4,0.4,1.1,0,1.5l-1.8,1.8   c-1.1,1.1-1.1,2.9,0,4c0.5,0.5,1.2,0.8,2,0.8s1.5-0.3,2-0.8l3.8-3.8c1.1-1.1,1.1-2.9,0-4c-0.4-0.4-0.4-1.1,0-1.5   c0.4-0.4,1.1-0.4,1.5,0c1.9,1.9,1.9,5,0,6.9l-3.8,3.8C7.4,19.5,6.2,20,4.9,20z');
        g.appendChild(path1);
        svg.appendChild(g);
        return svg;

    }
    // Fires when an instance was inserted into the document
    connectedCallback() {
        this.iconButton1.addEventListener('click', event => {
            this.c3Overlay.removeAttribute('hidden');
            this.mobileTopbarHeaderEndpoint.setAttribute('hidden', 'hidden');
            this.mobileTopbarBackArrow.removeAttribute('hidden');
            this.mobileTopbarHeaderContent.removeAttribute('hidden');
            this.mobileTopbarHeaderContent1.setAttribute('hidden', 'hidden');
            this.header.setAttribute('data-mode', 'searching');
        });
        this.c3Overlay.addEventListener('click', event => {
            this.c3Overlay.setAttribute('hidden', 'hidden');
            this.mobileTopbarHeaderEndpoint.removeAttribute('hidden');
            this.mobileTopbarBackArrow.setAttribute('hidden', 'hidden');
            this.mobileTopbarHeaderContent.setAttribute('hidden', 'hidden');
            this.mobileTopbarHeaderContent1.removeAttribute('hidden');
            this.header.removeAttribute('data-mode');
        });
        this.mobileTopbarBackArrow.addEventListener('click', event => {
            this.c3Overlay.setAttribute('hidden', 'hidden');
            this.mobileTopbarHeaderEndpoint.removeAttribute('hidden');
            this.mobileTopbarBackArrow.setAttribute('hidden', 'hidden');
            this.mobileTopbarHeaderContent.setAttribute('hidden', 'hidden');
            this.mobileTopbarHeaderContent1.removeAttribute('hidden');
            this.header.removeAttribute('data-mode');
        });
        this.mobileTopbarHeaderEndpoint.addEventListener('click', event => {
            window.location.href = '/';
        });
    }

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {}

    // Fires when an element is moved to a new document
    adoptedCallback() {}

    static getStyle() {
        return `
        :host {
            position: fixed;
            padding: 0;
            top: 0;
            left: 0;
            right: 0;
            z-index: 3;
            display: block;
            background-color: #ffffff;
        }
        [hidden][hidden] {
            display: none;
            visibility: hidden
        }


        header {
            position: relative;
            z-index: 2;
            box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
            display: flex;
            align-items: center;
            height: 48px;
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

        button,
        select,
        [role="button"],
        input[type="checkbox"] {
            cursor: pointer;
        }

        c3-icon {
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

        input {
            background-color: transparent;
            padding-bottom: 4px;
            outline: none;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: none;
            -webkit-border-radius: 0;
            border-radius: 0;
            margin-bottom: 1px;
            font: inherit;
            color: #030303;
        }

        input {
            border-bottom-style: solid;
            border-bottom-width: 1px;
            border-bottom-color: #737373;
            text-overflow: ellipsis;
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
        }

        .hidden-button {
            position: fixed;
            top: 0;
            left: 0;
            height: 1px;
            width: 1px;
        }

        .icon-button {
            border: none;
            background: transparent;
            width: 40px;
            height: 40px;
            padding: 8px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

        .mobile-topbar-header-endpoint {
            display: flex;
            align-items: center;
            height: 48px;
            text-align: left;
        }

        .mobile-topbar-logo.ringo-logo {
            width: 89px;
            height: 20px;
            color: #212121;
            margin-left: 0;
            padding: 0 12px;
            display: block;
        }

        .mobile-topbar-header-content {
            flex-grow: 1;
            justify-content: flex-end;
            color: #606060;
            min-width: 0;
            display: flex;
            align-items: center;
        }

        .topbar-menu-button-avatar-button {
            padding: 12px;
            height: 48px;
            width: 48px;
        }

        header[data-mode="searching"] {
            z-index: 3;
            background-color: #f1f1f1;
        }

        .mobile-topbar-back-arrow {
            color: #606060;
            padding: 12px;
        }

        .searchbox-form {
            flex-grow: 1;
            display: flex;
            align-items: center;
        }

        .searchbox-input-wrapper {
            flex-grow: 1;
        }

        .searchbox-input {
            outline: none;
            width: 100%;
            margin-top: 4px;
            flex-grow: 1;
            margin: 0;
            font-size: 1.5rem;
            font-weight: normal;
        }

        .searchbox-dropdown {
            position: absolute;
            top: 48px;
            left: 0;
            right: 0;
        }

        .searchbox-dropdown-container {
            width: 100%;
            position: relative;
            text-align: left;
            font-size: 1.4rem;
            color: #030303;
            background-color: #ffffff;
            margin-top: -1px;
            z-index: 989;
            display: flex;
            flex-direction: column;
        }

        .searchbox-dropdown-container>a {
            padding: 10px 3px 11px 8px;
        }
        `;
    }
}
customElements.define('custom-header', CustomHeader);
// <custom-header></custom-header>
// <script src="./components/header.js"></script>