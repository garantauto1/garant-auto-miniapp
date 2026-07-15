(() => {
  const KEY = "chipdale:adminCars";
  const VERSION = "20260704a2";
  const ASSET = "assets/";
  const SUPABASE = window.CHIPDALE_SUPABASE_CONFIG || null;

  const catalogNode = document.getElementById("adminCatalog");
  const editorWrap = document.getElementById("editorWrap");
  const toastNode = document.getElementById("toast");
  const addBtn = document.getElementById("addBtn");
  const backBtn = document.getElementById("backBtn");

  const statusLabels = {
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

  const galleryPhotos = (id) =>
    Array.from({ length: 12 }, (_, index) => `${ASSET}gallery/${id}-${String(index + 1).padStart(2, "0")}.jpg?v=${VERSION}`);

  const seedCars = [
    carSeed("bmw-x5-2002", "BMW X5 2002", "BMW", "X5", 2002, "$ 9 999", "4.4 газ/бензин", "gas", "suv", "sale", "Технічно справний, повний привід, комфортний салон. Готовий до перевірок на СТО."),
    carSeed("honda-crv-2006", "Honda CR-V 2006", "Honda", "CR-V", 2006, "$ 8 100", "2.4 газ/бензин", "gas", "suv", "commission", "Сімейний кросовер з прозорою історією, охайним салоном та готовністю до перевірки."),
    carSeed("bmw-f10-535-2014", "BMW F10 535 2014", "BMW", "F10 535", 2014, "$ 13 599", "3.0 бензин", "petrol", "sedan", "commission", "Динамічний седан з багатою комплектацією, акуратним кузовом та сервісною історією."),
    carSeed("citroen-c5-2010", "Citroen C5 2010", "Citroen", "C5", 2010, "$ 4 650", "2.0 дизель", "diesel", "sedan", "sale", "Комфортний автомобіль для міста і траси, економічний дизель та плавна автоматична коробка."),
    carSeed("bmw-730d-f01-2010", "BMW 730d F01 2010", "BMW", "730d F01", 2010, "$ 11 800", "3.0 дизель", "diesel", "sedan", "sold", "Представницький седан з комфортним салоном, потужним дизелем та перевіреною комплектацією.")
  ];

  let cars = [];
  let activeIndex = null;

  function carSeed(id, title, brand, model, year, price, engine, fuelKey, body, status, description) {
    const photos = galleryPhotos(id);
    const fuel = engine.replace(/^\S+\s/, "");
    return {
      id,
      title,
      brand,
      model,
      year,
      price,
      credit: "В кредит від $ 180/міс",
      status,
      fuel,
      fuelKey,
      engine,
      gearbox: "Автомат",
      gearboxKey: "auto",
      mileage: "296 тис. км",
      city: "Київ",
      body,
      image: photos[0],
      detailImage: photos[0],
      featuredImage: photos[0],
      photos,
      description
    };
  }

  function dbHeaders(prefer) {
    if (!SUPABASE || !SUPABASE.url || !SUPABASE.key) return null;
    const headers = {
      "apikey": SUPABASE.key,
      "Authorization": "Bearer " + SUPABASE.key,
      "Content-Type": "application/json"
    };
    if (prefer) headers.Prefer = prefer;
    return headers;
  }

  function dbUrl(path) {
    return SUPABASE.url.replace(/\/$/, "") + "/rest/v1/" + path;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function slug(value) {
    return String(value || "auto")
      .toLowerCase()
      .replace(/[^\wа-яіїєґ]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "auto";
  }

  function normalizeCar(car, fallback = {}) {
    const photos = Array.isArray(car.photos) && car.photos.length
      ? car.photos
      : Array.isArray(car.gallery) && car.gallery.length
        ? car.gallery
        : fallback.photos || [];

    return {
      id: car.id,
      title: car.title || fallback.title || "",
      brand: car.brand || fallback.brand || "",
      model: car.model || fallback.model || "",
      year: Number(car.year || fallback.year || new Date().getFullYear()),
      price: car.price || fallback.price || "",
      credit: car.credit || fallback.credit || "",
      status: car.status || fallback.status || "sale",
      fuel: car.fuel || fallback.fuel || "",
      fuelKey: car.fuel_key || car.fuelKey || fallback.fuelKey || "",
      engine: car.engine || fallback.engine || "",
      gearbox: car.gearbox || car.transmission || fallback.gearbox || "",
      gearboxKey: car.gearbox_key || car.gearboxKey || fallback.gearboxKey || "",
      mileage: car.mileage || fallback.mileage || "",
      city: car.city || fallback.city || "",
      body: car.body || fallback.body || "",
      image: car.image || photos[0] || fallback.image || "",
      detailImage: car.detail_image || car.detailImage || car.image || photos[0] || fallback.detailImage || "",
      featuredImage: car.featured_image || car.featuredImage || car.image || photos[0] || fallback.featuredImage || "",
      photos,
      description: car.description || fallback.description || ""
    };
  }

  function carToDb(car) {
    const photos = (car.photos || []).filter(Boolean);
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
      image: photos[0] || car.image,
      detail_image: photos[0] || car.detailImage,
      featured_image: photos[0] || car.featuredImage,
      photos,
      gallery: photos,
      description: car.description
    };
  }

  async function loadCars() {
    const headers = dbHeaders();

    if (!headers) {
      cars = clone(seedCars);
      renderCatalog();
      showToast("Supabase config не знайдено. Працюємо локально.");
      return;
    }

    try {
      const response = await fetch(dbUrl((SUPABASE.table || "cars") + "?select=*&order=created_at.asc"), {
        headers,
        cache: "no-store"
      });

      if (!response.ok) throw new Error(await response.text());

      const rows = await response.json();
      if (!rows.length) {
        cars = clone(seedCars);
        await upsertCars(cars, false);
      } else {
        const fallbackById = Object.fromEntries(seedCars.map((car) => [car.id, car]));
        cars = rows.map((row) => normalizeCar(row, fallbackById[row.id])).filter((car) => car.id);
      }

      localStorage.setItem(KEY, JSON.stringify(cars));
      renderCatalog();
    } catch (error) {
      console.error(error);
      const local = JSON.parse(localStorage.getItem(KEY) || "null");
      cars = Array.isArray(local) && local.length ? local : clone(seedCars);
      renderCatalog();
      showToast("Не вдалося завантажити Supabase. Показую локальні дані.");
    }
  }

  async function upsertCars(items, withToast = true) {
    const headers = dbHeaders("resolution=merge-duplicates");
    if (!headers) {
      localStorage.setItem(KEY, JSON.stringify(items));
      if (withToast) showToast("Збережено локально.");
      return;
    }

    const response = await fetch(dbUrl(SUPABASE.table || "cars"), {
      method: "POST",
      headers,
      body: JSON.stringify(items.map(carToDb))
    });

    if (!response.ok) throw new Error(await response.text());
    localStorage.setItem(KEY, JSON.stringify(items));
    if (withToast) showToast("Збережено в Supabase.");
  }

  async function deleteCarFromDb(car) {
    const headers = dbHeaders();
    if (!headers) return;

    const response = await fetch(dbUrl((SUPABASE.table || "cars") + "?id=eq." + encodeURIComponent(car.id)), {
      method: "DELETE",
      headers
    });

    if (!response.ok) throw new Error(await response.text());
  }

  function renderCatalog() {
    activeIndex = null;
    editorWrap.hidden = true;
    catalogNode.hidden = false;
    backBtn.hidden = true;
    addBtn.hidden = false;

    catalogNode.innerHTML = cars.map((car, index) => `
      <article class="admin-car-card" data-index="${index}" role="button" tabindex="0">
        <img src="${escapeHtml((car.photos && car.photos[0]) || car.image)}" alt="${escapeHtml(car.title)}" />
        <span class="status-badge ${statusClasses[car.status] || ""}">${statusLabels[car.status] || car.status}</span>
        <div class="admin-car-card-body">
          <h2>${escapeHtml(car.title)}</h2>
          <p>${escapeHtml(car.year)} · ${escapeHtml(car.mileage)} · ${escapeHtml(car.city)}</p>
          <strong class="admin-card-price">${escapeHtml(car.price)}</strong>
        </div>
      </article>
    `).join("");
  }

  function renderEditor(index) {
    activeIndex = index;
    const car = cars[index];
    catalogNode.hidden = true;
    editorWrap.hidden = false;
    backBtn.hidden = false;
    addBtn.hidden = true;

    editorWrap.innerHTML = `
      <article class="editor-card" data-index="${index}">
        <div class="editor-top">
          <div class="editor-preview">
            <img src="${escapeHtml((car.photos && car.photos[0]) || car.image)}" alt="${escapeHtml(car.title)}" />
            <div>
              <h2>${escapeHtml(car.title || "Нове авто")}</h2>
              <p>${escapeHtml(car.price || "$ 0")} · ${(car.photos || []).length} фото</p>
            </div>
          </div>

          <div class="form-grid">
            ${field("title", "Назва", car.title)}
            ${field("brand", "Марка", car.brand)}
            ${field("model", "Модель", car.model)}
            ${field("year", "Рік", car.year)}
            ${field("price", "Ціна", car.price)}
            ${field("credit", "Кредит", car.credit)}
            ${field("city", "Місто", car.city)}
            ${field("engine", "Двигун", car.engine)}
            ${field("fuel", "Паливо", car.fuel)}
            ${field("mileage", "Пробіг", car.mileage)}
            ${field("gearbox", "Коробка", car.gearbox)}
            <div class="field">
              <label>Статус</label>
              <select data-field="status">
                ${option("sale", "В продажу", car.status)}
                ${option("commission", "Комісійний продаж", car.status)}
                ${option("booked", "Бронь", car.status)}
                ${option("sold", "Продано", car.status)}
              </select>
            </div>
            <div class="field wide">
              <label>Опис</label>
              <textarea data-field="description">${escapeHtml(car.description)}</textarea>
            </div>
          </div>
        </div>

        <div class="photos-editor">
          <div class="photos-title">Фото авто</div>
          <div class="photos-grid">
            ${(car.photos || []).map((src, photoIndex) => `
              <div class="photo-tile" data-photo-index="${photoIndex}">
                <img src="${escapeHtml(src)}" alt="" />
                <button class="photo-remove" type="button" data-action="remove-photo" data-photo-index="${photoIndex}" aria-label="Видалити фото">×</button>
              </div>
            `).join("")}
            <label class="photo-add">
              <input type="file" accept="image/*" multiple data-action="add-photos" />
              <span><b>+</b>Додати фото</span>
            </label>
          </div>
        </div>

        <div class="editor-actions">
          <button class="primary" type="button" data-action="save-car">Зберегти</button>
          <button class="danger" type="button" data-action="delete-car">Видалити авто</button>
          <button class="ghost" type="button" data-action="back-catalog">Назад до каталогу</button>
        </div>
      </article>
    `;
  }

  function field(name, label, value) {
    return `
      <div class="field">
        <label>${label}</label>
        <input data-field="${name}" value="${escapeHtml(value)}" />
      </div>
    `;
  }

  function option(value, label, current) {
    return `<option value="${value}" ${value === current ? "selected" : ""}>${label}</option>`;
  }

  function addNewCar() {
    const id = "new-" + slug(Date.now());
    const car = {
      id,
      title: "Нове авто",
      brand: "",
      model: "",
      year: new Date().getFullYear(),
      price: "$ 0",
      credit: "В кредит від $ 180/міс",
      status: "sale",
      fuel: "",
      fuelKey: "",
      engine: "",
      gearbox: "Автомат",
      gearboxKey: "auto",
      mileage: "",
      city: "Київ",
      body: "",
      image: "",
      detailImage: "",
      featuredImage: "",
      photos: [],
      description: ""
    };

    cars.unshift(car);
    renderEditor(0);
  }

  function updateActiveField(field, value) {
    if (activeIndex === null) return;
    if (field === "year") cars[activeIndex][field] = Number(value) || value;
    else cars[activeIndex][field] = value;

    if (field === "title" && cars[activeIndex].id.startsWith("new-")) {
      cars[activeIndex].id = slug(value) + "-" + Date.now().toString().slice(-5);
    }
  }

  function readFiles(files) {
    return Promise.all(Array.from(files).map((file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    })));
  }

  async function saveActiveCar() {
    if (activeIndex === null) return;
    const car = cars[activeIndex];
    const photos = (car.photos || []).filter(Boolean);
    car.image = photos[0] || car.image;
    car.detailImage = photos[0] || car.detailImage;
    car.featuredImage = photos[0] || car.featuredImage;
    car.photos = photos;

    try {
      await upsertCars([car]);
      showToast("Авто збережено.");
      renderEditor(activeIndex);
    } catch (error) {
      console.error(error);
      showToast("Помилка збереження.");
    }
  }

  async function deleteActiveCar() {
    if (activeIndex === null) return;
    const car = cars[activeIndex];
    const ok = confirm(`Видалити ${car.title || "це авто"}?`);
    if (!ok) return;

    try {
      await deleteCarFromDb(car);
      cars.splice(activeIndex, 1);
      localStorage.setItem(KEY, JSON.stringify(cars));
      showToast("Авто видалено.");
      renderCatalog();
    } catch (error) {
      console.error(error);
      showToast("Помилка видалення.");
    }
  }

  function showToast(text) {
    toastNode.textContent = text;
    toastNode.classList.add("show");
    setTimeout(() => toastNode.classList.remove("show"), 2600);
  }

  catalogNode.addEventListener("click", (event) => {
    const card = event.target.closest(".admin-car-card");
    if (!card) return;
    renderEditor(Number(card.dataset.index));
  });

  catalogNode.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const card = event.target.closest(".admin-car-card");
    if (!card) return;
    renderEditor(Number(card.dataset.index));
  });

  editorWrap.addEventListener("input", async (event) => {
    const field = event.target.dataset.field;
    if (field) updateActiveField(field, event.target.value);
  });

  editorWrap.addEventListener("change", async (event) => {
    if (event.target.dataset.action !== "add-photos") return;
    if (activeIndex === null) return;
    const files = event.target.files;
    if (!files || !files.length) return;

    showToast("Додаю фото...");
    const images = await readFiles(files);
    cars[activeIndex].photos = (cars[activeIndex].photos || []).concat(images);
    renderEditor(activeIndex);
  });

  editorWrap.addEventListener("click", async (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;

    if (action === "remove-photo") {
      const photoIndex = Number(target.dataset.photoIndex);
      cars[activeIndex].photos.splice(photoIndex, 1);
      renderEditor(activeIndex);
    }

    if (action === "save-car") saveActiveCar();
    if (action === "delete-car") deleteActiveCar();
    if (action === "back-catalog") renderCatalog();
  });

  addBtn.addEventListener("click", addNewCar);
  backBtn.addEventListener("click", renderCatalog);

  loadCars();
})();
