class CustomSection extends HTMLElement{static get observedAttributes(){return["title"]}constructor(){super()}attributeChangedCallback(n){n==="title"&&this.container&&(this.container.querySelector("h2").textContent=this.title)}connectedCallback(){this.root=this.attachShadow({mode:"open"});this.container=document.createElement("div");this.root.appendChild(this.container);this.container.innerHTML=CustomSection.template();this.title&&(this.container.querySelector("h2").textContent=this.title)}disconnectedCallback(){}static template(){return`
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
        `}}customElements.define("custom-section",CustomSection);const video=document.querySelector("video"),player=document.querySelector(".player");video.muted=!0;video.autoplay=!0;video.addEventListener("durationchange",()=>{const n=video.videoHeight/video.videoWidth;player.style.width=`${window.innerWidth}px`;player.style.height=`${window.innerWidth*n}px`});const playButton=document.querySelector(".csjovr");playButton.addEventListener("click",()=>{console.log("--------------------->"),video.play(),playButton.style.display="none"})