const HOUR = 60 * 60 * 1000;

const defaultCars = [
  {
    id: "bmw-x5-40i",
    title: "BMW X5 xDrive40i M Sport",
    make: "BMW",
    model: "X5",
    year: 2021,
    mileage: 45700,
    city: "Київ",
    price: 2750000,
    fuel: "Бензин",
    gearbox: "Автомат",
    body: "Позашляховик",
    engine: "3.0 л",
    status: "В наявності",
    verified: true,
    addedAt: new Date(Date.now() - 8 * HOUR).toISOString(),
    cover: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=86",
    photos: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=86",
    ],
    description:
      "Офіційний автомобіль, куплений новим в Україні. Один власник. Повна сервісна історія на офіційному СТО. Без ДТП та підфарбувань. Ідеальний стан як технічно, так і візуально. Максимальна комплектація M Sport.",
  },
  {
    id: "mercedes-e220d",
    title: "Mercedes-Benz E 220 d",
    make: "Mercedes-Benz",
    model: "E-Class",
    year: 2020,
    mileage: 57300,
    city: "Львів",
    price: 1890000,
    fuel: "Дизель",
    gearbox: "Автомат",
    body: "Седан",
    engine: "2.0 л",
    status: "В наявності",
    verified: true,
    addedAt: new Date(Date.now() - 26 * HOUR).toISOString(),
    cover: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=86",
    photos: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=86",
    ],
    description:
      "Комфортний бізнес-седан з економним дизельним двигуном. Авто перевірене по базах, має прозору історію та охайний салон. Готове до будь-якої додаткової перевірки.",
  },
  {
    id: "audi-q7-45tdi",
    title: "Audi Q7 45 TDI",
    make: "Audi",
    model: "Q7",
    year: 2020,
    mileage: 74200,
    city: "Одеса",
    price: 2150000,
    fuel: "Дизель",
    gearbox: "Автомат",
    body: "Позашляховик",
    engine: "3.0 л",
    status: "В наявності",
    verified: true,
    addedAt: new Date(Date.now() - 64 * HOUR).toISOString(),
    cover: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=900&q=86",
    photos: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=86",
    ],
    description:
      "Сімейний SUV з повним приводом, багатою комплектацією та регулярним обслуговуванням. Кузов без критичних пошкоджень, технічна частина без зауважень.",
  },
  {
    id: "lexus-rx350",
    title: "Lexus RX 350",
    make: "Lexus",
    model: "RX",
    year: 2019,
    mileage: 82100,
    city: "Дніпро",
    price: 1950000,
    fuel: "Бензин",
    gearbox: "Автомат",
    body: "Кросовер",
    engine: "3.5 л",
    status: "В наявності",
    verified: true,
    addedAt: new Date(Date.now() - 36 * HOUR).toISOString(),
    cover: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=86",
    photos: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=86",
    ],
    description:
      "Надійний преміальний кросовер у доглянутому стані. Всі вузли перевірені, ходова тиха, салон чистий. Підійде для міста та далеких поїздок.",
  },
  {
    id: "porsche-macan-s",
    title: "Porsche Macan S",
    make: "Porsche",
    model: "Macan",
    year: 2018,
    mileage: 49800,
    city: "Київ",
    price: 2350000,
    fuel: "Бензин",
    gearbox: "Автомат",
    body: "Кросовер",
    engine: "3.0 л",
    status: "В наявності",
    verified: true,
    addedAt: new Date(Date.now() - 80 * HOUR).toISOString(),
    cover: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=86",
    photos: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=86",
    ],
    description:
      "Динамічний кросовер з живим мотором та акуратним салоном. Автомобіль проходив планове обслуговування, готовий до тест-драйву та перевірки.",
  },
  {
    id: "range-rover-velar",
    title: "Range Rover Velar P250",
    make: "Land Rover",
    model: "Range Rover Velar",
    year: 2021,
    mileage: 61000,
    city: "Харків",
    price: 2790000,
    fuel: "Бензин",
    gearbox: "Автомат",
    body: "Позашляховик",
    engine: "2.0 л",
    status: "В наявності",
    verified: true,
    addedAt: new Date(Date.now() - 14 * HOUR).toISOString(),
    cover: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=86",
    photos: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=86",
    ],
    description:
      "Стильний преміальний SUV з якісною комплектацією. Пройдено повну діагностику, підтверджений пробіг, кузов та салон у відмінному стані.",
  },
  {
    id: "audi-a6-45tfsi",
    title: "Audi A6 45 TFSI",
    make: "Audi",
    model: "A6",
    year: 2020,
    mileage: 38700,
    city: "Київ",
    price: 1750000,
    fuel: "Бензин",
    gearbox: "Автомат",
    body: "Седан",
    engine: "2.0 л",
    status: "В наявності",
    verified: true,
    addedAt: new Date(Date.now() - 52 * HOUR).toISOString(),
    cover: "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?auto=format&fit=crop&w=900&q=86",
    photos: [
      "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3cf?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=86",
    ],
    description:
      "Сучасний седан з приємною динамікою та комфортною підвіскою. Авто має гарну історію, чистий салон і готове до щоденної експлуатації.",
  },
  {
    id: "mercedes-gle300d",
    title: "Mercedes-Benz GLE 300d",
    make: "Mercedes-Benz",
    model: "GLE",
    year: 2021,
    mileage: 61200,
    city: "Тернопіль",
    price: 2450000,
    fuel: "Дизель",
    gearbox: "Автомат",
    body: "Позашляховик",
    engine: "2.0 л",
    status: "В наявності",
    verified: true,
    addedAt: new Date(Date.now() - 6 * HOUR).toISOString(),
    cover: "https://images.unsplash.com/photo-1549927681-0b673b8243ab?auto=format&fit=crop&w=900&q=86",
    photos: [
      "https://images.unsplash.com/photo-1549927681-0b673b8243ab?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=86",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=86",
    ],
    description:
      "Комфортний та економний GLE з підтвердженою історією. Автомобіль після комплексної перевірки, без прихованих дефектів і готовий до оформлення.",
  },
];

const routes = [
  { id: "showroom", label: "Showroom", icon: "car" },
  { id: "catalog", label: "Каталог", icon: "grid" },
  { id: "new", label: "Новинки", icon: "star" },
  { id: "favorites", label: "Обране", icon: "heart" },
];


const STORAGE = {
  cars: "garant-auto:admin-cars",
};

const demoCover = "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=86";

const listView = document.querySelector('[data-admin-view="list"]');
const editorView = document.querySelector('[data-admin-view="editor"]');
const form = document.querySelector("[data-car-form]");
const list = document.querySelector("[data-admin-list]");
const formTitle = document.querySelector("[data-form-title]");
const photoInput = document.querySelector("[data-photo-input]");
const photoGrid = document.querySelector("[data-photo-grid]");
const coverInput = document.querySelector("[data-cover-input]");
const photosInput = document.querySelector("[data-photos-input]");

let toastTimer = null;
let currentPhotos = [];

renderList();
showList();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  syncPhotoInputs();
  const formData = new FormData(form);
  const raw = Object.fromEntries(formData.entries());
  const existing = getCarById(raw.id);
  const car = normalizeCar(raw, existing);

  const adminCars = readAdminCars().filter((item) => item.id !== car.id);
  writeAdminCars([car, ...adminCars]);

  renderList();
  showList();
  showToast(existing ? "Авто збережено" : "Авто додано");
});

document.querySelectorAll("[data-add-car], [data-add-car-secondary]").forEach((button) => {
  button.addEventListener("click", () => openEditor());
});

document.querySelector("[data-back-to-list]").addEventListener("click", showList);
document.querySelector("[data-reset-form]").addEventListener("click", clearEditor);

photoInput.addEventListener("change", async (event) => {
  const files = [...event.target.files].filter((file) => file.type.startsWith("image/"));
  if (!files.length) return;

  const photos = await Promise.all(files.map(readFileAsDataUrl));
  currentPhotos = [...currentPhotos, ...photos];
  renderPhotoGrid();
  syncPhotoInputs();
  photoInput.value = "";
});

function readAdminCars() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.cars) || "[]");
  } catch {
    return [];
  }
}

function writeAdminCars(cars) {
  localStorage.setItem(STORAGE.cars, JSON.stringify(cars));
}

function allCarsForAdmin() {
  const carsById = new Map(defaultCars.map((car) => [car.id, car]));
  readAdminCars().forEach((car) => carsById.set(car.id, car));
  return [...carsById.values()].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
}

function getCarById(id) {
  if (!id) return null;
  return allCarsForAdmin().find((car) => car.id === id) || null;
}

function normalizeCar(raw, existing) {
  const photos = parsePhotos(raw.photos);
  const cover = photos[0] || raw.cover || existing?.cover || demoCover;

  return {
    id: raw.id || `custom-${Date.now()}`,
    title: raw.title.trim(),
    make: raw.make.trim(),
    model: raw.model.trim(),
    year: Number(raw.year),
    mileage: Number(raw.mileage),
    city: raw.city.trim(),
    price: Number(raw.price),
    fuel: raw.fuel,
    gearbox: raw.gearbox,
    body: raw.body.trim(),
    engine: raw.engine.trim(),
    status: raw.status || "В наявності",
    verified: existing?.verified ?? true,
    addedAt: existing?.addedAt || new Date().toISOString(),
    cover,
    photos: photos.length ? photos : [cover],
    description: raw.description.trim(),
  };
}

function parsePhotos(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return String(value)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
}

function renderList() {
  const cars = allCarsForAdmin();

  list.innerHTML = cars
    .map(
      (car) => `
        <article class="car-card admin-car-card" tabindex="0" data-edit-car="${escapeAttr(car.id)}">
          <div class="car-media">
            <img src="${escapeAttr(car.cover || car.photos?.[0] || demoCover)}" alt="${escapeAttr(car.title)}" loading="lazy" />
            <span class="admin-card-badge">Редагувати</span>
          </div>
          <div class="car-body">
            <h3 class="car-title">${escapeHtml(car.title)}</h3>
            <p class="car-meta">${car.year} · ${formatKm(car.mileage)} · ${escapeHtml(car.city || "")}</p>
            <p class="price">${formatPrice(car.price)}</p>
            <div class="chips">
              <span class="chip">${escapeHtml(car.fuel)}</span>
              <span class="chip">${escapeHtml(car.gearbox)}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  list.querySelectorAll("[data-edit-car]").forEach((card) => {
    const open = () => openEditor(card.dataset.editCar);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function openEditor(id = "") {
  const car = getCarById(id);
  form.reset();

  form.elements.id.value = car?.id || "";
  form.elements.title.value = car?.title || "";
  form.elements.status.value = car?.status || "В наявності";
  form.elements.make.value = car?.make || "";
  form.elements.model.value = car?.model || "";
  form.elements.price.value = car?.price || "";
  form.elements.year.value = car?.year || "";
  form.elements.mileage.value = car?.mileage || "";
  form.elements.city.value = car?.city || "";
  form.elements.fuel.value = car?.fuel || "Бензин";
  form.elements.gearbox.value = car?.gearbox || "Автомат";
  form.elements.body.value = car?.body || "";
  form.elements.engine.value = car?.engine || "";
  form.elements.description.value = car?.description || "";

  currentPhotos = car ? uniquePhotos([car.cover, ...(car.photos || [])]) : [];
  formTitle.textContent = car ? `Редагувати: ${car.title}` : "Додати авто";
  renderPhotoGrid();
  syncPhotoInputs();
  showEditor();
}

function clearEditor() {
  form.reset();
  form.elements.id.value = "";
  form.elements.status.value = "В наявності";
  form.elements.fuel.value = "Бензин";
  form.elements.gearbox.value = "Автомат";
  currentPhotos = [];
  formTitle.textContent = "Додати авто";
  renderPhotoGrid();
  syncPhotoInputs();
}

function showList() {
  editorView.classList.remove("is-active");
  listView.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showEditor() {
  listView.classList.remove("is-active");
  editorView.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPhotoGrid() {
  photoGrid.innerHTML = `
    ${currentPhotos
      .map(
        (photo, index) => `
          <div class="photo-tile ${index === 0 ? "is-cover" : ""}">
            <img src="${escapeAttr(photo)}" alt="Фото авто ${index + 1}" />
            ${index === 0 ? `<span class="cover-label">Головне</span>` : `<button type="button" class="cover-button" data-make-cover="${index}">Головне</button>`}
            <button type="button" class="remove-photo" aria-label="Видалити фото" data-remove-photo="${index}">×</button>
          </div>
        `,
      )
      .join("")}
    <button class="photo-add" type="button" data-add-photo>
      <span>+</span>
      <small>Додати фото</small>
    </button>
  `;

  photoGrid.querySelector("[data-add-photo]").addEventListener("click", () => photoInput.click());
  photoGrid.querySelectorAll("[data-remove-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      currentPhotos.splice(Number(button.dataset.removePhoto), 1);
      renderPhotoGrid();
      syncPhotoInputs();
    });
  });
  photoGrid.querySelectorAll("[data-make-cover]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.makeCover);
      const [photo] = currentPhotos.splice(index, 1);
      currentPhotos.unshift(photo);
      renderPhotoGrid();
      syncPhotoInputs();
    });
  });
}

function syncPhotoInputs() {
  const photos = uniquePhotos(currentPhotos);
  currentPhotos = photos;
  coverInput.value = photos[0] || demoCover;
  photosInput.value = JSON.stringify(photos.length ? photos : [demoCover]);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function uniquePhotos(photos) {
  return [...new Set(photos.filter(Boolean))];
}

function formatPrice(value) {
  return `${new Intl.NumberFormat("uk-UA").format(Number(value) || 0)} ₴`;
}

function formatKm(value) {
  return `${new Intl.NumberFormat("uk-UA").format(Number(value) || 0)} км`;
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1900);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
