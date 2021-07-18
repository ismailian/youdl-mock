window.addEventListener('load', () => {

  /** handle page scroll event */
  document.body.onscroll = (e) => {
    const y = document.querySelector("html, body").scrollTop;
    if (y == 0) {
      document.querySelector(".navbar").style.boxShadow = null;
      return;
    }
    document.querySelector(".navbar").style.boxShadow = "0 3px 10px rgba(0,0,0,0.5)";
  };


  /** handle tab click event */
  document.body.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener('click', e => {
      if (!tab.classList.contains('active')) {

        /* handle the active class switch */
        document.body.querySelectorAll(".tab").forEach(elm => elm.classList.remove('active'));
        tab.classList.add('active');

        /* handle the content of the tab container */
        const content = document.body.querySelector('.tab-content');

        const name = tab.getAttribute('data-uri');
        const uri = `images/snippets/${name}.png`;
        const size = {
          width: tab.getAttribute('data-width'),
          height: tab.getAttribute('data-height'),
        };

        content.querySelector('img').remove();
        const img = document.createElement("img");
        img.setAttribute('src', uri);
        img.style.width = `${size.width}px`;
        img.style.height = `${size.height}px`;

        content.appendChild(img);
      }
    });
  });

  /** handle the generate-key button click event */
  document.body.querySelector('.generate-key')?.addEventListener('click', e => {
    e.target.innerText = "Generating...";
    setTimeout(() => {
      e.target.classList.remove('btn-success');
      e.target.classList.add('btn-danger');
      e.target.innerText = "You are not authenticated!"
    }, 3000);
  });

});
