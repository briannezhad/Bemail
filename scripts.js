document.querySelector('#compose').addEventListener('click', function (evt) {
  mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog')).open()
});
