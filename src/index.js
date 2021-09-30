const meituan = document.querySelector('#meituan');

const tabs = new Tabs();
tabs.initialize(meituan).show();
tabs.onLeft = () => {
    document.getElementById('tab-1').style.display = "block";
    document.getElementById('tab-2').style.display = "none";
};
tabs.onRight = () => {
    document.getElementById('tab-1').style.display = "none";
    document.getElementById('tab-2').style.display = "block";
};

const items = [
    {
        "href": "http://dpurl.cn/NiQeiGkz",
        "image": "1507072232.jpg",
    },
    {
        "href": "http://dpurl.cn/HplOAGYz",
        "image": "670216631.jpg",
    }
];
let results = [];
items.forEach(item => {
    results.push(`<div class="card">
            <a href="${item.href}" class="card-wrapper">
                <img data-src="${item.image}">
            </a>
        </div>`);
});
document.getElementById('tab-1').innerHTML = results.join('');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = `../images/${entry.target.dataset.src}`;
            observer.unobserve(entry.target);
        }
    })
});
document.querySelectorAll('.card-wrapper>img')
    .forEach(img => observer.observe(img));