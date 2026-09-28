((d,w)=>{
	//* FORMULARIO DE CONTACTO
	const $form = d.querySelector('.form--contact');
	const $loader = d.querySelector('.contact-form-loader');
	const $response = d.querySelector('.contact-form-response');
	const $btn_submit = $form.querySelector('[type="submit"]');
	const $title = $response.querySelector('h3');
	const $message = $response.querySelector('p');
	const successTitle = $title.textContent;
	const successMessage = $message.textContent;

	$form.addEventListener('submit',function(e){
		e.preventDefault();
		$btn_submit.classList.add('none');
		$loader.classList.remove('none');

		fetch('https://formsubmit.co/ajax/054d237dfd9e2a9f6557bad1e588670e',{
			method:'POST',
			body: new FormData(e.target)
		})
		.then(res => res.ok ? res.json(): Promise.reject(res) )
		.then(json => {
			$title.textContent = successTitle;
			$message.textContent = successMessage;
			$form.reset();
		})
		.catch( err => {
			let message = err.statusText || 'Ocurrió un error al enviar, intenta nuevamente.';
			$title.textContent = err.status ? `Error ${err.status}` : 'Error';
			$message.textContent = message;
		})
		.finally(() => {
			$loader.classList.add('none');
			$btn_submit.classList.remove('none');
			location.hash = '#gracias';

			setTimeout(() => {
				location.hash = '#close';
			}, 1500);
		})
	});

	//* MENU MOVIL
	const $menu = d.querySelector('.menu');
	const $menuBtn = d.querySelector('.menu-btn');

	const toggleMenu = (open) => {
		$menu.classList.toggle('menu--open', open);
		$menuBtn.setAttribute('aria-expanded', open);
		$menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
	}

	$menuBtn.addEventListener('click', () => toggleMenu(!$menu.classList.contains('menu--open')));

	$menu.addEventListener('click', (e) => {
		if (e.target.matches('a')) toggleMenu(false);
	});

	// * SCROLL BUTTON
	const scrollTopBottom = (selector) => {
		const $scrollBtn = d.querySelector(selector);

		w.addEventListener("scroll",function(e){
			let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

			if(scrollTop > 900){
				$scrollBtn.classList.remove('hidden')
			}else {
				$scrollBtn.classList.add('hidden')
			}
		});

		$scrollBtn.addEventListener('click',function(e){
			w.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
	}

	scrollTopBottom('.scroll-top-btn');

	//* AÑO DEL PIE
	d.querySelector('.year').textContent = new Date().getFullYear();

})(document,window)
