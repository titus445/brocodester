window.adbro = window.adbro || {};
window.adbro.publisher = 'd6f93e45-fa84-4c80-9095-eabda1947032';
window.adbro.config = {
    selectors: {
        images: '.node .field__item img,' +
            '.node .field img'
    },
    functions: {
        onPlaceholderSized: function(div, img) {
            let block = img.closest('a');
            div.style.marginBottom = '-' + img.offsetHeight + 'px';
            div.style.display = 'block';
            if (block && (!block.nextElementSibling || block.nextElementSibling && block.nextElementSibling !== div)) {
                block.parentNode.insertBefore(div, block.nextSibling);
            }
        },
        getSatellitePlaceholder: function(div) {
            let satellite = document.createElement('div');
            satellite.style.width = div.style.width;
            div.parentNode.appendChild(satellite);
            return satellite;
        },
        getImages: function() {
            let imgs = window.top.document.querySelectorAll(window.adbro.config.selectors.images),
                minSize = (window.top.innerWidth < 800) ? 200 : 300,
                chkdImgs = [];
            for (let img of imgs) {
                if (img.offsetWidth > minSize && img.offsetHeight > minSize - 50) chkdImgs.push(img);
            }
            if (chkdImgs.length > 3) return [chkdImgs[3]];
            if (chkdImgs.length > 2) return [chkdImgs[2]];
            if (chkdImgs.length > 1) return [chkdImgs[1]];
            if (chkdImgs.length) return [chkdImgs[0]];
            return [];
        }
    }
};
if (window.top.innerWidth < 800) {
    window.adbro.publisher = '45ba194c-bc7c-4efc-8da2-c7ccc3b48173';
}
ptag('config', window.adbro.config);
ptag('config', 'slot', window.adbro.publisher);