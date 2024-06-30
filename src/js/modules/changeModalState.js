import checkNumInputs from "./checkNumInputs";

const changeModalstate = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox'),
        maxWidth = 6000,
        maxHeight = 2800,
        clearBtnSize = document.querySelector('.multiplication');
  
  checkNumInputs('#width');
  checkNumInputs('#height');

  function maxSize(input) {
    input.forEach(element => {
      element.addEventListener('input', () => {
        let value = element.value;
        console.log(value)
        if (value > maxHeight) { 
          value = maxHeight
        }
      });
    });
  };

  function clearInputSize(btn) {
    btn.addEventListener('click', () => {
      delete state.width;
      delete state.height;
      windowWidth.forEach(item => item.value = '');
      windowHeight.forEach(item => item.value = '');
    });
  }

  function bindActionToElement(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN' :
            state[prop] = i;
            break;
          case 'INPUT' :
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              })
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT' :
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }


  bindActionToElement('click', windowForm, 'form');
  bindActionToElement('input', windowHeight, 'height');
  bindActionToElement('input', windowWidth, 'width');
  bindActionToElement('change', windowType, 'type');
  bindActionToElement('change', windowProfile, 'profile');
  maxSize(windowWidth);
  maxSize(windowHeight);
  clearInputSize(clearBtnSize);
};

export default changeModalstate;