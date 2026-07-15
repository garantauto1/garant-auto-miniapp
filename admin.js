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
    price: 68750,
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
    price: 47250,
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
    price: 53750,
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
    price: 48750,
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
    price: 58750,
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
    price: 69750,
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
    price: 43750,
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
    price: 61250,
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


const SUPABASE_URL = "https://qxlerdtnibglxwluazup.supabase.co";
const SUPABASE_KEY = "sb_publishable__-J2w7Ysxu-_Dqn4lH9fFg_msVAnv7P";
const SUPABASE_CARS_TABLE = "cars";
const SUPABASE_BUCKET = "car-photos";

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
const deleteCarButton = document.querySelector("[data-delete-car]");
const adminActions = document.querySelector("[data-admin-actions]");

let toastTimer = null;
let currentPhotos = [];
let carsCache = [];
let carsReady = false;
let saving = false;
let deleting = false;

bindStaticEvents();
renderLoading();
loadCarsFromSupabase();
showList();

function bindStaticEvents() {
  form.addEventListener("submit", onSubmitCar);

  document.querySelectorAll("[data-add-car], [data-add-car-secondary]").forEach((button) => {
    button.addEventListener("click", () => openEditor());
  });

  document.querySelector("[data-back-to-list]").addEventListener("click", showList);
  document.querySelector("[data-reset-form]").addEventListener("click", clearEditor);
  deleteCarButton?.addEventListener("click", onDeleteCurrentCar);

  photoInput.addEventListener("change", onPhotosSelected);
}

function supabaseHeaders(extra = {}) {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    ...options,
    headers: supabaseHeaders(options.headers || {}),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(details || `Supabase error ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function loadCarsFromSupabase() {
  try {
    let rows = await supabaseRequest(`/rest/v1/${SUPABASE_CARS_TABLE}?select=*&order=created_at.desc`);
    if (!Array.isArray(rows)) rows = [];

    if (!rows.length) {
      rows = await seedDefaultCars();
      showToast("Каталог додано в Supabase");
    }

    carsCache = rows.map(rowToCar).filter(Boolean);
    carsReady = true;
    renderList();
  } catch (error) {
    console.error("Supabase load failed", error);
    carsReady = false;
    carsCache = [...defaultCars];
    renderList("Не вдалося підключитися до Supabase. Перевір SQL-таблицю cars, bucket car-photos і policies.");
  }
}

async function seedDefaultCars() {
  const payload = defaultCars.map(carToRow);
  const rows = await supabaseRequest(`/rest/v1/${SUPABASE_CARS_TABLE}?select=*`, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(payload),
  });
  return Array.isArray(rows) ? rows : [];
}

async function onSubmitCar(event) {
  event.preventDefault();
  if (saving) return;

  try {
    saving = true;
    syncPhotoInputs();
    setSubmitState(true);

    const formData = new FormData(form);
    const raw = Object.fromEntries(formData.entries());
    const existing = getCarById(raw.id);
    const car = normalizeCar(raw, existing);
    const rowPayload = carToRow(car);

    let savedRows;
    if (existing?.id) {
      savedRows = await supabaseRequest(`/rest/v1/${SUPABASE_CARS_TABLE}?id=eq.${encodeURIComponent(existing.id)}&select=*`, {
        method: "PATCH",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(rowPayload),
      });
    } else {
      savedRows = await supabaseRequest(`/rest/v1/${SUPABASE_CARS_TABLE}?select=*`, {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(rowPayload),
      });
    }

    const savedCar = rowToCar(Array.isArray(savedRows) ? savedRows[0] : savedRows);
    if (!savedCar) throw new Error("Supabase не повернув авто після збереження");

    carsCache = [savedCar, ...carsCache.filter((item) => item.id !== savedCar.id)];
    renderList();
    showList();
    showToast(existing ? "Авто збережено в Supabase" : "Авто додано в Supabase");
  } catch (error) {
    console.error("Save car failed", error);
    showToast("Помилка збереження. Перевір Supabase policies.");
  } finally {
    saving = false;
    setSubmitState(false);
  }
}

async function onDeleteCurrentCar() {
  if (deleting || saving) return;

  const carId = form.elements.id.value;
  const car = getCarById(carId);
  if (!car?.id) {
    showToast("Спочатку відкрий авто з каталогу");
    return;
  }

  const confirmed = window.confirm(`Видалити авто «${car.title || "без назви"}» з каталогу повністю?`);
  if (!confirmed) return;

  try {
    deleting = true;
    setDeleteState(true);

    await supabaseRequest(`/rest/v1/${SUPABASE_CARS_TABLE}?id=eq.${encodeURIComponent(car.id)}`, {
      method: "DELETE",
    });

    await deleteCarPhotosFromStorage(car);

    carsCache = carsCache.filter((item) => String(item.id) !== String(car.id));
    renderList();
    clearEditor();
    showList();
    showToast("Авто видалено з каталогу");
  } catch (error) {
    console.error("Delete car failed", error);
    showToast("Помилка видалення. Перевір Supabase delete policy.");
  } finally {
    deleting = false;
    setDeleteState(false);
  }
}

async function deleteCarPhotosFromStorage(car) {
  const paths = uniquePhotos([car.cover, ...(car.photos || [])])
    .map(getStoragePathFromPublicUrl)
    .filter(Boolean);

  if (!paths.length) return;

  try {
    const response = await fetch(`${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}`, {
      method: "DELETE",
      headers: supabaseHeaders(),
      body: JSON.stringify({ prefixes: paths }),
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "");
      console.warn("Storage photos were not deleted", details || response.status);
    }
  } catch (error) {
    console.warn("Storage photos were not deleted", error);
  }
}

function getStoragePathFromPublicUrl(url) {
  const value = String(url || "");
  const marker = `/storage/v1/object/public/${SUPABASE_BUCKET}/`;
  const index = value.indexOf(marker);
  if (index === -1) return "";

  return decodeURIComponent(value.slice(index + marker.length));
}

async function onPhotosSelected(event) {
  const files = [...event.target.files].filter((file) => file.type.startsWith("image/"));
  if (!files.length) return;

  try {
    showToast("Завантажую фото...");
    const uploaded = [];

    for (const file of files) {
      uploaded.push(await uploadPhotoFile(file));
    }

    currentPhotos = uniquePhotos([...currentPhotos, ...uploaded]);
    renderPhotoGrid();
    syncPhotoInputs();
    showToast("Фото додано");
  } catch (error) {
    console.error("Photo upload failed", error);
    showToast("Фото не завантажилось. Перевір bucket car-photos.");
  } finally {
    photoInput.value = "";
  }
}

async function uploadPhotoFile(file) {
  const safeName = makeSafeFileName(file.name);
  const path = `car-${Date.now()}-${Math.random().toString(16).slice(2)}-${safeName}`;
  const response = await fetch(`${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}/${path}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "x-upsert": "true",
      "Content-Type": file.type || "application/octet-stream",
    },
    body: file,
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(details || `Storage error ${response.status}`);
  }

  return `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/${path}`;
}

function makeSafeFileName(name) {
  const clean = String(name || "photo.jpg")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return clean || "photo.jpg";
}

function allCarsForAdmin() {
  return [...carsCache].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
}

function getCarById(id) {
  if (!id) return null;
  return allCarsForAdmin().find((car) => String(car.id) === String(id)) || null;
}

function rowToCar(row) {
  if (!row) return null;
  const photos = Array.isArray(row.image_urls) ? row.image_urls.filter(Boolean) : parsePhotos(row.image_urls);
  const cover = row.image_url || photos[0] || demoCover;

  return {
    id: String(row.id),
    title: row.name || "Авто без назви",
    make: row.brand || "",
    model: row.model || "",
    year: Number(row.year) || new Date().getFullYear(),
    mileage: numberFromValue(row.mileage),
    city: row.city || "",
    price: priceToUsd(row.price),
    fuel: row.fuel || "",
    gearbox: row.gearbox || "",
    body: row.body || "",
    engine: row.engine || "",
    status: row.status || "В наявності",
    verified: true,
    addedAt: row.created_at || new Date().toISOString(),
    cover,
    photos: photos.length ? photos : [cover],
    description: row.description || "",
  };
}

function carToRow(car) {
  const photos = Array.isArray(car.photos) ? car.photos.filter(Boolean) : [];
  const cover = car.cover || photos[0] || demoCover;

  return {
    name: car.title || "Авто без назви",
    brand: car.make || "",
    model: car.model || "",
    price: String(car.price || ""),
    year: Number(car.year) || null,
    mileage: String(car.mileage || ""),
    city: car.city || "",
    fuel: car.fuel || "",
    gearbox: car.gearbox || "",
    body: car.body || "",
    engine: car.engine || "",
    status: car.status || "В наявності",
    description: car.description || "",
    image_url: cover,
    image_urls: photos.length ? photos : [cover],
  };
}

function normalizeCar(raw, existing) {
  const photos = parsePhotos(raw.photos);
  const cover = photos[0] || raw.cover || existing?.cover || demoCover;

  return {
    id: existing?.id || raw.id || "",
    title: String(raw.title || "").trim(),
    make: String(raw.make || "").trim(),
    model: String(raw.model || "").trim(),
    year: Number(raw.year),
    mileage: Number(raw.mileage),
    city: String(raw.city || "").trim(),
    price: priceToUsd(raw.price),
    fuel: raw.fuel || "",
    gearbox: raw.gearbox || "",
    body: String(raw.body || "").trim(),
    engine: String(raw.engine || "").trim(),
    status: raw.status || "В наявності",
    verified: existing?.verified ?? true,
    addedAt: existing?.addedAt || new Date().toISOString(),
    cover,
    photos: photos.length ? photos : [cover],
    description: String(raw.description || "").trim(),
  };
}

function parsePhotos(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
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

function numberFromValue(value) {
  if (typeof value === "number") return value;
  const cleaned = String(value || "").replace(/[^0-9]/g, "");
  return Number(cleaned) || 0;
}

function priceToUsd(value) {
  const number = numberFromValue(value);
  // Старі записи могли залишитися в гривнях. У адмінці показуємо єдину валюту — долари.
  return number > 300000 ? Math.round(number / 40) : number;
}

function renderLoading() {
  list.innerHTML = `<div class="empty-state"><div><h2>Завантажую авто...</h2><p>Підключаю каталог із Supabase.</p></div></div>`;
}

function renderList(errorMessage = "") {
  const cars = allCarsForAdmin();

  if (!cars.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div>
          <h2>Авто ще немає</h2>
          <p>${errorMessage || "Натисни Додати авто, щоб створити першу карточку."}</p>
        </div>
      </div>
    `;
    return;
  }

  list.innerHTML = `
    ${errorMessage ? `<div class="admin-warning">${escapeHtml(errorMessage)}</div>` : ""}
    ${cars
      .map(
        (car) => `
          <article class="car-card admin-car-card" tabindex="0" data-edit-car="${escapeAttr(car.id)}">
            <div class="car-media">
              <img src="${escapeAttr(car.cover || car.photos?.[0] || demoCover)}" alt="${escapeAttr(car.title)}" loading="lazy" />
              <span class="admin-card-badge">Редагувати</span>
            </div>
            <div class="car-body">
              <div class="car-title-row">
                <h3>${escapeHtml(car.title)}</h3>
                <span class="status-badge">${escapeHtml(car.status || "В наявності")}</span>
              </div>
              <p class="car-subtitle">${escapeHtml([car.make, car.model, car.year].filter(Boolean).join(" · "))}</p>
              <div class="car-meta">
                <span>${formatKm(car.mileage)}</span>
                <span>${escapeHtml(car.fuel || "—")}</span>
                <span>${escapeHtml(car.gearbox || "—")}</span>
              </div>
              <div class="car-foot">
                <strong>${formatPrice(car.price)}</strong>
                <span>${escapeHtml(car.city || "")}</span>
              </div>
            </div>
          </article>
        `,
      )
      .join("")}
  `;

  list.querySelectorAll("[data-edit-car]").forEach((card) => {
    card.addEventListener("click", () => openEditor(card.dataset.editCar));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openEditor(card.dataset.editCar);
      }
    });
  });
}

function showList() {
  listView.classList.add("is-active");
  editorView.classList.remove("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openEditor(id = "") {
  const car = getCarById(id);
  form.reset();
  form.elements.id.value = car?.id || "";
  formTitle.textContent = car ? "Редагування авто" : "Нове авто";
  setDeleteButtonVisible(Boolean(car));
  currentPhotos = car ? uniquePhotos([car.cover, ...(car.photos || [])]) : [];

  if (car) {
    fillForm(car);
  }

  renderPhotoGrid();
  syncPhotoInputs();
  listView.classList.remove("is-active");
  editorView.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function fillForm(car) {
  form.elements.title.value = car.title || "";
  form.elements.status.value = car.status || "В наявності";
  form.elements.make.value = car.make || "";
  form.elements.model.value = car.model || "";
  form.elements.price.value = car.price || "";
  form.elements.year.value = car.year || "";
  form.elements.mileage.value = car.mileage || "";
  form.elements.city.value = car.city || "";
  form.elements.fuel.value = car.fuel || "Бензин";
  form.elements.gearbox.value = car.gearbox || "Автомат";
  form.elements.body.value = car.body || "";
  form.elements.engine.value = car.engine || "";
  form.elements.description.value = car.description || "";
}

function clearEditor() {
  form.reset();
  form.elements.id.value = "";
  currentPhotos = [];
  renderPhotoGrid();
  syncPhotoInputs();
  formTitle.textContent = "Нове авто";
  setDeleteButtonVisible(false);
}

function renderPhotoGrid() {
  photoGrid.innerHTML = `
    ${currentPhotos
      .map(
        (photo, index) => `
          <div class="photo-tile ${index === 0 ? "is-cover" : ""}">
            <img src="${escapeAttr(photo)}" alt="Фото авто ${index + 1}" />
            ${index === 0 ? `<span>Головне</span>` : `<button type="button" data-make-cover="${index}">Головне</button>`}
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

function uniquePhotos(photos) {
  return [...new Set((photos || []).filter(Boolean))];
}

function setSubmitState(active) {
  const submit = form.querySelector('button[type="submit"]');
  if (!submit) return;
  submit.disabled = active;
  submit.textContent = active ? "Зберігаю..." : "Зберегти авто";
}

function setDeleteButtonVisible(visible) {
  if (!deleteCarButton) return;
  deleteCarButton.hidden = !visible;
  adminActions?.classList.toggle("has-delete", visible);
}

function setDeleteState(active) {
  if (!deleteCarButton) return;
  deleteCarButton.disabled = active;
  deleteCarButton.textContent = active ? "Видаляю..." : "Видалити авто";
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceToUsd(value));
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
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
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
