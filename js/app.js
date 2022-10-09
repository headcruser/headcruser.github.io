//* FORMULARIO DE CONTACTO
((d,w)=>{
	const $form = d.querySelector('.form--contact');

	$form.addEventListener('submit',function(e){
		e.preventDefault();

		fetch('https://formsubmit.co/ajax/headcruser@gmail.com',{
			method:'POST',
			body: new FormData(e.target)
		})
		.then(res => res.ok ? res.json(): Promise.reject(res) )
		.then(json => {
			console.log(json);
			$form.reset();
		})
		.catch( err => err)
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







