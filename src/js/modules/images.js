const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        scroll = calcScroll();

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.appendChild(bigImage);
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  };

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      // Стиль для фиксированного размера картинки
      imgPopup.firstChild.classList.add('fix-window');

      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      document.body.classList.add('modal-open');
      document.body.style.marginRight = `${scroll}px`;
    };
    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
    };
  });
};

export default images;