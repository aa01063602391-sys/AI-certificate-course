'use strict';

const applicationDialog = document.querySelector('#apply-dialog');
let applicationTrigger;

for (const button of document.querySelectorAll('[data-apply]')) {
  button.addEventListener('click', () => {
    applicationTrigger = button;
    applicationDialog.showModal();
  });
}

document.querySelector('#close-dialog').addEventListener('click', () => {
  applicationDialog.close();
});

applicationDialog.addEventListener('close', () => {
  applicationTrigger?.focus();
});

applicationDialog.addEventListener('click', (event) => {
  if (event.target !== applicationDialog) return;
  const bounds = applicationDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    applicationDialog.close();
  }
});
