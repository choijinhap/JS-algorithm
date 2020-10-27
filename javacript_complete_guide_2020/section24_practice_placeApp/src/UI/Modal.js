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
      this.modalEl = modalElements.querySelector('.modal');
      this.backdropEl = modalElements.querySelector('.backdrop');
      const contentEl = document.importNode(
        this.contentTemplateEl.content,
        true
      );
      this.modalEl.appendChild(contentEl);
      document.body.insertAdjacentElement('afterbegin', this.modalEl);
      document.body.insertAdjacentElement('afterbegin', this.backdropEl);
    } else {
      alert(this.fallbackText);
    }
  }
  hide() {
    if (this.modalEl) {
      document.body.removeChild(this.modalEl);
      document.body.removeChild(this.backdropEl);
      this.modalEl = null;
      this.backdropEl = null;
    }
  }
}
