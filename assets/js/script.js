function copyCA() {
  const ca = document.getElementById("ca").innerText.trim();
  const copyButton = document.querySelector(".copy-button");
  
  // Salva o HTML original (ícone + texto)
  const originalHtml = copyButton.innerHTML; 

  navigator.clipboard.writeText(ca).then(() => {
    // Sucesso: Muda o HTML para feedback
    copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
    copyButton.disabled = true;

    // Reverte após 2 segundos
    setTimeout(() => {
      copyButton.innerHTML = originalHtml;
      copyButton.disabled = false;
    }, 2000); 

  }).catch(err => {
    // Erro
    console.error("Falha ao copiar: ", err);
    copyButton.innerHTML = "Erro!";
    
    setTimeout(() => {
      copyButton.innerHTML = originalHtml;
      copyButton.disabled = false;
    }, 2000);
  });
}