(function() {
    function nextSlide(items) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('slider__item--active')) {
                items[i].classList.remove('slider__item--active');
                if (i == items.length - 1) {
                    items[0].classList.add('slider__item--active');
                } else {
                    items[i + 1].classList.add('slider__item--active');
                }
                i = items.length;
            }
        }
    }

    function prevSlide(items) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('slider__item--active')) {
                items[i].classList.remove('slider__item--active');
                if (i == 0) {
                    items[items.length - 1].classList.add('slider__item--active');
                } else {
                    items[i - 1].classList.add('slider__item--active');
                }
                i = items.length;
            }
        }
    }

    let slider = document.querySelector(".slider");

    if (slider) {
        let items = slider.querySelectorAll(".slider__item");
        let btnPrew = slider.querySelector(".slider__link--prew");
        let btnNext = slider.querySelector(".slider__link--next");

        btnNext.addEventListener('click', () => { nextSlide(items) });
        btnPrew.addEventListener('click', () => { prevSlide(items) });
    }
})();
(function() {
    const products = [{
            name: `ELLERY X M’O CAPSULE`,
            descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
            price: 52,
            src: `img/product/product-1.jpg`,
        },
        {
            name: `ELLERY X M’O CAPSULE`,
            descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
            price: 505,
            src: `img/product/product-2.jpg`,
        },
        {
            name: `ELLERY X M’O CAPSULE`,
            descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
            price: 10,
            src: `img/product/product-3.jpg`,
        },
        {

            descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
            price: 13,
            src: `img/product/product-4.jpg`,
        },
        {
            name: `ELLERY X M’O CAPSULE`,
            descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
            price: 21,
            src: `img/product/product-5.jpg`,
        }, {
            name: `ELLERY X M’O CAPSULE`,
            descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
            price: 10000,

        },
        {
            name: `ELLERY X M’O CAPSULE`,
            descr: `Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,

            src: `img/product/product-7.jpg`,
        },
        {
            name: `ELLERY X M’O CAPSULE`,

            price: 1397,
            src: `img/product/product-8.jpg`,
        },
    ];
    /**
     * Функция renderGoodsItem Возвращает разметку, заполненную данными.
     *
     * @param name - Наименование товара
     * @param price - Цена товара
     * @param src - Путь к фото товара
     * @param descr - Описание товара
     * @return html разметка 1 карточки товара
     */
    const renderGoodsItem = (name = "Товар", price = "0", src = "", descr = "описание") => {
        return `<li class="products__item product">
                <div class="product__image-wrap">
                    <img src="${src}" height="420" width="360" alt="${name}">
                    <div class="product__add-to-box-wrap">
                        <button class="product__add-to-box-btn">Add to Cart</button>
                    </div>
                </div>
                <footer class="product__footer">
                    <a href="product-page.html" class="product__link">
                        <h3 class="product__name">${name}</h3>
                        <p class="product__description">${descr}</p>
                        <p class="product__price">
                            $${price}
                        </p>
                    </a>
                </footer>
            </li>`;
    };
    /**
     * Функция renderGoodsList отрисовывает карточки товара в список.
     *
     * @param list - массив объектов с данными товара
     */
    const renderGoodsList = (list) => {
        document.querySelector('.products__wrap').innerHTML = list.map(item => renderGoodsItem(item.name, item.price, item.src, item.descr)).join("");
    }

    renderGoodsList(products);
})();