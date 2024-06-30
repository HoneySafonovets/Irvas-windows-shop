const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    console.log(scroll)
    trigger.forEach(element => {
      element.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        };

        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = "block";
        // modal.classList.add('animated');
        modal.classList.add('moveUp');
        // modal.classList.remove('bounceInDown');

        // document.body.style.overflow = "hidden";
        if (scroll > 0) {
          document.body.style.marginRight = `${scroll}px`;
        }
        document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = "none";
      // document.body.style.overflow = "";
      windows.forEach(item => {
        item.style.display = 'none'
      });

      document.body.classList.remove('modal-open');
      // modal.classList.remove('bounceInUp');
      // modal.classList.add('bounceInDown');
      
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none'
        });

        modal.style.display = 'none';
        // modal.classList.remove('bounceInUp');
        // modal.classList.add('bounceInDown');
        
        document.body.style.marginRight = `0px`;
        document.body.classList.remove('modal-open');
      };
    });
  };

  function showModalByTimes(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.classList.add('modal-open');
    }, time);
  };

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

  bindModal('.popup_engineer_btn', '.popup_engineer','.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // showModalByTimes('.popup', 60000)
};

export default modals;