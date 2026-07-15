(() => {
  const app = document.getElementById("app");
  const toastNode = document.getElementById("toast");
  const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
  const canUseTelegram = (version) => !tg || !tg.isVersionAtLeast || tg.isVersionAtLeast(version);

  if (tg) {
    tg.ready();
    tg.expand();
    if (canUseTelegram("6.1")) {
      tg.setHeaderColor("#f4eee8");
      tg.setBackgroundColor("#f4eee8");
    }
  }

  const ASSET = "assets/";
  const VERSION = "20260704c";
  const ADMIN_CARS_KEY = "chipdale:adminCars";
  const SUPABASE = window.CHIPDALE_SUPABASE_CONFIG || null;
  const galleryPhotos = (id) =>
    Array.from({ length: 12 }, (_, index) => `${ASSET}gallery/${id}-${String(index + 1).padStart(2, "0")}.jpg?v=${VERSION}`);

  const statusLabels = {
    all: "Усі авто",
    sale: "В продажу",
    commission: "Комісійний продаж",
    booked: "Бронь",
    sold: "Продано"
  };

  const statusClasses = {
    sale: "sale",
    commission: "commission",
    booked: "booked",
    sold: "sold"
  };

  const defaultCars = [
    {
      id: "bmw-x5-2002",
      title: "BMW X5 2002",
      brand: "BMW",
      model: "X5",
      year: 2002,
      price: "$ 9 999",
      credit: "В кредит від $ 180/міс",
      status: "sale",
      fuel: "газ/бензин",
      fuelKey: "gas",
      engine: "4.4 газ/бензин",
      gearbox: "Автомат",
      gearboxKey: "auto",
      mileage: "296 тис. км",
      city: "Київ",
      body: "suv",
      image: galleryPhotos("bmw-x5-2002")[0],
      detailImage: galleryPhotos("bmw-x5-2002")[0],
      featuredImage: galleryPhotos("bmw-x5-2002")[0],
      photos: galleryPhotos("bmw-x5-2002"),
      description: "Технічно справний, повний привід, комфортний салон. Готовий до перевірок на СТО. Надійний преміум кросовер для щоденних поїздок та подорожей."
    },
    {
      id: "honda-crv-2006",
      title: "Honda CR-V 2006",
      brand: "Honda",
      model: "CR-V",
      year: 2006,
      price: "$ 8 100",
      credit: "В кредит від $ 146/міс",
      status: "commission",
      fuel: "газ/бензин",
      fuelKey: "gas",
      engine: "2.4 газ/бензин",
      gearbox: "Автомат",
      gearboxKey: "auto",
      mileage: "218 тис. км",
      city: "Київ",
      body: "suv",
      image: galleryPhotos("honda-crv-2006")[0],
      detailImage: galleryPhotos("honda-crv-2006")[0],
      featuredImage: galleryPhotos("honda-crv-2006")[0],
      photos: galleryPhotos("honda-crv-2006"),
      description: "Сімейний кросовер з прозорою історією, охайним салоном та готовністю до перевірки перед купівлею."
    },
    {
      id: "bmw-f10-535-2014",
      title: "BMW F10 535 2014",
      brand: "BMW",
      model: "F10 535",
      year: 2014,
      price: "$ 13 599",
      credit: "В кредит від $ 245/міс",
      status: "commission",
      fuel: "бензин",
      fuelKey: "petrol",
      engine: "3.0 бензин",
      gearbox: "Автомат",
      gearboxKey: "auto",
      mileage: "185 тис. км",
      city: "Київ",
      body: "sedan",
      image: galleryPhotos("bmw-f10-535-2014")[0],
      detailImage: galleryPhotos("bmw-f10-535-2014")[0],
      featuredImage: galleryPhotos("bmw-f10-535-2014")[0],
      photos: galleryPhotos("bmw-f10-535-2014"),
      description: "Динамічний седан з багатою комплектацією, акуратним кузовом та сервісною історією."
    },
    {
      id: "citroen-c5-2010",
      title: "Citroen C5 2010",
      brand: "Citroen",
      model: "C5",
      year: 2010,
      price: "$ 4 650",
      credit: "В кредит від $ 84/міс",
      status: "sale",
      fuel: "дизель",
      fuelKey: "diesel",
      engine: "2.0 дизель",
      gearbox: "Автомат",
      gearboxKey: "auto",
      mileage: "241 тис. км",
      city: "Київ",
      body: "sedan",
      image: galleryPhotos("citroen-c5-2010")[0],
      detailImage: galleryPhotos("citroen-c5-2010")[0],
      featuredImage: galleryPhotos("citroen-c5-2010")[0],
      photos: galleryPhotos("citroen-c5-2010"),
      description: "Комфортний автомобіль для міста і траси, економічний дизель та плавна автоматична коробка."
    },
    {
      id: "bmw-730d-f01-2010",
      title: "BMW 730d F01 2010",
      brand: "BMW",
      model: "730d F01",
      year: 2010,
      price: "$ 11 800",
      credit: "В кредит від $ 212/міс",
      status: "sold",
      fuel: "дизель",
      fuelKey: "diesel",
      engine: "3.0 дизель",
      gearbox: "Автомат",
      gearboxKey: "auto",
      mileage: "263 тис. км",
      city: "Київ",
      body: "sedan",
      image: galleryPhotos("bmw-730d-f01-2010")[0],
      detailImage: galleryPhotos("bmw-730d-f01-2010")[0],
      featuredImage: galleryPhotos("bmw-730d-f01-2010")[0],
      photos: galleryPhotos("bmw-730d-f01-2010"),
      description: "Представницький седан з комфортним салоном, потужним дизелем та перевіреною комплектацією."
    }
  ];

  let cars = loadAdminCars(defaultCars);


  function loadAdminCars(defaultCars) {
    try {
      const saved = JSON.parse(localStorage.getItem(ADMIN_CARS_KEY) || "null");
      if (!Array.isArray(saved) || !saved.length) return defaultCars;
      return saved.map((car, index) => {
        const fallback = defaultCars[index] || defaultCars[0];
        const photos = Array.isArray(car.photos) && car.photos.length ? car.photos : fallback.photos;
        return {
          ...fallback,
          ...car,
          photos,
          image: car.image || photos[0] || fallback.image,
          detailImage: car.detailImage || photos[0] || fallback.detailImage,
          featuredImage: car.featuredImage || photos[0] || fallback.featuredImage
        };
      });
    } catch (error) {
      return defaultCars;
    }
  }


  function dbHeaders() {
    if (!SUPABASE || !SUPABASE.url || !SUPABASE.key) return null;
    return {
      "apikey": SUPABASE.key,
      "Authorization": "Bearer " + SUPABASE.key,
      "Content-Type": "application/json"
    };
  }

  function dbUrl(path) {
    return SUPABASE.url.replace(/\/$/, "") + "/rest/v1/" + path;
  }

  function normalizeCar(car, fallback) {
    const photos = Array.isArray(car.photos) && car.photos.length
      ? car.photos
      : Array.isArray(car.gallery) && car.gallery.length
        ? car.gallery
        : fallback && fallback.photos
          ? fallback.photos
          : [];

    return {
      id: car.id,
      title: car.title || (fallback && fallback.title) || "",
      brand: car.brand || (fallback && fallback.brand) || "",
      model: car.model || (fallback && fallback.model) || "",
      year: Number(car.year || (fallback && fallback.year) || 0),
      price: car.price || (fallback && fallback.price) || "",
      credit: car.credit || (fallback && fallback.credit) || "",
      status: car.status || (fallback && fallback.status) || "sale",
      fuel: car.fuel || (fallback && fallback.fuel) || "",
      fuelKey: car.fuel_key || car.fuelKey || (fallback && fallback.fuelKey) || "",
      engine: car.engine || (fallback && fallback.engine) || "",
      gearbox: car.gearbox || car.transmission || (fallback && fallback.gearbox) || "",
      gearboxKey: car.gearbox_key || car.gearboxKey || (fallback && fallback.gearboxKey) || "",
      mileage: car.mileage || (fallback && fallback.mileage) || "",
      city: car.city || (fallback && fallback.city) || "",
      body: car.body || (fallback && fallback.body) || "",
      image: car.image || (photos && photos[0]) || (fallback && fallback.image) || "",
      detailImage: car.detail_image || car.detailImage || car.image || (photos && photos[0]) || (fallback && fallback.detailImage) || "",
      featuredImage: car.featured_image || car.featuredImage || car.image || (photos && photos[0]) || (fallback && fallback.featuredImage) || "",
      photos,
      description: car.description || (fallback && fallback.description) || "",
      createdAt: car.created_at || car.createdAt || (fallback && fallback.createdAt) || null
    };
  }

  function carToDb(car) {
    return {
      id: car.id,
      title: car.title,
      brand: car.brand,
      model: car.model,
      year: Number(car.year) || null,
      price: car.price,
      credit: car.credit,
      status: car.status,
      fuel: car.fuel,
      fuel_key: car.fuelKey,
      engine: car.engine,
      gearbox: car.gearbox,
      gearbox_key: car.gearboxKey,
      mileage: car.mileage,
      city: car.city,
      body: car.body,
      image: car.image,
      detail_image: car.detailImage,
      featured_image: car.featuredImage,
      photos: car.photos || [],
      gallery: car.photos || [],
      description: car.description
    };
  }

  async function loadCarsFromSupabase() {
    const headers = dbHeaders();
    if (!headers) return false;

    try {
      const response = await fetch(dbUrl((SUPABASE.table || "cars") + "?select=*&order=created_at.asc"), {
        headers,
        cache: "no-store"
      });
      if (!response.ok) throw new Error(await response.text());

      const rows = await response.json();
      if (!Array.isArray(rows) || !rows.length) return false;

      const fallbackById = Object.fromEntries(defaultCars.map((car) => [car.id, car]));
      cars = rows.map((row) => normalizeCar(row, fallbackById[row.id])).filter((car) => car.id);
      localStorage.setItem(ADMIN_CARS_KEY, JSON.stringify(cars));
      return true;
    } catch (error) {
      console.warn("Supabase load failed:", error);
      return false;
    }
  }

  async function bootData() {
    const loaded = await loadCarsFromSupabase();
    if (loaded) render();
  }

  const news = [
    {
      title: "Нове надходження BMW X5",
      date: "Сьогодні",
      text: "У шоурумі доступний BMW X5 2002 з повним приводом та готовністю до перевірки.",
      image: `${ASSET}featured-bmw.jpg?v=20260704c`,
      carId: "bmw-x5-2002"
    },
    {
      title: "Каталог оновлено",
      date: "02.07.2026",
      text: "Додані авто у продажу, комісійний продаж та продані позиції для швидкого перегляду.",
      image: `${ASSET}card-bmw-f10.jpg?v=20260704c`,
      carId: "bmw-f10-535-2014"
    },
    {
      title: "Перевірка перед купівлею",
      date: "01.07.2026",
      text: "Менеджер підготує історію, технічний стан і допоможе домовитися про огляд авто.",
      image: `${ASSET}card-citroen-c5.jpg?v=20260704c`,
      carId: "citroen-c5-2010"
    }
  ];

  const defaultFilters = {
    status: "all",
    body: "all",
    fuel: "all",
    gearbox: "all",
    query: ""
  };

  const state = {
    route: "showroom",
    carId: null,
    lastRoute: "showroom",
    filters: { ...defaultFilters },
    sheetOpen: false,
    galleryOpen: false,
    galleryIndex: 0,
    detailPhotoIndex: 0,
    touchStartX: 0,
    modal: null,
    favorites: new Set(loadFavorites())
  };

  let toastTimer = null;
  let telegramBackBound = false;

  const icons = {
    arrowLeft: `<svg class="icon" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/><path d="M21 12H9"/></svg>`,
    arrowRight: `<svg class="icon" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`,
    bell: `<svg class="icon" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    car: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 15l1.3-5.2A3 3 0 0 1 8.2 7h7.6a3 3 0 0 1 2.9 2.3L20 15"/><path d="M5 15h14v4H5z"/><path d="M7 19v2"/><path d="M17 19v2"/><circle cx="8" cy="17" r="1.3"/><circle cx="16" cy="17" r="1.3"/></svg>`,
    catalog: `<svg class="icon" viewBox="0 0 24 24"><path d="M7 3h8l3 3v15H7z"/><path d="M15 3v4h4"/><path d="M4 7v14"/><path d="M11 12h5"/><path d="M11 16h5"/></svg>`,
    close: `<svg class="icon" viewBox="0 0 24 24"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>`,
    filter: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h10"/><path d="M18 7h2"/><circle cx="16" cy="7" r="2"/><path d="M4 12h2"/><path d="M10 12h10"/><circle cx="8" cy="12" r="2"/><path d="M4 17h13"/><path d="M21 17h-1"/><circle cx="18" cy="17" r="2"/></svg>`,
    fuel: `<svg class="icon" viewBox="0 0 24 24"><path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16"/><path d="M4 21h13"/><path d="M8 7h5"/><path d="M16 8l3 3v7a2 2 0 0 0 4 0v-5l-2-2"/></svg>`,
    gauge: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 14a8 8 0 1 1 16 0"/><path d="M12 14l4-4"/><path d="M4 14h3"/><path d="M17 14h3"/><path d="M12 6v2"/></svg>`,
    gearbox: `<svg class="icon" viewBox="0 0 24 24"><circle cx="6" cy="5" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7v10"/><path d="M12 7v10"/><path d="M18 7v10"/><path d="M6 12h12"/></svg>`,
    heart: `<svg class="icon" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
    list: `<svg class="icon" viewBox="0 0 24 24"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>`,
    message: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-8 8H8l-5 2 2-4a8 8 0 1 1 16-6z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>`,
    phone: `<svg class="icon" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>`,
    pin: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
    search: `<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.4-4.4"/></svg>`,
    share: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M5 12v8h14v-8"/></svg>`,
    shield: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-5"/></svg>`,
    spark: `<svg class="icon" viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>`,
    tune: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 16h4"/></svg>`
  };

  function loadFavorites() {
    try {
      return JSON.parse(localStorage.getItem("chipdale:favorites") || "[]");
    } catch (error) {
      return [];
    }
  }

  function saveFavorites() {
    localStorage.setItem("chipdale:favorites", JSON.stringify([...state.favorites]));
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function logo() {
    return `
      <div class="logo" aria-label="Chip&Dale Auto">
        <svg class="logo-mark" viewBox="0 0 84 58" aria-hidden="true">
          <path d="M11 36h62v15H11z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
          <path d="M18 36l8-19h32l8 19" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
          <path d="M29 17h26" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          <circle cx="24" cy="47" r="5" fill="none" stroke="currentColor" stroke-width="3"/>
          <circle cx="60" cy="47" r="5" fill="none" stroke="currentColor" stroke-width="3"/>
          <path d="M11 36l-6-5M73 36l6-5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <span class="logo-word">CHIP&DALE<small>AUTO</small></span>
      </div>
    `;
  }

  function nav(activeRoute, theme = "light") {
    const items = [
      ["showroom", "Showroom", icons.car],
      ["catalog", "Каталог", icons.catalog],
      ["news", "Новинки", icons.spark],
      ["favorites", "Обране", icons.heart]
    ];

    return `
      <nav class="tabbar ${theme === "dark" ? "dark" : ""}" aria-label="Головна навігація">
        ${items.map(([route, label, icon]) => `
          <button class="nav-item ${activeRoute === route ? "active" : ""}" data-action="route" data-route="${route}" aria-label="${label}">
            ${icon}
            <span>${label}</span>
          </button>
        `).join("")}
      </nav>
    `;
  }

  function render() {
    const navActive = state.route === "detail" ? state.lastRoute : state.route;
    const navTheme = "light";
    let screen = "";

    if (state.route === "catalog") screen = renderCatalog();
    else if (state.route === "news") screen = renderNews();
    else if (state.route === "favorites") screen = renderFavorites();
    else if (state.route === "detail") screen = renderDetail();
    else screen = renderShowroom();

    app.innerHTML = `${screen}${nav(navActive, navTheme)}${renderOverlay()}`;
    syncTelegramBackButton();
  }

  function renderShowroom() {
    const featured = cars[0];
    return `
      <section class="screen showroom-screen">
        <div class="showroom-hero">
          <div class="brand-row">
            ${logo()}
            <span class="head-spacer" aria-hidden="true"></span>
          </div>
          <img class="hero-car" src="${ASSET}hero-bmw.jpg?v=20260704c" alt="BMW у шоурумі" />
          <div class="hero-copy">
            <h1>Надійні авто.<br>Чесний вибір.</h1>
            <p>Перевірені автомобілі з прозорою історією</p>
          </div>
        </div>

        <form class="search-panel" data-form="home-search">
          ${icons.search}
          <input name="query" autocomplete="off" placeholder="Пошук авто за маркою, моделлю..." value="${escapeHtml(state.filters.query)}" />
          <button class="icon-btn" type="button" data-action="open-filters" aria-label="Фільтри">${icons.filter}</button>
        </form>

        <div class="section-row">
          <h2>Рекомендоване</h2>
          <button class="view-all" data-action="route" data-route="catalog">Дивитись усі ${icons.arrowRight}</button>
        </div>

        <article class="featured-card" data-action="open-car" data-id="${featured.id}" role="button" tabindex="0">
          <img src="${featured.featuredImage}" alt="${featured.title}" />
          <span class="soft-badge">${statusLabels[featured.status]}</span>
          <h3>${featured.title}</h3>
          <p class="featured-price">${featured.price}</p>
          <div class="featured-specs">
            <span>${icons.fuel}<br>${featured.engine}</span>
            <span>${icons.gearbox}<br>${featured.gearbox}</span>
            <span>${icons.pin}<br>${featured.city}</span>
          </div>
          <button class="detail-link" data-action="open-car" data-id="${featured.id}">Детальніше ${icons.arrowRight}</button>
        </article>

        <div class="benefit-strip">
          <div class="benefit">${icons.shield}<div><h4>Перевірка 100+ параметрів</h4><p>Технічний та юридичний контроль</p></div></div>
          <div class="benefit">${icons.gauge}<div><h4>Прозорий пробіг</h4><p>Гарантія відповідності даних</p></div></div>
          <div class="benefit">${icons.message}<div><h4>Підтримка на всіх етапах</h4><p>Від вибору авто до передачі ключів</p></div></div>
        </div>
      </section>
    `;
  }

  function renderCatalog() {
    const visible = filteredCars();
    return `
      <section class="screen catalog-screen">
        <div class="page-head">
          <h1 class="catalog-heading">Каталог авто</h1>
          <button class="icon-btn" data-action="open-filters" aria-label="Фільтри">${icons.filter}</button>
        </div>
        <div class="filter-row" role="tablist" aria-label="Статус авто">
          ${Object.entries(statusLabels).map(([key, label]) => `
            <button class="chip ${state.filters.status === key ? "active" : ""}" data-action="status-filter" data-status="${key}">${label}</button>
          `).join("")}
        </div>
        ${state.filters.query ? `<div class="query-pill">Пошук: ${escapeHtml(state.filters.query)} <button data-action="clear-query" aria-label="Очистити пошук">×</button></div>` : ""}
        ${visible.length ? `<div class="catalog-grid">${visible.map(carCard).join("")}</div>` : renderEmpty("Нічого не знайдено", "Змініть фільтр або відкрийте всі авто в каталозі.", "clear-filters", "Скинути фільтри")}
      </section>
    `;
  }


  function getCarDate(car) {
    const value = car.createdAt || car.created_at;
    const date = value ? new Date(value) : null;
    return date && !Number.isNaN(date.getTime()) ? date : null;
  }

  function getRecentCars() {
    const now = Date.now();
    const twoDays = 2 * 24 * 60 * 60 * 1000;

    return cars
      .filter((car) => {
        const date = getCarDate(car);
        return date && now - date.getTime() <= twoDays;
      })
      .sort((a, b) => {
        const aDate = getCarDate(a);
        const bDate = getCarDate(b);
        return (bDate ? bDate.getTime() : 0) - (aDate ? aDate.getTime() : 0);
      });
  }

  function changeDetailPhoto(direction) {
    const car = cars.find((item) => item.id === state.carId) || cars[0];
    const photos = getCarPhotos(car);
    if (!photos.length) return;
    state.detailPhotoIndex = (state.detailPhotoIndex + direction + photos.length) % photos.length;
    render();
  }

  function renderNews() {
    const recentCars = getRecentCars();

    return `
      <section class="screen news-screen">
        <div class="page-head">
          <h1 class="news-heading">Новинки</h1>
          <span class="head-spacer" aria-hidden="true"></span>
        </div>
        ${recentCars.length
          ? `<div class="catalog-grid news-cars-grid">${recentCars.map(carCard).join("")}</div>`
          : renderEmpty("Новинок немає", "Тут будуть авто, які додали за останні 2 дні.", "route", "В каталог", "catalog")}
      </section>
    `;
  }

  function renderFavorites() {
    const favoriteCars = cars.filter((car) => state.favorites.has(car.id));
    return `
      <section class="screen favorites-screen">
        <div class="page-head">
          <h1 class="fav-heading">Обране</h1>
          <button class="icon-btn" data-action="clear-favorites" aria-label="Очистити обране">${icons.close}</button>
        </div>
        ${favoriteCars.length ? `<div class="catalog-grid">${favoriteCars.map(carCard).join("")}</div>` : renderEmpty("Обране порожнє", "Натисніть серце на картці авто, і воно з'явиться тут.", "route", "В каталог", "catalog")}
      </section>
    `;
  }

  function renderDetail() {
    const car = cars.find((item) => item.id === state.carId) || cars[0];
    const isFavorite = state.favorites.has(car.id);
    const photos = getCarPhotos(car);
    const activePhotoIndex = Math.min(state.detailPhotoIndex || 0, photos.length - 1);
    const activePhoto = photos[activePhotoIndex] || car.detailImage || car.image;
    return `
      <section class="screen detail-screen">
        <div class="detail-toolbar">
          <button class="back-btn" data-action="back">${icons.arrowLeft}<span>Назад</span></button>
          <div class="detail-actions">
            <button class="icon-btn" data-action="share" data-id="${car.id}" aria-label="Поділитися">${icons.share}</button>
            <button class="icon-btn detail-heart ${isFavorite ? "active" : ""}" data-action="toggle-favorite" data-id="${car.id}" aria-label="${isFavorite ? "Прибрати з обраного" : "Додати в обране"}">${icons.heart}</button>
          </div>
        </div>
        <div class="detail-photo" data-action="open-gallery" data-id="${car.id}" role="button" tabindex="0" aria-label="Відкрити фото ${car.title}">
          <img src="${activePhoto}" alt="${car.title}" />
          ${photos.length > 1 ? `
            <button class="detail-photo-arrow detail-photo-prev" data-action="detail-photo-prev" aria-label="Попереднє фото">${icons.arrowLeft}</button>
            <button class="detail-photo-arrow detail-photo-next" data-action="detail-photo-next" aria-label="Наступне фото">${icons.arrowRight}</button>
          ` : ""}
          <span class="photo-counter">${activePhotoIndex + 1} / ${photos.length}</span>
          <span class="photo-open">Дивитися фото</span>
        </div>
        <div class="detail-main">
          <span class="sale-pill">${statusLabels[car.status]}</span>
          <div class="detail-title-row">
            <h1>${car.title}</h1>
          </div>
          <div class="price-row">
            <p class="detail-price">${car.price}</p>
            <button class="credit-pill" data-action="credit">${car.credit}</button>
          </div>
          <div class="spec-row">
            <div class="spec-item">${icons.fuel}<span><b>${car.engine.split(" ")[0]}</b>${car.fuel}</span></div>
            <div class="spec-item">${icons.gearbox}<span><b>${car.gearbox}</b></span></div>
            <div class="spec-item">${icons.gauge}<span><b>${car.mileage.replace(" тис. км", " тис. км")}</b>Пробіг</span></div>
            <div class="spec-item">${icons.pin}<span><b>${car.city}</b>Місто</span></div>
          </div>
          <div class="description">
            <h2>Опис</h2>
            <p>${car.description}</p>
          </div>
          <div class="cta-row">
            <button class="message-btn" data-action="message-manager">${icons.message}<span>Написати менеджеру</span></button>
            <a class="phone-btn" href="tel:+380670000000" aria-label="Подзвонити менеджеру">${icons.phone}</a>
          </div>
        </div>
      </section>
    `;
  }

  function carCard(car) {
    const isFavorite = state.favorites.has(car.id);
    return `
      <article class="car-card" data-action="open-car" data-id="${car.id}" role="button" tabindex="0">
        <div class="card-photo"><img src="${car.image}" alt="${car.title}" /></div>
        <span class="status-badge ${statusClasses[car.status]}">${statusLabels[car.status]}</span>
        <button class="card-heart ${isFavorite ? "active" : ""}" data-action="toggle-favorite" data-id="${car.id}" aria-label="${isFavorite ? "Прибрати з обраного" : "Додати в обране"}">${icons.heart}</button>
        <div class="card-body">
          <h3>${car.title}</h3>
          <p class="card-price">${car.price}</p>
          <div class="card-meta">
            <span>${car.engine}</span>
            <span>${car.gearbox}</span>
            <span class="card-city">${car.city}</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderEmpty(title, text, action, label, route = "") {
    return `
      <div class="empty-state">
        <div>
          ${icons.heart}
          <h3>${title}</h3>
          <p>${text}</p>
          <button class="primary-btn" data-action="${action}" ${route ? `data-route="${route}"` : ""}>${label}</button>
        </div>
      </div>
    `;
  }

  function renderOverlay() {
    if (state.galleryOpen) return renderGallery();
    if (state.sheetOpen) return renderFilterSheet();
    if (state.modal !== null) return renderNewsModal();
    return "";
  }

  function getCarPhotos(car) {
    const photos = Array.isArray(car.photos) && car.photos.length ? car.photos : [car.detailImage, car.image, car.featuredImage];
    return photos.filter((src, index, items) => src && items.indexOf(src) === index);
  }

  function renderGallery() {
    const car = cars.find((item) => item.id === state.carId) || cars[0];
    const photos = getCarPhotos(car);
    const activeIndex = Math.min(state.galleryIndex, photos.length - 1);
    const photo = photos[activeIndex];

    return `
      <div class="gallery-overlay" role="dialog" aria-modal="true" aria-label="Фото ${car.title}">
        <div class="gallery-top">
          <button class="icon-btn gallery-close" data-action="close-gallery" aria-label="Закрити галерею">${icons.close}</button>
          <span>${activeIndex + 1} / ${photos.length}</span>
        </div>
        <button class="gallery-arrow gallery-prev" data-action="gallery-prev" aria-label="Попереднє фото">${icons.arrowLeft}</button>
        <img class="gallery-image" src="${photo}" alt="${car.title}, фото ${activeIndex + 1}" />
        <button class="gallery-arrow gallery-next" data-action="gallery-next" aria-label="Наступне фото">${icons.arrowRight}</button>
        <div class="gallery-thumbs" aria-label="Мініатюри фото">
          ${photos.map((src, index) => `
            <button class="gallery-thumb ${index === activeIndex ? "active" : ""}" data-action="gallery-thumb" data-index="${index}" aria-label="Фото ${index + 1}">
              <img src="${src}" alt="" />
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderFilterSheet() {
    return `
      <div class="overlay-root">
        <button class="sheet-backdrop" data-action="close-sheet" aria-label="Закрити фільтр"></button>
        <aside class="filter-sheet" role="dialog" aria-modal="true" aria-label="Фільтр каталогу">
          <div class="sheet-handle"></div>
          <div class="sheet-title">
            <h2>Фільтр</h2>
            <button class="icon-btn" data-action="close-sheet" aria-label="Закрити">${icons.close}</button>
          </div>
          ${filterSection("Тип кузова", "body", [
            ["all", "Будь-який"],
            ["suv", "Кросовер"],
            ["sedan", "Седан"]
          ])}
          ${filterSection("Паливо", "fuel", [
            ["all", "Будь-яке"],
            ["gas", "Газ/бензин"],
            ["petrol", "Бензин"],
            ["diesel", "Дизель"]
          ])}
          ${filterSection("Коробка", "gearbox", [
            ["all", "Будь-яка"],
            ["auto", "Автомат"]
          ])}
          <div class="sheet-actions">
            <button class="light-btn" data-action="clear-filters">Скинути</button>
            <button class="dark-btn" data-action="apply-filters">Показати авто</button>
          </div>
        </aside>
      </div>
    `;
  }

  function filterSection(title, field, options) {
    return `
      <div class="sheet-section">
        <h3>${title}</h3>
        <div class="option-grid">
          ${options.map(([value, label]) => `
            <button class="option-btn ${state.filters[field] === value ? "active" : ""}" data-action="filter-set" data-field="${field}" data-value="${value}">${label}</button>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderNewsModal() {
    const item = news[state.modal];
    if (!item) return "";
    return `
      <div class="overlay-root">
        <button class="sheet-backdrop" data-action="close-modal" aria-label="Закрити новину"></button>
        <aside class="modal-card" role="dialog" aria-modal="true" aria-label="Новина">
          <h2>${item.title}</h2>
          <p>${item.text}</p>
          <div class="sheet-actions">
            <button class="light-btn" data-action="close-modal">Закрити</button>
            <button class="dark-btn" data-action="open-car" data-id="${item.carId}">Дивитись авто</button>
          </div>
        </aside>
      </div>
    `;
  }

  function filteredCars() {
    const query = state.filters.query.trim().toLowerCase();
    return cars.filter((car) => {
      if (state.filters.status !== "all" && car.status !== state.filters.status) return false;
      if (state.filters.body !== "all" && car.body !== state.filters.body) return false;
      if (state.filters.fuel !== "all" && car.fuelKey !== state.filters.fuel) return false;
      if (state.filters.gearbox !== "all" && car.gearboxKey !== state.filters.gearbox) return false;
      if (query) {
        const text = `${car.title} ${car.brand} ${car.model} ${car.year} ${car.city}`.toLowerCase();
        if (!text.includes(query)) return false;
      }
      return true;
    });
  }

  function setRoute(route) {
    state.sheetOpen = false;
    state.galleryOpen = false;
    state.galleryIndex = 0;
    state.modal = null;
    if (route.startsWith("car/")) {
      state.lastRoute = state.route === "detail" ? state.lastRoute : state.route;
    }
    const current = location.hash.replace(/^#/, "") || "showroom";
    if (current === route) parseRoute();
    else location.hash = route;
  }

  function parseRoute() {
    const hash = decodeURIComponent(location.hash.replace(/^#/, "")) || "showroom";
    state.galleryOpen = false;
    if (hash.startsWith("car/")) {
      state.route = "detail";
      state.carId = hash.split("/")[1] || cars[0].id;
    } else if (["showroom", "catalog", "news", "favorites"].includes(hash)) {
      state.route = hash;
      state.carId = null;
    } else {
      state.route = "showroom";
      state.carId = null;
    }
    render();
  }

  function goBack() {
    if (state.galleryOpen) {
      state.galleryOpen = false;
      render();
      return;
    }
    if (state.sheetOpen) {
      state.sheetOpen = false;
      render();
      return;
    }
    if (state.modal !== null) {
      state.modal = null;
      render();
      return;
    }
    if (state.route === "detail") {
      setRoute(state.lastRoute || "showroom");
      return;
    }
    setRoute("showroom");
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast("Авто прибрано з обраного");
    } else {
      state.favorites.add(id);
      showToast("Авто додано в обране");
    }
    saveFavorites();
    render();
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toastNode.textContent = message;
    toastNode.classList.add("show");
    toastTimer = setTimeout(() => toastNode.classList.remove("show"), 2300);
  }

  function shareCar(id) {
    const car = cars.find((item) => item.id === id) || cars[0];
    const url = `${location.origin}${location.pathname}#car/${car.id}`;
    if (navigator.share) {
      navigator.share({ title: car.title, text: `${car.title} ${car.price}`, url }).catch(() => {});
      return;
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => showToast("Посилання скопійовано"));
      return;
    }
    showToast("Скопіюйте посилання з адресного рядка");
  }

  function messageManager() {
    const url = "https://t.me/chipdale_auto";
    if (tg && tg.openTelegramLink) {
      tg.openTelegramLink(url);
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function syncTelegramBackButton() {
    if (!tg || !tg.BackButton || !canUseTelegram("6.1")) return;
    if (!telegramBackBound) {
      tg.BackButton.onClick(goBack);
      telegramBackBound = true;
    }
    if (state.route === "detail" || state.sheetOpen || state.galleryOpen || state.modal !== null) tg.BackButton.show();
    else tg.BackButton.hide();
  }

  app.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target || !app.contains(target)) return;

    const action = target.dataset.action;
    if (action !== "phone") event.preventDefault();

    if (action === "route") setRoute(target.dataset.route || "showroom");
    if (action === "open-car") setRoute(`car/${target.dataset.id}`);
    if (action === "detail-photo-prev" || action === "detail-photo-next") {
      event.stopPropagation();
      changeDetailPhoto(action === "detail-photo-next" ? 1 : -1);
      return;
    }
    if (action === "open-gallery") {
      state.galleryOpen = true;
      state.galleryIndex = Number(target.dataset.index || 0);
      render();
    }
    if (action === "close-gallery") {
      state.galleryOpen = false;
      render();
    }
    if (action === "gallery-prev" || action === "gallery-next") {
      const car = cars.find((item) => item.id === state.carId) || cars[0];
      const photos = getCarPhotos(car);
      const direction = action === "gallery-next" ? 1 : -1;
      state.galleryIndex = (state.galleryIndex + direction + photos.length) % photos.length;
      render();
    }
    if (action === "gallery-thumb") {
      state.galleryIndex = Number(target.dataset.index || 0);
      render();
    }
    if (action === "toggle-favorite") toggleFavorite(target.dataset.id);
    if (action === "status-filter") {
      state.filters.status = target.dataset.status || "all";
      render();
    }
    if (action === "open-filters") {
      state.sheetOpen = true;
      render();
    }
    if (action === "close-sheet") {
      state.sheetOpen = false;
      render();
    }
    if (action === "filter-set") {
      state.filters[target.dataset.field] = target.dataset.value;
      render();
    }
    if (action === "apply-filters") {
      state.sheetOpen = false;
      setRoute("catalog");
    }
    if (action === "clear-filters") {
      state.filters = { ...defaultFilters };
      state.sheetOpen = false;
      render();
    }
    if (action === "clear-query") {
      state.filters.query = "";
      render();
    }
    if (action === "clear-favorites") {
      state.favorites.clear();
      saveFavorites();
      showToast("Обране очищено");
      render();
    }
    if (action === "open-news") {
      state.modal = Number(target.dataset.index);
      render();
    }
    if (action === "close-modal") {
      state.modal = null;
      render();
    }
    if (action === "back") goBack();
    if (action === "share") shareCar(target.dataset.id);
    if (action === "credit") showToast("Менеджер розрахує кредит під ваш запит");
    if (action === "notify") showToast("Сповіщення увімкнені для нових авто");
    if (action === "message-manager") messageManager();
  });


  app.addEventListener("touchstart", (event) => {
    const photo = event.target.closest(".detail-photo");
    if (!photo || !app.contains(photo)) return;
    state.touchStartX = event.touches[0].clientX;
  }, { passive: true });

  app.addEventListener("touchend", (event) => {
    const photo = event.target.closest(".detail-photo");
    if (!photo || !app.contains(photo)) return;
    const endX = event.changedTouches[0].clientX;
    const diff = endX - state.touchStartX;
    if (Math.abs(diff) < 45) return;
    changeDetailPhoto(diff < 0 ? 1 : -1);
  }, { passive: true });

  app.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const card = event.target.closest("[data-action='open-car']");
    if (card) setRoute(`car/${card.dataset.id}`);
    const galleryTrigger = event.target.closest("[data-action='open-gallery']");
    if (galleryTrigger) {
      state.galleryOpen = true;
      state.galleryIndex = Number(galleryTrigger.dataset.index || 0);
      render();
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-form='home-search']");
    if (!form) return;
    event.preventDefault();
    const data = new FormData(form);
    state.filters.query = String(data.get("query") || "").trim();
    state.filters.status = "all";
    setRoute("catalog");
  });

  window.addEventListener("hashchange", parseRoute);
  parseRoute();
  bootData();
})();






