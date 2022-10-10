//* FORMULARIO DE CONTACTO
((d,w)=>{
	const $form = d.querySelector('.form--contact');
	const $loader = d.querySelector('.contact-form-loader');
	const $response = d.querySelector('.contact-form-response');
	const $btn_submit = d.querySelector('input[type="submit"]');

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
			location.hash = '#gracias';
			$form.reset();
		})
		.catch( err => {
			let message = err.statusText || 'Ocurrio un error al enviar, intenta nuevamente =s';
            $response.querySelector('h3').innerHTML = `Error ${err.status}: ${message}`
		})
		.finally(() => {
            $loader.classList.add('none');
			$btn_submit.classList.remove('none');

            setTimeout(() => {
				location.hash = '#close';
            }, 1500);
        })
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

		d.addEventListener('click',function(e){
			if( e.target.matches(selector)) {
				w.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}
		});
	}

	scrollTopBottom('.scroll-top-btn');

})(document,window)







