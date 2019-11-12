
var contador = 1;

function trocar_slide_a()
{
  contador ++;

  if (contador > 4)
  {
    contador = 1;
  }

  if (contador == 1)
  {
    foto_slide.src = '../IMGS/motorista.png';
    texto_slide.innerHTML = 'O melhor amigo <br> dos motoristas!';
  }

  if (contador == 2)
  {
    foto_slide.src = '../IMGS/celular.png';
    texto_slide.innerHTML = 'Encontre de forma rápida <br> os estacionamentos mais próximos de você';
  }

  if (contador == 3)
  {
    foto_slide.src = '../IMGS/estacionamento.png';
    texto_slide.innerHTML = 'Veja as vagas <br> disponíveis em tempo real';
  }

  if (contador == 4)
  {
    foto_slide.src = '../IMGS/gestor.png';
    texto_slide.innerHTML = 'Mais praticidade <br> para administrar o seu negócio';
  }
}

function trocar_slide_v()
{
  contador --;

  if (contador < 1)
  {
    contador = 4;
  }

  if (contador == 1)
  {
    foto_slide.src = '../IMGS/motorista.png';
    texto_slide.innerHTML = 'O melhor amigo <br> dos motoristas!';
  }

  if (contador == 2)
  {
    foto_slide.src = '../IMGS/celular.png';
    texto_slide.innerHTML = 'Encontre de forma rápida <br> os estacionamentos mais próximos de você';
  }

  if (contador == 3)
  {
    foto_slide.src = '../IMGS/estacionamento.png';
    texto_slide.innerHTML = 'Veja as vagas <br> disponíveis em tempo real';
  }

  if (contador == 4)
  {
    foto_slide.src = '../IMGS/gestor.png';
    texto_slide.innerHTML = 'Mais praticidade <br> para administrar o seu negócio';
  }
}

function passar_slide_tempo()
{
  setInterval (function()
  {
    if (contador > 4)
    {
        contador = 1;
    }

    if (contador == 1)
    {
        foto_slide.src = '../IMGS/motorista.png';
        texto_slide.innerHTML = 'O melhor amigo <br> dos motoristas!';
    }

    if (contador == 2)
    {
        foto_slide.src = '../IMGS/celular.png';
        texto_slide.innerHTML = 'Encontre de forma rápida <br> os estacionamentos mais próximos de você';
    }

    if (contador == 3)
    {
        foto_slide.src = '../IMGS/estacionamento.png';
        texto_slide.innerHTML = 'Veja as vagas <br> disponíveis em tempo real';
    }

    if (contador == 4)
    {
        foto_slide.src = '../IMGS/gestor.png';
        texto_slide.innerHTML = 'Mais praticidade <br> para administrar o seu negócio';
    }

    contador ++;

  } , 3000);
}