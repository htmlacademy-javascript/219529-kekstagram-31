import {effectLevelInputElement, effectNameInputElement, effectsListElement, formImageElement, scaleInputElement, scaleSmallerButton, scaleBiggerButton, sliderContainerElement, sliderElement,} from './const-elements.js';
import {SCALE_CHANGE_STEP, SCALE_MAX, SCALE_MIN, EffectsSettings} from './const-values.js';

let currentScale = SCALE_MAX;

const applyScale = () => {
  scaleInputElement.value = `${currentScale * 100}%`;
  formImageElement.style.transform = `scale(${currentScale})`;
};

const scaleSmallerButtonClickHandler = () => {
  if (currentScale > SCALE_MIN) {
    currentScale -= SCALE_CHANGE_STEP;
    applyScale();
  }
};

const scaleBiggerButtonClickHandler = () => {
  if (currentScale < SCALE_MAX) {
    currentScale += SCALE_CHANGE_STEP;
    applyScale();
  }
};

const setScale = () => {
  applyScale();
  scaleSmallerButton.addEventListener('click', scaleSmallerButtonClickHandler);
  scaleBiggerButton.addEventListener('click', scaleBiggerButtonClickHandler);
};

const resetScale = () => {
  currentScale = SCALE_MAX;
  scaleInputElement.value = '100%';
  formImageElement.style.transform = 'scale(1)';
  scaleBiggerButton.removeEventListener('click', scaleBiggerButtonClickHandler);
  scaleSmallerButton.removeEventListener('click', scaleSmallerButtonClickHandler);
};

// init slider with any options as they will be updated later
const createSlider = () => {
  if (!sliderElement.classList.contains('noUi-target')) {
    noUiSlider.create(sliderElement, {
      range: {min: 0, max: 100},
      start: 100,
      step: 1,
      connect: 'lower', // colors the bar from lower to upper parameters
      format: {
        from: (value) => parseFloat(value),
        to: (value) => Number.isInteger(value)
          ? value.toFixed(0)
          : value.toFixed(1),
      },
    });
  }
};

const resetEffect = () => {
  sliderContainerElement.classList.add('hidden');
  formImageElement.style.filter = '';
  effectNameInputElement.value = '';
  effectLevelInputElement.value = '';
};

const changeEffect = (effect) => {
  const {filter, min, max, step, unit} = EffectsSettings[effect];

  sliderElement.noUiSlider.off('update');
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    start: max,
    step,
  });

  effectNameInputElement.value = effect; // set effect name

  // slider onUpdate
  sliderElement.noUiSlider.on('update', () => {
    effectLevelInputElement.value = sliderElement.noUiSlider.get(); // set effect level
    formImageElement.style.filter = `${filter}(${effectLevelInputElement.value}${unit})`; // apply filter to the img
  });
};

function effectsListElementChangeHandler (evt) {
  const effect = evt.target.value;

  if (effect === 'none') {
    resetEffect();
  }

  if (effect !== 'none') {
    sliderContainerElement.classList.remove('hidden');
    changeEffect(effect);
  }
}

const setEffect = () => {
  createSlider();
  effectsListElement.addEventListener('change', effectsListElementChangeHandler);
};

export {resetScale, setScale, resetEffect, setEffect};
