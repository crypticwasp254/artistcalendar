const switchGif = (gif) => {
    const feature_show_pic = document.querySelector('.product-show img');
    feature_show_pic.src = gif;
};

document.querySelectorAll('.feature-list').forEach((_feature) => {
    _feature.addEventListener('click', () => {
        switchGif(_feature.dataset.gif);
        const feature_info_title = document.querySelector('.feature-info .feature-info-title');
        const feature_info_desc = document.querySelector('.feature-info .more-description');
        feature_info_title.innerHTML = _feature.dataset.title;
        feature_info_desc.innerHTML = _feature.dataset.description;
    });
});
