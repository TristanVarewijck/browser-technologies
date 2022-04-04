function showPreview(event) {
  if (event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("file-ip");
    preview.src = src;
    preview.style.display = "block";
  }
}
