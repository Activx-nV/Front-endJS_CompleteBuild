// slider
class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        responsive = []
    }) {
        if (!main || !wrap) {
            console.warn('slider-carousel: необходимо 2 свойства, "main" и "wrap"!');
        }

        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slides = document.querySelector(wrap).children;
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlides: Math.floor(100 / this.slidesToShow)
        };
        this.responsive = responsive;
    }
    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            if (item.className !== 'arrows-services-left' && item.className !== 'arrows-services-right') {
                item.classList.add('glo-slider__item');
            }
        }
    }
    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
			.glo-slider{
				overflow: hidden !important;
			}
			.glo-slider__wrap{
				display: flex !important;
				transition: transform 0.5s !important;
				will-change: transform !important;
			}
			.glo-slider__item{
				flex: 0 0 ${this.options.widthSlides}% !important;
				/*margin: auto 0 !important;*/
			}
			.glo-slider__next{
				
			}
			.glo-slider__prev{
			}
			`;
        document.head.appendChild(style);
    }
    controlSlider() {
        this.next.addEventListener('click', this.nextSlider.bind(this));
        this.prev.addEventListener('click', this.prevSlider.bind(this));
    }
    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            this.responsiveRightArrow();
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow - 1) {
                this.options.position = 0;
                //this.options.position = this.slides.length - this.slidesToShow;
            }
            if (document.documentElement.clientWidth <= 414 && document.documentElement.clientWidth > 320) {
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides + 1.2}%)`;
                console.log('tyt');
            } else if (document.documentElement.clientWidth > 310 && document.documentElement.clientWidth < 414) {
                this.wrap.style.transform = `translateX(-${this.options.position * (this.options.widthSlides - 5)}%)`;
            } else {
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides + 4.5}%)`;
            }
        }
    }
    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            this.responsiveLeftArrow();
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow - 1;
            }
            if (document.documentElement.clientWidth <= 414 && document.documentElement.clientWidth > 320) {
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides + 1.2}%)`;
            } else if (document.documentElement.clientWidth > 310 && document.documentElement.clientWidth < 414) {
                this.wrap.style.transform = `translateX(-${this.options.position * (this.options.widthSlides - 5)}%)`;
            } else {
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides + 4.5}%)`;
            }
        }
    }
    responsiveLeftArrow() {
        const ArrowLeft = document.querySelector('.arrows-services-left');
        const ArrowRight = document.querySelector('.arrows-services-right');
        if (document.documentElement.clientWidth > 1024) {
            ArrowLeft.style.left = '0%';
            switch (this.options.position) {
            case 0:
                ArrowLeft.style.left = '0.5%';
                ArrowRight.style.left = '97.5%';
                break;
            case 1:
                ArrowRight.style.left = '95.5%';
                break;
            case 2:
                ArrowRight.style.left = '96%';
                break;
            case 3:
                ArrowRight.style.left = '96.5%';
                break;
            case 4:
                ArrowRight.style.left = '97%';
                break;
            case 5:
                ArrowRight.style.left = '97.5%';
                break;
            }
        } else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 768) {
            ArrowRight.style.left = '96%';
            switch (this.options.position) {
            case 0:
                ArrowLeft.style.left = '2%';
                ArrowRight.style.left = '96%';
                break;
            case 1:
                ArrowLeft.style.left = '0.5%';
                ArrowRight.style.left = '93.5%';
                break;
            case 2:
                ArrowRight.style.left = '94%';
                ArrowLeft.style.left = '0.5%';
                break;
            case 3:
                ArrowLeft.style.left = '0.5%';
                ArrowRight.style.left = '94.5%';
                break;
            case 4:
                ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '95%';
                break;
            case 5:
                ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '95%';
                break;
            }
        } else if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth < 1024) {
            ArrowLeft.style.left = '2%';
            ArrowLeft.style.top = '16em';
            ArrowRight.style.top = '14em';
            ArrowRight.style.left = '92%';
            switch (this.options.position) {
            case 0:
                ArrowLeft.style.left = '2%';
                ArrowRight.style.left = '92.5%';
                break;
            case 1:
                //ArrowLeft.style.left = '0.5%';
                ArrowRight.style.left = '91%';
                break;
            case 2:
                ArrowRight.style.left = '91%';
                //ArrowLeft.style.left = '0.5%';
                break;
            case 3:
                //ArrowLeft.style.left = '0.5%';
                ArrowRight.style.left = '91.5%';
                break;
            case 4:
                //ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '91.5%';
                break;
            case 5:
                //ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '92%';
                break;
            }
        } else if (document.documentElement.clientWidth <= 576 && document.documentElement.clientWidth < 786) {
            ArrowLeft.style.left = '2%';
            ArrowRight.style.top = '12em';
            ArrowRight.style.left = '80%';
        } else if (document.documentElement.clientWidth <= 320 && document.documentElement.clientWidth < 576) {
            ArrowLeft.style.top = '18em';
            ArrowRight.style.top = '16em';
            ArrowRight.style.left = '90%';
        } else if (document.documentElement.clientWidth <= 414 && document.documentElement.clientWidth < 576) {
            ArrowRight.style.left = '88%';
        }
    }

    responsiveRightArrow() {
        const ArrowLeft = document.querySelector('.arrows-services-left');
        const ArrowRight = document.querySelector('.arrows-services-right');
        if (document.documentElement.clientWidth > 1024) {
            ArrowLeft.style.left = '0%';
            switch (this.options.position) {
            case 0:
                ArrowRight.style.left = '96%';
                break;
            case 1:
                ArrowRight.style.left = '96.5%';
                break;
            case 2:
                ArrowRight.style.left = '97%';
                break;
            case 3:
                ArrowRight.style.left = '97.5%';
                break;
            case 4:
                ArrowRight.style.left = '95.5%';
                break;
            case 5:
                ArrowRight.style.left = '95.5%';
                break;
            }
        } else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 768) {
            ArrowRight.style.left = '96%';
            switch (this.options.position) {
            case 0:
                ArrowLeft.style.left = '2%';
                ArrowRight.style.left = '93.5%';
                break;
            case 1:
                ArrowLeft.style.left = '0.5%';
                ArrowRight.style.left = '94.5%';
                break;
            case 2:
                ArrowRight.style.left = '94.5%';
                ArrowLeft.style.left = '0.5%';
                break;
            case 3:
                ArrowLeft.style.left = '0.5%';
                ArrowRight.style.left = '95%';
                break;
            case 4:
                ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '95.5%';
                break;
            case 5:
                ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '93.5%';
                break;
            }
        } else if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth < 1024) {
            ArrowLeft.style.left = '2%';
            ArrowLeft.style.top = '16em';
            ArrowRight.style.top = '14em';
            ArrowRight.style.left = '92%';
            switch (this.options.position) {
            case 0:
                ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '91%';
                break;
            case 1:
                ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '91%';
                break;
            case 2:
                ArrowRight.style.left = '91%';
                //ArrowLeft.style.left = '0.5%';
                break;
            case 3:
                ArrowLeft.style.left = '1.5%';
                ArrowRight.style.left = '91.5%';
                break;
            case 4:
                //ArrowLeft.style.left = '1%';
                ArrowRight.style.left = '91.5%';
                break;
            case 5:
                ArrowLeft.style.left = '0.5%';
                ArrowRight.style.left = '90.5%';
                break;
            }
        } else if (document.documentElement.clientWidth <= 576 && document.documentElement.clientWidth < 786) {
            ArrowLeft.style.left = '2%';
            ArrowRight.style.top = '12em';
            ArrowRight.style.left = '80%';
        } else if (document.documentElement.clientWidth <= 320 && document.documentElement.clientWidth < 576) {
            ArrowLeft.style.top = '18em';
            ArrowRight.style.top = '16em';
            ArrowRight.style.left = '90%';
        }
    }
    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlides = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlides = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);
    }
    init() {
        this.addGloClass();
        this.addStyle();
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }
    }
}
const sliderСarousel = new SliderCarousel({
    main: '.carousel-wrapper',
    wrap: '.services-slider-carousel',
    prev: '.arrows-services-left', //.arrows-services-left
    next: '.arrows-services-right', //arrows-services-right
    slidesToShow: 5,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 4
    },
    {
        breakpoint: 768,
        slidesToShow: 3
    },
    {
        breakpoint: 576,
        slidesToShow: 3
    },
    {
        breakpoint: 414,
        slidesToShow: 2
    },
    {
        breakpoint: 325,
        slidesToShow: 1
    }
    ]
});

export default sliderСarousel;
