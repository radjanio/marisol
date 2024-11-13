let index = 0;

function mudarImagemAutomaticamente() {
  const imagens = document.querySelectorAll('.carousel-images img');
  const totalImagens = imagens.length;

  index = (index + 1) % totalImagens;
  
  // Muda a posição da faixa de imagens com base no índice atual
  document.querySelector('.carousel-images').style.transform = `translateX(-${index * 20}%)`;
}

// Troca de imagem a cada 3 segundos
setInterval(mudarImagemAutomaticamente, 3000);
