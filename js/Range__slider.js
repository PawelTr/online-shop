const rangeSlider = document.getElementById('Range__slider')
const input0 = document.getElementById('input-0')
const input1 = document.getElementById('input-1')
const inputs = [input0, input1]

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [1000, 1000000],
        connect: true,
        step: 1000,
        range: {
            'min': [1000],
            'max': [1000000]
        }
    });
}

rangeSlider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle])
})

const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
};

inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
    });
});
