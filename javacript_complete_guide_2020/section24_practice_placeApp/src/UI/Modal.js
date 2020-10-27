export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }
  show() {
    //template태그를 허용하는지 체크
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      const modalEl = modalElements.querySelector('.modal');
      const backdropEl = modalElements.querySelector('.backdrop');
      const contentEl = document.importNode(
        this.contentTemplateEl.content,
        true
      );
      modalEl.appendChild(contentEl);
      document.body.insertAdjacentElement('afterbegin', modalEl);
      document.body.insertAdjacentElement('afterbegin', backdropEl);
    } else {
      alert(this.fallbackText);
    }
  }
  hide() {
}
