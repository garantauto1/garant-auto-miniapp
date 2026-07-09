const STORAGE = {
  favorites: "garant-auto:favorites",
  cars: "garant-auto:admin-cars",
  filters: "garant-auto:filters",
};

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

const iconPaths = {
  car: '<path d="M5 17h14l-1.4-5.1A3 3 0 0 0 14.7 10H9.3a3 3 0 0 0-2.9 1.9L5 17Z"/><path d="M7 17v2"/><path d="M17 17v2"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M9 10l1-3h4l1 3"/>',
  grid: '<path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h6v6h-6z"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
  heart: '<path d="M20.8 4.6a5.4 5.4 0 0 0-7.7 0L12 5.8l-1.1-1.2a5.4 5.4 0 0 0-7.7 7.7L12 21l8.8-8.7a5.4 5.4 0 0 0 0-7.7Z"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  sliders: '<path d="M4 6h9"/><path d="M17 6h3"/><path d="M15 4v4"/><path d="M4 12h3"/><path d="M11 12h9"/><path d="M9 10v4"/><path d="M4 18h10"/><path d="M18 18h2"/><path d="M16 16v4"/>',
  sort: '<path d="M7 4v16"/><path d="m3 8 4-4 4 4"/><path d="M17 20V4"/><path d="m13 16 4 4 4-4"/>',
  list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m11 5-7 7 7 7"/>',
  share: '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M16 6 12 2 8 6"/><path d="M12 2v14"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8.1 9.6a16 16 0 0 0 6.3 6.3l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
  gauge: '<path d="M4 14a8 8 0 0 1 16 0"/><path d="M12 14l4-4"/><path d="M9 18h6"/>',
  mapPin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  engine: '<path d="M3 10h3l2-3h7l2 3h4v8H3z"/><path d="M7 7V4h8v3"/><path d="M21 13h2"/><path d="M1 13h2"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
};

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

const brandOptions = [
  "Abarth",
  "Acura",
  "Alfa Romeo",
  "Alpine",
  "Aston Martin",
  "Audi",
  "BAIC",
  "Bentley",
  "BMW",
  "Brilliance",
  "Bugatti",
  "Buick",
  "BYD",
  "Cadillac",
  "Changan",
  "Chery",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Cupra",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "Dongfeng",
  "DS",
  "Ferrari",
  "Fiat",
  "Ford",
  "Geely",
  "Genesis",
  "GMC",
  "Great Wall",
  "Haval",
  "Honda",
  "Hongqi",
  "Hyundai",
  "Infiniti",
  "Isuzu",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Maserati",
  "Maybach",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MG",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Polestar",
  "Porsche",
  "RAM",
  "Renault",
  "Rolls-Royce",
  "Rover",
  "Saab",
  "Seat",
  "Skoda",
  "Smart",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "Zeekr",
];

const fuelOptions = ["Бензин", "Дизель", "Гібрид", "Електро"];
const gearboxOptions = ["Автомат", "Механіка", "Типтронік", "Робот", "Варіатор", "DSG", "Напівавтомат", "Секвентальна"];
const sortOptions = [
  { id: "newest", label: "Новіші", fullLabel: "Новіші" },
  { id: "priceAsc", label: "Дешевші", fullLabel: "За ціною нижчою" },
  { id: "priceDesc", label: "Дорожчі", fullLabel: "За ціною вищою" },
];

const SUPABASE_URL = "https://qxlerdtnibglxwluazup.supabase.co";
const SUPABASE_KEY = "sb_publishable__-J2w7Ysxu-_Dqn4lH9fFg_msVAnv7P";
const SUPABASE_CARS_TABLE = "cars";
const MANAGER_TELEGRAM_URL = "https://t.me/garantauto_manager";
const PHONE_NUMBERS = [
  { label: "+380 (63) 709 04 37", tel: "+380637090437" },
  { label: "+380 (93) 939 30 33", tel: "+380939393033" },
];

let remoteCars = [];
let carsLoading = true;
let carsLoadError = "";

const app = document.getElementById("app");

const state = {
  route: "showroom",
  returnRoute: "showroom",
  selectedCarId: null,
  selectedPhoto: 0,
  galleryOpen: false,
  callSheetOpen: false,
  query: "",
  filters: readJson(STORAGE.filters, emptyFilters()),
  view: "grid",
  sort: "newest",
  sortOpen: false,
};

let toastTimer = null;

bootTelegram();
render();
loadCarsFromSupabase();

function bootTelegram() {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#05070c");
  tg.setBackgroundColor("#05070c");
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
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
  carsLoading = true;
  carsLoadError = "";

  try {
    let rows = await supabaseRequest(`/rest/v1/${SUPABASE_CARS_TABLE}?select=*&order=created_at.desc`);

    if (!Array.isArray(rows)) rows = [];
    if (!rows.length) {
      rows = await seedDefaultCars();
    }

    remoteCars = rows.map(rowToCar).filter(Boolean);
    carsLoading = false;
    render();
  } catch (error) {
    console.error("Supabase cars load failed", error);
    carsLoadError = "Supabase не завантажив авто, показую локальний каталог.";
    carsLoading = false;
    render();
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

function rowToCar(row) {
  if (!row) return null;
  const photos = Array.isArray(row.image_urls) ? row.image_urls.filter(Boolean) : parsePhotoList(row.image_urls);
  const cover = row.image_url || photos[0] || "";

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
    photos: photos.length ? photos : cover ? [cover] : [],
    description: row.description || "",
  };
}

function carToRow(car) {
  const photos = Array.isArray(car.photos) ? car.photos.filter(Boolean) : [];
  const cover = car.cover || photos[0] || "";

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
    image_urls: photos.length ? photos : cover ? [cover] : [],
  };
}

function parsePhotoList(value) {
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
  // Старі авто могли бути збережені в гривнях. Якщо число схоже на гривневу ціну,
  // показуємо його як долари, щоб у каталозі та адмінці все було в одній валюті.
  return number > 300000 ? Math.round(number / 40) : number;
}

function emptyFilters() {
  return {
    minPrice: "",
    maxPrice: "",
    make: "",
    minYear: "",
    maxYear: "",
    fuel: "",
    gearbox: "",
    maxMileage: "",
  };
}

function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || ""}</svg>`;
}

function allCars() {
  if (remoteCars.length) {
    return [...remoteCars].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
  }

  const adminCars = readJson(STORAGE.cars, []);
  const carsById = new Map(defaultCars.map((car) => [car.id, car]));
  adminCars.forEach((car) => carsById.set(car.id, car));
  return [...carsById.values()].sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
}

function favorites() {
  return readJson(STORAGE.favorites, []);
}

function saveFavorites(ids) {
  writeJson(STORAGE.favorites, ids);
}

function isFavorite(id) {
  return favorites().includes(id);
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

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function activeRoute() {
  return state.route === "detail" ? state.returnRoute : state.route;
}

function isNewCar(car) {
  const added = new Date(car.addedAt).getTime();
  return Number.isFinite(added) && Date.now() - added <= 2 * DAY;
}

function filteredCars(inputCars = allCars()) {
  const query = normalizeText(state.query);
  const filters = state.filters;
  let cars = inputCars.filter((car) => {
    const haystack = normalizeText(`${car.title} ${car.make} ${car.model} ${car.year} ${car.fuel} ${car.gearbox} ${car.city}`);
    if (query && !haystack.includes(query)) return false;
    if (filters.minPrice && car.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && car.price > Number(filters.maxPrice)) return false;
    if (filters.make && car.make !== filters.make) return false;
    if (filters.minYear && car.year < Number(filters.minYear)) return false;
    if (filters.maxYear && car.year > Number(filters.maxYear)) return false;
    if (filters.fuel && car.fuel !== filters.fuel) return false;
    if (filters.gearbox && car.gearbox !== filters.gearbox) return false;
    if (filters.maxMileage && car.mileage > Number(filters.maxMileage)) return false;
    return true;
  });

  if (state.sort === "priceAsc") cars = cars.sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") cars = cars.sort((a, b) => b.price - a.price);
  if (state.sort === "newest") cars = cars.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
  return cars;
}

function uniqueValues(key) {
  return [...new Set(allCars().map((car) => car[key]).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "uk"));
}

function catalogBrandOptions() {
  return [...new Set([...brandOptions, ...uniqueValues("make")])].sort((a, b) => String(a).localeCompare(String(b), "en"));
}

function render() {
  app.innerHTML = `
    ${renderScreen()}
    ${renderBottomNav()}
    ${renderDrawer()}
    ${renderFilterSheet()}
    ${renderPhotoViewer()}
    ${renderCallSheet()}
    <div class="toast" data-toast></div>
  `;
  bindEvents();
}

function renderScreen() {
  if (state.route === "catalog") return renderCatalog();
  if (state.route === "new") return renderNew();
  if (state.route === "favorites") return renderFavorites();
  if (state.route === "detail") return renderDetail();
  return renderShowroom();
}

function renderTopbar(isShowroom = false) {
  if (isShowroom) {
    return `
      <header class="topbar showroom-topbar">
        ${renderLogo()}
        <div></div>
        <button class="icon-button hamburger" type="button" aria-label="Меню" data-open-drawer>${icon("menu")}</button>
      </header>
    `;
  }

  return `
    <header class="topbar">
      <div></div>
      ${renderLogo()}
      <button class="icon-button hamburger" type="button" aria-label="Меню" data-open-drawer>${icon("menu")}</button>
    </header>
  `;
}

function renderLogo() {
  return `
    <div class="logo-mark" aria-label="Garant Auto">
      <img class="logo-image" src="./assets/garant-logo.png" alt="Garant Auto" />
    </div>
  `;
}

function renderSearch(placeholder = "Пошук авто, бренду, моделі...") {
  return `
    <label class="search-bar">
      ${icon("search")}
      <input type="search" value="${escapeAttr(state.query)}" placeholder="${placeholder}" data-search />
      <button class="icon-button is-flat" type="button" aria-label="Фільтри" data-open-filters>${icon("sliders")}</button>
    </label>
  `;
}

function renderShowroom() {
  const cars = filteredCars(allCars()).slice(0, 8);
  return `
    <main class="screen showroom-screen">
      ${renderTopbar(true)}
      <section class="hero">
        <span class="hero-edge hero-edge-top" aria-hidden="true"></span>
        <span class="hero-edge hero-edge-right" aria-hidden="true"></span>
        <span class="hero-edge hero-edge-bottom" aria-hidden="true"></span>
        <span class="hero-edge hero-edge-left" aria-hidden="true"></span>
        <div class="hero-content">
          <button class="primary-ghost" type="button" data-route="catalog">
            Перейти до каталогу ${icon("arrowRight")}
          </button>
          ${renderSearch()}
        </div>
      </section>
      <section>
        <div class="section-head">
          <h2 class="section-title">Рекомендовані</h2>
          <button class="text-link" type="button" data-route="catalog">Дивитися всі ${icon("arrowRight")}</button>
        </div>
        <div class="rail" data-list="recommended">
          ${renderCardsOrEmpty(cars, "Поки немає авто за цим запитом", true)}
        </div>
      </section>
    </main>
  `;
}

function renderCatalog() {
  const cars = filteredCars(allCars());
  return `
    <main class="screen">
      ${renderTopbar()}
      <h1 class="page-title">Каталог</h1>
      ${renderSearch("Пошук авто, моделі, бренду...")}
      ${renderToolbar()}
      <section class="grid ${state.view === "list" ? "is-list" : ""}" data-list="catalog">
        ${renderCardsOrEmpty(cars, "Нічого не знайдено")}
      </section>
    </main>
  `;
}

function renderNew() {
  const cars = allCars().filter(isNewCar);
  return `
    <main class="screen">
      ${renderTopbar()}
      <h1 class="page-title">Новинки</h1>
      <section class="grid ${state.view === "list" ? "is-list" : ""}" data-list="new">
        ${renderCardsOrEmpty(cars, "Свіжі авто з'являться тут на 48 годин")}
      </section>
    </main>
  `;
}

function renderFavorites() {
  const ids = favorites();
  const cars = allCars().filter((car) => ids.includes(car.id));
  return `
    <main class="screen">
      ${renderTopbar()}
      <h1 class="page-title">Обране</h1>
      <section class="grid ${state.view === "list" ? "is-list" : ""}" data-list="favorites">
        ${renderCardsOrEmpty(cars, "Тут будуть авто, які користувач збереже для себе")}
      </section>
    </main>
  `;
}

function renderToolbar(withSort = true) {
  const filterCount = Object.values(state.filters).filter(Boolean).length;
  return `
    <div class="toolbar">
      <button class="pill-button filter-action ${filterCount ? "is-active" : ""}" type="button" data-open-filters>
        ${icon("sliders")} Фільтри${filterCount ? `: ${filterCount}` : ""}
      </button>
      ${
        withSort
          ? `<div class="sort-control ${state.sortOpen ? "is-open" : ""}">
              <button class="pill-button sort-button" type="button" data-sort-toggle>
                ${icon("sort")} <span class="sort-label">${sortLabel()}</span>
              </button>
              <div class="sort-popover" role="menu">
                ${sortOptions
                  .map(
                    (option) => `
                      <button class="${state.sort === option.id ? "is-active" : ""}" type="button" data-sort-option="${option.id}">
                        ${option.fullLabel}
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </div>`
          : ""
      }
      <div class="view-toggle" aria-label="Вид каталогу">
        <button type="button" class="${state.view === "grid" ? "is-active" : ""}" data-view="grid" aria-label="Сітка">${icon("grid")}</button>
        <button type="button" class="${state.view === "list" ? "is-active" : ""}" data-view="list" aria-label="Список">${icon("list")}</button>
      </div>
    </div>
  `;
}

function sortLabel() {
  return sortOptions.find((option) => option.id === state.sort)?.label || "Новіші";
}

function renderCardsOrEmpty(cars, message, compact = false) {
  if (!cars.length) {
    return `<div class="empty-state"><div><h2>${message}</h2><p>Спробуй змінити пошук або фільтри.</p></div></div>`;
  }
  return cars.map((car) => renderCard(car, compact)).join("");
}

function currentCar() {
  return allCars().find((item) => item.id === state.selectedCarId) || allCars()[0];
}

function currentPhotos(car = currentCar()) {
  if (!car) return [];
  const photos = Array.isArray(car.photos) ? car.photos.filter(Boolean) : [];
  if (photos.length) return photos;
  return [car.cover].filter(Boolean);
}

function normalizePhotoIndex(index, photos = currentPhotos()) {
  if (!photos.length) return 0;
  const length = photos.length;
  return ((index % length) + length) % length;
}

function changePhoto(delta) {
  const photos = currentPhotos();
  state.selectedPhoto = normalizePhotoIndex(state.selectedPhoto + delta, photos);
  render();
}

function setPhoto(index) {
  const photos = currentPhotos();
  state.selectedPhoto = normalizePhotoIndex(Number(index) || 0, photos);
  render();
}

function renderCard(car) {
  return `
    <article class="car-card" tabindex="0" data-card-id="${car.id}">
      <div class="car-media">
        <img src="${escapeAttr(car.cover || car.photos?.[0] || "")}" alt="${escapeAttr(car.title)}" loading="lazy" />
        <button class="favorite-button ${isFavorite(car.id) ? "is-saved" : ""}" type="button" aria-label="В обране" data-favorite-id="${car.id}">
          ${icon("heart")}
        </button>
      </div>
      <div class="car-body">
        <h3 class="car-title">${escapeHtml(car.title)}</h3>
        <p class="car-meta">${car.year} · ${formatKm(car.mileage)}</p>
        <p class="price">${formatPrice(car.price)}</p>
        <div class="chips">
          <span class="chip">${escapeHtml(car.fuel)}</span>
          <span class="chip">${escapeHtml(car.gearbox)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderDetail() {
  const car = currentCar();
  const photos = currentPhotos(car);
  const activePhoto = normalizePhotoIndex(state.selectedPhoto, photos);
  state.selectedPhoto = activePhoto;
  const photo = photos[activePhoto] || car.cover || "";
  const canSlide = photos.length > 1;

  return `
    <main class="screen detail-screen">
      <header class="topbar detail-topbar no-logo">
        <button class="icon-button" type="button" aria-label="Назад" data-back>${icon("arrowLeft")}</button>
        <div></div>
        <div class="detail-actions">
          <button class="icon-button ${isFavorite(car.id) ? "is-saved" : ""}" type="button" aria-label="В обране" data-favorite-id="${car.id}">${icon("heart")}</button>
          <button class="icon-button" type="button" aria-label="Поділитися" data-share>${icon("share")}</button>
        </div>
      </header>
      <section class="detail-hero">
        <button class="detail-photo-open" type="button" data-open-gallery aria-label="Відкрити галерею">
          <img class="detail-main-photo" src="${escapeAttr(photo)}" alt="${escapeAttr(car.title)}" />
        </button>
        ${canSlide ? `
          <button class="gallery-arrow gallery-arrow-left" type="button" data-photo-prev aria-label="Попереднє фото">${icon("arrowLeft")}</button>
          <button class="gallery-arrow gallery-arrow-right" type="button" data-photo-next aria-label="Наступне фото">${icon("arrowRight")}</button>
        ` : ""}
        <span class="counter-badge">${activePhoto + 1}/${photos.length || 1}</span>
        <div class="thumbs">
          ${photos
            .slice(0, 5)
            .map(
              (item, index) => `
                <button class="thumb ${index === activePhoto ? "is-active" : ""}" type="button" data-thumb="${index}" aria-label="Фото ${index + 1}">
                  <img src="${escapeAttr(item)}" alt="" />
                </button>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="detail-content">
        <div class="status-row">
          <span class="status-pill"><span class="status-dot"></span>${escapeHtml(car.status || "В наявності")}</span>
          ${car.verified ? `<span class="status-pill">${icon("check")} Перевірений авто</span>` : ""}
        </div>
        <h1 class="detail-title">${escapeHtml(car.title)}</h1>
        <p class="detail-meta">
          <span>${car.year}</span><span>•</span><span>${formatKm(car.mileage)}</span><span>•</span><span>${escapeHtml(car.city || "")}</span>
        </p>
        <p class="detail-price">${formatPrice(car.price)}</p>
        <div class="spec-grid">
          <div class="spec">${icon("engine")}<span class="spec-label">Двигун</span><span class="spec-value">${escapeHtml(car.engine || "2.0 л")}</span><span class="spec-note">${escapeHtml(car.fuel)}</span></div>
          <div class="spec">${icon("gear")}<span class="spec-label">Коробка</span><span class="spec-value">${escapeHtml(car.gearbox)}</span><span class="spec-note">8-ступеневий</span></div>
          <div class="spec">${icon("gauge")}<span class="spec-label">Пробіг</span><span class="spec-value">${formatKm(car.mileage)}</span><span class="spec-note">Оригінальний</span></div>
          <div class="spec">${icon("mapPin")}<span class="spec-label">Місто</span><span class="spec-value">${escapeHtml(car.city || "Київ")}</span><span class="spec-note">Україна</span></div>
        </div>
        <div class="description" data-description>
          <h2>Опис</h2>
          <p>${escapeHtml(car.description || "Автомобіль перевірений та готовий до продажу.")}</p>
          <button class="show-more" type="button" data-toggle-description>Показати більше</button>
        </div>
        <div class="contact-bar">
          <button class="soft-button" type="button" data-message>${icon("message")} Написати менеджеру</button>
          <button class="solid-button" type="button" data-call>${icon("phone")} Подзвонити</button>
        </div>
      </section>
    </main>
  `;
}

function renderPhotoViewer() {
  if (state.route !== "detail" || !state.galleryOpen) return "";
  const car = currentCar();
  const photos = currentPhotos(car);
  const activePhoto = normalizePhotoIndex(state.selectedPhoto, photos);
  const photo = photos[activePhoto] || car.cover || "";
  const canSlide = photos.length > 1;

  return `
    <div class="modal-backdrop is-open" data-close-gallery></div>
    <button class="icon-button gallery-exit-button" type="button" aria-label="Закрити галерею" data-close-gallery>${icon("x")}</button>
    <section class="photo-viewer" role="dialog" aria-modal="true" aria-label="Галерея фото">
      ${canSlide ? `<button class="viewer-arrow viewer-arrow-left" type="button" data-photo-prev aria-label="Попереднє фото">${icon("arrowLeft")}</button>` : ""}
      <img class="viewer-photo" src="${escapeAttr(photo)}" alt="${escapeAttr(car.title)}" />
      ${canSlide ? `<button class="viewer-arrow viewer-arrow-right" type="button" data-photo-next aria-label="Наступне фото">${icon("arrowRight")}</button>` : ""}
      <div class="viewer-footer">
        <span class="viewer-counter">${activePhoto + 1}/${photos.length || 1}</span>
        <div class="viewer-thumbs">
          ${photos
            .slice(0, 8)
            .map(
              (item, index) => `
                <button class="viewer-thumb ${index === activePhoto ? "is-active" : ""}" type="button" data-thumb="${index}" aria-label="Фото ${index + 1}">
                  <img src="${escapeAttr(item)}" alt="" />
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCallSheet() {
  if (!state.callSheetOpen) return "";
  return `
    <div class="modal-backdrop is-open" data-close-call></div>
    <section class="call-sheet" role="dialog" aria-modal="true" aria-label="Виберіть номер телефону">
      <div class="call-sheet-handle"></div>
      <h3>Виберіть номер</h3>
      <p>Натисніть на номер, щоб зателефонувати менеджеру.</p>
      <div class="call-options">
        ${PHONE_NUMBERS.map((item) => `
          <a class="call-option" href="tel:${escapeAttr(item.tel)}">${icon("phone")} ${escapeHtml(item.label)}</a>
        `).join("")}
      </div>
      <button class="soft-button call-cancel" type="button" data-close-call>Закрити</button>
    </section>
  `;
}

function renderBottomNav() {
  return `
    <nav class="bottom-nav" aria-label="Нижня навігація">
      ${routes
        .map(
          (route) => `
            <button class="nav-item ${activeRoute() === route.id ? "is-active" : ""}" type="button" data-route="${route.id}">
              ${icon(route.icon)}
              <span>${route.label}</span>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderDrawer() {
  return `
    <div class="drawer-backdrop" data-close-drawer></div>
    <aside class="drawer" aria-label="Меню">
      <div class="drawer-head">
        <p class="drawer-title">Навігація</p>
        <button class="icon-button is-flat" type="button" aria-label="Закрити" data-close-drawer>${icon("x")}</button>
      </div>
      <div class="drawer-nav">
        ${routes
          .map(
            (route) => `
              <button class="drawer-link ${activeRoute() === route.id ? "is-active" : ""}" type="button" data-route="${route.id}">
                <span>${route.label}</span>${icon(route.icon)}
              </button>
            `,
          )
          .join("")}
      </div>
    </aside>
  `;
}

function renderFilterSheet() {
  const makes = catalogBrandOptions();
  const fuels = fuelOptions;
  const gearboxes = gearboxOptions;
  const filters = state.filters;
  return `
    <div class="sheet-backdrop" data-close-filters></div>
    <aside class="sheet" aria-label="Фільтри">
      <div class="sheet-head">
        <h2>Фільтри</h2>
        <button class="icon-button is-flat" type="button" aria-label="Закрити" data-close-filters>${icon("x")}</button>
      </div>
      <form class="filter-form" data-filter-form>
        <div class="field-row">
          <label class="field">
            <span>Ціна від, $</span>
            <input name="minPrice" type="number" min="0" inputmode="numeric" value="${escapeAttr(filters.minPrice)}" placeholder="0" />
          </label>
          <label class="field">
            <span>Ціна до, $</span>
            <input name="maxPrice" type="number" min="0" inputmode="numeric" value="${escapeAttr(filters.maxPrice)}" placeholder="100 000" />
          </label>
        </div>
        <div class="field make-field">
          <span>Марка</span>
          <input class="make-search" type="search" value="${escapeAttr(filters.make)}" placeholder="Пошук марки, наприклад B" data-make-search />
          <input type="hidden" name="make" value="${escapeAttr(filters.make)}" />
          <div class="make-options" data-make-options>
            <button class="${filters.make ? "" : "is-active"}" type="button" data-make-option="">Усі марки</button>
            ${makes
              .map(
                (item) => `
                  <button class="${filters.make === item ? "is-active" : ""}" type="button" data-make-option="${escapeAttr(item)}">
                    ${escapeHtml(item)}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
        <div class="field-row">
          <label class="field">
            <span>Рік від</span>
            <input name="minYear" type="number" min="1990" max="2035" inputmode="numeric" value="${escapeAttr(filters.minYear)}" placeholder="2018" />
          </label>
          <label class="field">
            <span>Рік до</span>
            <input name="maxYear" type="number" min="1990" max="2035" inputmode="numeric" value="${escapeAttr(filters.maxYear)}" placeholder="2026" />
          </label>
        </div>
        <label class="field">
          <span>Паливо</span>
          <select name="fuel">
            <option value="">Будь-яке</option>
            ${fuels.map((item) => `<option value="${escapeAttr(item)}" ${filters.fuel === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>Коробка</span>
          <select name="gearbox">
            <option value="">Будь-яка</option>
            ${gearboxes.map((item) => `<option value="${escapeAttr(item)}" ${filters.gearbox === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>Пробіг до</span>
          <input name="maxMileage" type="number" min="0" inputmode="numeric" value="${escapeAttr(filters.maxMileage)}" placeholder="80 000" />
        </label>
        <div class="sheet-actions">
          <button class="soft-button" type="button" data-reset-filters>Очистити</button>
          <button class="solid-button" type="submit">Показати авто</button>
        </div>
      </form>
    </aside>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });

  document.querySelectorAll("[data-open-drawer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sortOpen = false;
      setDrawer(true);
    });
  });
  document.querySelectorAll("[data-close-drawer]").forEach((item) => {
    item.addEventListener("click", () => setDrawer(false));
  });

  document.querySelectorAll("[data-open-filters]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sortOpen = false;
      setFilters(true);
    });
  });
  document.querySelectorAll("[data-close-filters]").forEach((item) => {
    item.addEventListener("click", () => setFilters(false));
  });

  const form = document.querySelector("[data-filter-form]");
  bindMakePicker(form);
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const makeSearch = form.querySelector("[data-make-search]")?.value.trim();
    if (!formData.get("make") && makeSearch) {
      const exactBrand = catalogBrandOptions().find((brand) => normalizeText(brand) === normalizeText(makeSearch));
      if (exactBrand) formData.set("make", exactBrand);
    }
    state.filters = Object.fromEntries(formData.entries());
    writeJson(STORAGE.filters, state.filters);
    setFilters(false);
    render();
    showToast("Фільтри застосовано");
  });

  document.querySelector("[data-reset-filters]")?.addEventListener("click", () => {
    state.filters = emptyFilters();
    writeJson(STORAGE.filters, state.filters);
    setFilters(false);
    render();
    showToast("Фільтри очищено");
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      render();
    });
  });

  document.querySelector("[data-sort-toggle]")?.addEventListener("click", () => {
    state.sortOpen = !state.sortOpen;
    render();
  });

  document.querySelectorAll("[data-sort-option]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sort = button.dataset.sortOption;
      state.sortOpen = false;
      render();
    });
  });

  document.querySelectorAll("[data-search]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.query = event.target.value;
      refreshCurrentLists();
    });
  });

  bindCardEvents();

  document.querySelector("[data-back]")?.addEventListener("click", () => setRoute(state.returnRoute || "showroom"));
  document.querySelectorAll("[data-thumb]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setPhoto(button.dataset.thumb);
    });
  });
  document.querySelectorAll("[data-photo-prev]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      changePhoto(-1);
    });
  });
  document.querySelectorAll("[data-photo-next]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      changePhoto(1);
    });
  });
  document.querySelectorAll("[data-open-gallery]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      state.galleryOpen = true;
      render();
    });
  });

  document.querySelector(".detail-hero")?.addEventListener("click", (event) => {
    if (event.target.closest("[data-thumb], [data-photo-prev], [data-photo-next], .detail-actions, [data-back]")) return;
    state.galleryOpen = true;
    render();
  });
  document.querySelectorAll("[data-close-gallery]").forEach((button) => {
    button.addEventListener("click", () => {
      state.galleryOpen = false;
      render();
    });
  });

  document.querySelector("[data-share]")?.addEventListener("click", shareCurrentCar);
  document.querySelector("[data-toggle-description]")?.addEventListener("click", (event) => {
    const box = document.querySelector("[data-description]");
    box?.classList.toggle("is-expanded");
    event.currentTarget.textContent = box?.classList.contains("is-expanded") ? "Згорнути" : "Показати більше";
  });
  document.querySelector("[data-message]")?.addEventListener("click", () => {
    window.open(MANAGER_TELEGRAM_URL, "_blank");
  });
  document.querySelector("[data-call]")?.addEventListener("click", () => {
    state.callSheetOpen = true;
    render();
  });
  document.querySelectorAll("[data-close-call]").forEach((button) => {
    button.addEventListener("click", () => {
      state.callSheetOpen = false;
      render();
    });
  });
}

function bindMakePicker(form) {
  if (!form) return;
  const search = form.querySelector("[data-make-search]");
  const hidden = form.querySelector('input[name="make"]');
  const optionButtons = [...form.querySelectorAll("[data-make-option]")];

  const applySearch = () => {
    const query = normalizeText(search?.value || "");
    optionButtons.forEach((button) => {
      const value = button.dataset.makeOption;
      const isAll = value === "";
      const matches = isAll || !query || normalizeText(value).startsWith(query);
      button.hidden = !matches;
    });
  };

  search?.addEventListener("input", () => {
    if (hidden) hidden.value = "";
    optionButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.makeOption === ""));
    applySearch();
  });

  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.makeOption;
      if (hidden) hidden.value = value;
      if (search) search.value = value;
      optionButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      applySearch();
    });
  });

  applySearch();
}

function bindCardEvents() {
  document.querySelectorAll("[data-card-id]").forEach((card) => {
    card.addEventListener("click", () => openDetail(card.dataset.cardId));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail(card.dataset.cardId);
      }
    });
  });

  document.querySelectorAll("[data-favorite-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleFavorite(button.dataset.favoriteId);
    });
  });
}

function setRoute(route) {
  if (!routes.some((item) => item.id === route)) return;
  state.route = route;
  state.returnRoute = route;
  state.selectedCarId = null;
  state.selectedPhoto = 0;
  state.galleryOpen = false;
  state.callSheetOpen = false;
  state.sortOpen = false;
  setDrawer(false);
  render();
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  haptic("selection");
}

function openDetail(id) {
  state.returnRoute = activeRoute();
  state.selectedCarId = id;
  state.selectedPhoto = 0;
  state.galleryOpen = false;
  state.callSheetOpen = false;
  state.route = "detail";
  state.sortOpen = false;
  render();
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function toggleFavorite(id) {
  const ids = favorites();
  const saved = ids.includes(id);
  const next = saved ? ids.filter((item) => item !== id) : [...ids, id];
  saveFavorites(next);
  haptic(saved ? "soft" : "success");

  if (state.route === "favorites" && saved) {
    render();
    requestAnimationFrame(() => showToast("Авто прибрано з обраного"));
    return;
  }

  document.querySelectorAll(`[data-favorite-id="${cssEscape(id)}"]`).forEach((button) => {
    button.classList.toggle("is-saved", !saved);
  });
  showToast(saved ? "Авто прибрано з обраного" : "Авто додано в обране");
}

function refreshCurrentLists() {
  const map = {
    recommended: filteredCars(allCars()).slice(0, 8),
    catalog: filteredCars(allCars()),
    new: filteredCars(allCars().filter(isNewCar)),
    favorites: filteredCars(allCars().filter((car) => favorites().includes(car.id))),
  };

  Object.entries(map).forEach(([name, cars]) => {
    const list = document.querySelector(`[data-list="${name}"]`);
    if (!list) return;
    const emptyText = name === "new" ? "Свіжі авто з'являться тут на 48 годин" : name === "favorites" ? "Тут будуть авто, які користувач збереже для себе" : "Нічого не знайдено";
    list.innerHTML = renderCardsOrEmpty(cars, emptyText, name === "recommended");
  });
  bindCardEvents();
}

function setDrawer(open) {
  document.querySelector(".drawer")?.classList.toggle("is-open", open);
  document.querySelector(".drawer-backdrop")?.classList.toggle("is-open", open);
}

function setFilters(open) {
  document.querySelector(".sheet")?.classList.toggle("is-open", open);
  document.querySelector(".sheet-backdrop")?.classList.toggle("is-open", open);
}

function shareCurrentCar() {
  const car = allCars().find((item) => item.id === state.selectedCarId);
  if (!car) return;
  const text = `${car.title} · ${formatPrice(car.price)} · Garant Auto`;
  if (navigator.share) {
    navigator.share({ title: car.title, text }).catch(() => {});
    return;
  }
  navigator.clipboard?.writeText(text);
  showToast("Інформацію скопійовано");
}

function haptic(type) {
  const feedback = window.Telegram?.WebApp?.HapticFeedback;
  if (!feedback) return;
  if (type === "success") feedback.notificationOccurred("success");
  else feedback.impactOccurred(type || "light");
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1900);
}

function cssEscape(value) {
  if (window.CSS?.escape) return CSS.escape(value);
  return String(value).replace(/"/g, '\\"');
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
