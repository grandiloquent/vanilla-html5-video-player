function buildFullscreen() {
    const element = document.createElement("button");
    element.style.height = "48px";
    element.style.width = "48px";
    element.style.padding = "12px";
    element.style.border = "none";
    element.style.background = "transparent";
    element.style.WebkitBoxSizing = "border-box";
    element.style.boxSizing = "border-box";
    element.style.cursor = "pointer";
    element.style.outline = "none";
    element.style.font = "inherit";
    element.style.textTransform = "inherit";
    element.style.color = "inherit";
    element.style.margin = "0";
    return element;
}

function buildFullScreenSvg() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('enable-background', 'new 0 0 24 24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '24');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
        'd',
        'M7,11H6V6h5v1H7V11z M18,6h-5v1h4v4h1V6z M18,13h-1v4h-4v1h5V13z M11,17H7v-4H6v5h5V17z');
    svg.appendChild(path);
    return svg;
}



function buildIcon() {
    const element = document.createElement("div");
    element.style.display = "inline-block";
    element.style.WebkitFlexShrink = "0";
    element.style.flexShrink = "0";
    element.style.width = "24px";
    element.style.height = "24px";
    element.style.fill = "currentColor";
    element.style.stroke = "none";
    element.style.color = '#fff';
    return element;
}

function buildPlayButton() {
    const element = document.createElement("div");
    element.style.color = "inherit";
    element.style.textTransform = "inherit";
    element.style.font = "inherit";
    element.style.outline = "none";
    element.style.cursor = "pointer";
    element.style.boxSizing = "border-box";
    element.style.background = "transparent";
    element.style.border = "none";
    element.style.margin = "0 60px";
    element.style.padding = "0";
    element.style.width = "56px";
    element.style.height = "56px";
    return element;
}

function buildPlayer() {
    const element = document.createElement("div");
    element.className="player";
    return element;
}

function buildPlayerContainer() {
    const element = document.createElement("div");
    element.style.position = "fixed";
    element.style.top = "48px";
    element.style.right = "0";
    element.style.left = "0";
    element.style.zIndex = "1";
    element.style.overflow = "visible !important";
    return element;
}

function buildPlayerControlContainer() {
    const element = document.createElement("div");
    element.style.WebkitTapHighlightColor = "rgba(0, 0, 0, 0)";
    return element;
}


function buildPlayerControlsBottom() {
    const element = document.createElement("div");
    element.style.alignItems = "center";
    element.style.bottom = "0";
    element.style.width = "100%";
    element.style.position = "absolute";
    element.style.justifyContent = "space-between";
    element.style.display = "flex";
    return element;
}



function buildPlayerControlsMiddle() {
    const element = document.createElement("div");
    element.style.width = "100%";
    element.style.justifyContent = "center";
    element.style.display = "flex";
    element.style.alignItems = "center";
    return element;
}

function buildProgressBar() {
    const element = document.createElement("div");
    element.style.cursor = "pointer";
    element.style.overflow = "visible";
    element.style.width = "100%";
    element.style.padding = "0 12px 0 16px";
    element.style.alignItems = "center";
    element.style.display = "flex";
    element.style.position = "relative";
    return element;
}

function buildProgressBarBackground() {
    const element = document.createElement("div");
    element.style.opacity = ".3";
    element.style.backgroundColor = "#ffffff";
    element.style.width = "100%";
    element.style.height = "3px";
    element.style.position = "absolute";
    return element;
}

function buildProgressBarLine() {
    const element = document.createElement("div");
    element.style.height = "3px";
    element.style.position = "absolute";
    element.style.width = "calc(100% - 12px - 16px)";
    element.style.padding = "24px 0";
    element.style.transform = "translateY(-50%)";
    element.style.top = "50%";
    return element;
}

function buildProgressBarLoaded() {
    const element = document.createElement("div");
    element.style.pointerEvents = "none !important";
    element.style.opacity = ".6";
    element.style.backgroundColor = "#ffffff";
    element.style.height = "3px";
    element.style.position = "absolute";
    element.style.width = "0";
    return element;
}

function buildProgressBarPlayed() {
    const element = document.createElement("div");
    element.style.pointerEvents = "none !important";
    element.style.backgroundColor = "#ff0000";
    element.style.height = "3px";
    element.style.position = "absolute";
    element.style.width = "0%";
    return element;
}

function buildProgressBarPlayhead() {
    const element = document.createElement("div");
    element.style.padding = "8px 6px 8px 0";
    element.style.display = "block";
    return element;
}

function buildProgressBarPlayheadDot() {
    const element = document.createElement("div");
    element.style.backgroundColor = "#ff0000";
    element.style.borderRadius = "50%";
    element.style.width = "12px";
    element.style.height = "12px";
    element.style.display = "block";
    return element;
}

function buildProgressBarPlayheadWrapper() {
    const element = document.createElement("div");
    element.style.zIndex = "0";
    element.style.marginLeft = "0%";
    return element;
}

function buildSpinner() {
    const element = document.createElement("div");
    element.style.display = "block";
    element.style.boxSizing = "border-box";
    element.style.margin = "12px auto";
    element.style.width = "32px";
    element.style.height = "32px";
    element.style.borderRadius = "50%";
    element.style.border = "2px solid #eee";
    element.style.borderTopColor = "#666";
    element.style.animation = "spinner .8s linear infinite";
    return element;
}

function buildTimeDelimiter() {
    const element = document.createElement("div");
    element.style.opacity = ".7";
    element.style.margin = "0 4px";
    element.style.color = "#ffffff";
    return element;
}

function buildTimeDisplay() {
    const element = document.createElement("div");
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.marginLeft = "16px";
    element.style.fontWeight = "500";
    return element;
}

function buildTimeDisplayContent() {
    const element = document.createElement("div");
    element.style.pointerEvents = "none";
    element.style.display = "flex";
    element.style.alignItems = "center";
    return element;
}

function buildTimeFirst() {
    const element = document.createElement("div");
    element.style.color = "#ffffff";
    return element;
}

function buildTimeSecond() {
    const element = document.createElement("div");
    element.style.color = "#ffffff";
    element.style.opacity = ".7";
    return element;
}
export {
    buildFullscreen,
    buildFullScreenSvg,
    buildIcon,
    buildPlayButton,
    buildPlayer,
    buildPlayerContainer,
    buildPlayerControlContainer,
    buildPlayerControlsBottom,
    buildPlayerControlsMiddle,
    buildProgressBar,
    buildProgressBarBackground,
    buildProgressBarLine,
    buildProgressBarLoaded,
    buildProgressBarPlayed,
    buildProgressBarPlayhead,
    buildProgressBarPlayheadDot,
    buildProgressBarPlayheadWrapper,
    buildSpinner,
    buildTimeDelimiter,
    buildTimeDisplay,
    buildTimeDisplayContent,
    buildTimeFirst,
    buildTimeSecond,
}
