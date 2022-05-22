class CustomSection extends HTMLElement {
    static get observedAttributes() {
        return ['title'];
    }

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title') {
           if(this.container){
               this.container.querySelector('h2')
                   .textContent = this.title;
           }
        }
    }

    connectedCallback() {
        this.root = this.attachShadow({mode: 'open'});
        this.container = document.createElement('div');
        this.root.appendChild(this.container);
        this.container.innerHTML = CustomSection.template();
        if (this.title) {
            this.container.querySelector('h2')
                .textContent = this.title;
        }
    }

    disconnectedCallback() {
    }

    static template() {
        return `
            <style>

                .furhpo{
                    
margin: 0;
padding: 0;
font: 500 16px/20px "Google Sans",Roboto,Arial,sans-serif;
letter-spacing: .1px;
color:  #202124;
margin-bottom: 16px;
                    }

                .klhtjh{
                    
display: block;
position: relative;
margin-top: 49px;
                    }
                    .klhtjh::before {
    background-color: #dadce0;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    top: -25px;
}
            </style>
    <div class="klhtjh">
        <h2 class="furhpo">
             
        </h2>
        <slot></slot>
    </div>
        `;
    }
}

customElements.define('custom-section', CustomSection);
/*
<custom-section>
</custom-section>
<script src="../components/section.js"></script>
*/
