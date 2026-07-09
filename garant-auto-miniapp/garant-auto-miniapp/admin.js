const STORAGE = {
  cars: "garant-auto:admin-cars",
};

const demoCover = "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=86";
const form = document.querySelector("[data-car-form]");
const list = document.querySelector("[data-admin-list]");
const formTitle = document.querySelector("[data-form-title]");
let toastTimer = null;

renderList();
resetForm();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const raw = Object.fromEntries(formData.entries());
  const cars = readCars();
  const existing = cars.find((car) => car.id === raw.id);
  const car = normalizeCar(raw, existing);
  const next = existing ? cars.map((item) => (item.id === car.id ? car : item)) : [car, ...cars];
  writeCars(next);
  resetForm();
  renderList();
  showToast(existing ? "Авто оновлено" : "Авто додано в mini app");
});

document.querySelector("[data-reset-form]").addEventListener("click", resetForm);

function readCars() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.cars) || "[]");
  } catch {
    return [];
  }
}

function writeCars(cars) {
  localStorage.setItem(STORAGE.cars, JSON.stringify(cars));
}

function normalizeCar(raw, existing) {
  const cover = raw.cover.trim() || demoCover;
  const photos = raw.photos
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

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
    status: "В наявності",
    verified: true,
    addedAt: existing?.addedAt || new Date().toISOString(),
    cover,
    photos: photos.length ? photos : [cover],
    description: raw.description.trim(),
  };
}

function renderList() {
  const cars = readCars();
  if (!cars.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div>
          <h2>Ще немає авто</h2>
          <p>Заповни форму зліва, і машина одразу з'явиться в mini app.</p>
        </div>
      </div>
    `;
    return;
  }

  list.innerHTML = cars
    .map(
      (car) => `
        <article class="admin-row">
          <img src="${escapeAttr(car.cover)}" alt="${escapeAttr(car.title)}" />
          <div>
            <h3>${escapeHtml(car.title)}</h3>
            <p>${car.year} · ${formatKm(car.mileage)} · ${formatPrice(car.price)}</p>
            <p>Додано: ${formatDate(car.addedAt)}</p>
          </div>
          <div class="row-actions">
            <button class="soft-button" type="button" data-edit="${car.id}">Змінити</button>
            <button class="danger-button" type="button" data-delete="${car.id}">Видалити</button>
          </div>
        </article>
      `,
    )
    .join("");

  list.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => editCar(button.dataset.edit));
  });
  list.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteCar(button.dataset.delete));
  });
}

function editCar(id) {
  const car = readCars().find((item) => item.id === id);
  if (!car) return;
  formTitle.textContent = "Редагувати авто";
  form.elements.id.value = car.id;
  form.elements.title.value = car.title;
  form.elements.make.value = car.make;
  form.elements.model.value = car.model;
  form.elements.price.value = car.price;
  form.elements.year.value = car.year;
  form.elements.mileage.value = car.mileage;
  form.elements.city.value = car.city;
  form.elements.fuel.value = car.fuel;
  form.elements.gearbox.value = car.gearbox;
  form.elements.body.value = car.body;
  form.elements.engine.value = car.engine;
  form.elements.cover.value = car.cover;
  form.elements.photos.value = (car.photos || []).join(", ");
  form.elements.description.value = car.description;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteCar(id) {
  const cars = readCars().filter((car) => car.id !== id);
  writeCars(cars);
  renderList();
  showToast("Авто видалено");
}

function resetForm() {
  form.reset();
  form.elements.id.value = "";
  form.elements.cover.value = demoCover;
  formTitle.textContent = "Нове авто";
}

function formatPrice(value) {
  return `${new Intl.NumberFormat("uk-UA").format(Number(value) || 0)} ₴`;
}

function formatKm(value) {
  return `${new Intl.NumberFormat("uk-UA").format(Number(value) || 0)} км`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
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
