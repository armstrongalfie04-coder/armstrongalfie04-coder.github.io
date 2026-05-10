const yearLabels = document.querySelectorAll(".panel-header strong");

yearLabels.forEach((label) => {
  label.textContent = new Date().getFullYear();
});
