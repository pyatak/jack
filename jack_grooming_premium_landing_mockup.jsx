export default function JackGroomingLanding() {
  return (
    <div className="min-h-screen bg-[#f8f4ef] text-[#3b3128] font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-6 lg:px-20 pt-8 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf4] to-[#efe4d6] opacity-80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <header className="flex items-center justify-between mb-16">
            <div>
              <h1 className="text-3xl font-black tracking-tight">Джек</h1>
              <p className="text-sm text-[#8c7765]">Premium Grooming Salon</p>
            </div>

            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#services" className="hover:opacity-70 transition">Услуги</a>
              <a href="#gallery" className="hover:opacity-70 transition">Галерея</a>
              <a href="#reviews" className="hover:opacity-70 transition">Отзывы</a>
              <a href="#contacts" className="hover:opacity-70 transition">Контакты</a>
            </nav>
          </header>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-[#d9a36a]" />
                <span className="text-sm">Уютный груминг-салон в Орехово-Зуево</span>
              </div>

              <h2 className="text-5xl lg:text-7xl leading-tight font-black mb-6">
                Заботливый
                <span className="block text-[#c68b52]">груминг</span>
                для любимых питомцев
              </h2>

              <p className="text-lg text-[#6d5d50] max-w-xl mb-10 leading-relaxed">
                Профессиональный уход для собак и кошек в современной спокойной атмосфере.
                Красиво, бережно и без стресса.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-8 py-4 bg-[#c68b52] text-white rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300">
                  Записаться онлайн
                </button>

                <button className="px-8 py-4 bg-white rounded-2xl font-semibold border border-[#e7d6c7] hover:bg-[#fff7ef] transition">
                  WhatsApp
                </button>
              </div>

              <div className="grid grid-cols-2 gap-5 max-w-lg">
                {[
                  'Бережный подход',
                  'Premium-уход',
                  'Комфорт питомца',
                  'Современный салон',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-[#f0e4d8]"
                  >
                    <p className="font-medium">✓ {item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f0d2b1] rounded-full blur-3xl opacity-50" />

              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="Dog"
                className="relative z-10 rounded-[40px] shadow-2xl object-cover h-[650px] w-full hover:scale-[1.02] transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#b4906e] mb-4">
              О салоне
            </p>

            <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Уход, который нравится питомцам
            </h3>

            <p className="text-lg leading-relaxed text-[#6d5d50] mb-6">
              Мы создали пространство, где питомцы чувствуют себя спокойно,
              а владельцы уверены в результате.
            </p>

            <p className="text-lg leading-relaxed text-[#6d5d50]">
              Современный уход, мягкий подход и атмосфера настоящей заботы —
              все, чтобы ваш любимец выглядел и чувствовал себя прекрасно.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#efe3d6] hover:-translate-y-1 transition"
              >
                <div className="text-4xl mb-4">🐾</div>
                <h4 className="font-bold text-lg mb-2">Комфорт и забота</h4>
                <p className="text-sm text-[#7d6f63] leading-relaxed">
                  Спокойная атмосфера и бережный уход для каждого питомца.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 lg:px-20 py-24 bg-[#fffdf9]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-[#b4906e] mb-4">
              Услуги
            </p>
            <h3 className="text-5xl font-black mb-4">Что мы делаем</h3>
            <p className="text-[#76675a] text-lg">
              Профессиональный уход для собак и кошек
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              ['✂️', 'Стрижка собак', 'от 1800 ₽'],
              ['🛁', 'Экспресс-линька', 'от 2200 ₽'],
              ['🐱', 'Уход за кошками', 'от 2000 ₽'],
              ['🐾', 'Стрижка когтей', 'от 400 ₽'],
            ].map(([icon, title, price]) => (
              <div
                key={title}
                className="bg-[#f8f4ef] rounded-[32px] p-8 hover:shadow-xl transition duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{icon}</div>
                <h4 className="text-2xl font-bold mb-3">{title}</h4>
                <p className="text-[#7d6f63] mb-6">
                  Бережный профессиональный уход для вашего питомца.
                </p>
                <div className="font-bold text-[#c68b52] text-xl">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#b4906e] mb-4">
                Галерея
              </p>
              <h3 className="text-5xl font-black">Счастливые хвостики</h3>
            </div>

            <button className="hidden md:block px-6 py-3 rounded-2xl border border-[#e6d5c4] bg-white hover:bg-[#fff7ef] transition">
              Смотреть все
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
            ].map((img) => (
              <div className="overflow-hidden rounded-[32px] group">
                <img
                  src={img}
                  className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="px-6 lg:px-20 py-24 bg-[#fffdf9]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-[#b4906e] mb-4">
            Отзывы
          </p>
          <h3 className="text-5xl font-black mb-4">Нас рекомендуют</h3>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            'Очень аккуратный и уютный салон. Собака вышла спокойная и счастливая.',
            'Лучший груминг в Орехово-Зуево. Очень внимательное отношение.',
            'Красивый результат и удобная запись. Теперь только сюда.',
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-8 shadow-sm border border-[#efe3d6]"
            >
              <div className="flex mb-6 text-2xl">★★★★★</div>
              <p className="text-lg leading-relaxed text-[#6f6257] mb-8">{text}</p>
              <div>
                <p className="font-bold">Гость салона</p>
                <p className="text-sm text-[#9b8b7c]">Постоянный клиент</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="px-6 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto bg-[#3b3128] rounded-[40px] p-10 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c68b52] opacity-20 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#d9c2aa] mb-4">
                Контакты
              </p>

              <h3 className="text-5xl font-black leading-tight mb-8">
                Запишите питомца уже сегодня
              </h3>

              <div className="space-y-5 text-lg">
                <div>
                  <p className="text-[#cbb7a3]">Адрес</p>
                  <p className="font-semibold">Орехово-Зуево, ул. Пушкина, д. 9</p>
                </div>

                <div>
                  <p className="text-[#cbb7a3]">Телефон</p>
                  <p className="font-semibold">8 (903) 527-61-34</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-[32px] p-8 border border-white/10">
              <h4 className="text-2xl font-bold mb-6">Быстрая запись</h4>

              <div className="space-y-4">
                <input
                  placeholder="Ваше имя"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  placeholder="Телефон"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

                <button className="w-full bg-[#c68b52] hover:scale-[1.02] transition py-4 rounded-2xl font-semibold text-lg">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
