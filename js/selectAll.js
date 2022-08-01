const checkAll = document.querySelector('#checkAll');
const chkbxOptions = document.querySelectorAll('input[name=check]');

const chkbxAll = () => {
    const isChecked = checkAll.checked;

    for(let i=0; i < chkbxOptions.length; i++) {
        chkbxOptions[i].checked = isChecked;
}};



checkAll.addEventListener('change', () => {
    Array.from(chkbxOptions).map( (checkbox) => {
        checkbox.checked = checkAll.checked;
    });
});


