const form = document.querySelector('.img-upload__form');

new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text-error',
});
