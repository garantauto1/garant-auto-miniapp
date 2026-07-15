-- Chip&Dale Auto Supabase setup
-- Вставь в Supabase SQL Editor и нажми Run.
-- Таблица cars будет расширена под мини-апп и заполнена демо-авто.

create table if not exists cars (
  id text primary key,
  title text not null,
  brand text,
  model text,
  year int,
  price text,
  credit text,
  status text default 'sale',
  fuel text,
  fuel_key text,
  engine text,
  gearbox text,
  gearbox_key text,
  mileage text,
  city text,
  body text,
  image text,
  detail_image text,
  featured_image text,
  photos jsonb default '[]'::jsonb,
  gallery jsonb default '[]'::jsonb,
  description text,
  created_at timestamptz default now()
);

alter table cars add column if not exists credit text;
alter table cars add column if not exists fuel_key text;
alter table cars add column if not exists gearbox text;
alter table cars add column if not exists gearbox_key text;
alter table cars add column if not exists body text;
alter table cars add column if not exists detail_image text;
alter table cars add column if not exists featured_image text;
alter table cars add column if not exists photos jsonb default '[]'::jsonb;

alter table cars enable row level security;

drop policy if exists "Public cars read" on cars;
create policy "Public cars read"
on cars
for select
to anon
using (true);

drop policy if exists "Public cars insert" on cars;
create policy "Public cars insert"
on cars
for insert
to anon
with check (true);

drop policy if exists "Public cars update" on cars;
create policy "Public cars update"
on cars
for update
to anon
using (true)
with check (true);

insert into cars (
  id, title, brand, model, year, price, credit, status, fuel, fuel_key, engine, gearbox, gearbox_key, mileage, city, body,
  image, detail_image, featured_image, photos, gallery, description
) values
(
  'bmw-x5-2002','BMW X5 2002','BMW','X5',2002,'$ 9 999','В кредит від $ 180/міс','sale','газ/бензин','gas','4.4 газ/бензин','Автомат','auto','296 тис. км','Київ','suv',
  'assets/gallery/bmw-x5-2002-01.jpg?v=20260704s1','assets/gallery/bmw-x5-2002-01.jpg?v=20260704s1','assets/gallery/bmw-x5-2002-01.jpg?v=20260704s1',
  '["assets/gallery/bmw-x5-2002-01.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-02.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-03.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-04.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-05.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-06.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-07.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-08.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-09.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-10.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-11.jpg?v=20260704s1","assets/gallery/bmw-x5-2002-12.jpg?v=20260704s1"]'::jsonb,
  '[]'::jsonb,
  'Технічно справний, повний привід, комфортний салон. Готовий до перевірок на СТО.'
),
(
  'honda-crv-2006','Honda CR-V 2006','Honda','CR-V',2006,'$ 8 100','В кредит від $ 180/міс','commission','газ/бензин','gas','2.4 газ/бензин','Автомат','auto','296 тис. км','Київ','suv',
  'assets/gallery/honda-crv-2006-01.jpg?v=20260704s1','assets/gallery/honda-crv-2006-01.jpg?v=20260704s1','assets/gallery/honda-crv-2006-01.jpg?v=20260704s1',
  '["assets/gallery/honda-crv-2006-01.jpg?v=20260704s1","assets/gallery/honda-crv-2006-02.jpg?v=20260704s1","assets/gallery/honda-crv-2006-03.jpg?v=20260704s1","assets/gallery/honda-crv-2006-04.jpg?v=20260704s1","assets/gallery/honda-crv-2006-05.jpg?v=20260704s1","assets/gallery/honda-crv-2006-06.jpg?v=20260704s1","assets/gallery/honda-crv-2006-07.jpg?v=20260704s1","assets/gallery/honda-crv-2006-08.jpg?v=20260704s1","assets/gallery/honda-crv-2006-09.jpg?v=20260704s1","assets/gallery/honda-crv-2006-10.jpg?v=20260704s1","assets/gallery/honda-crv-2006-11.jpg?v=20260704s1","assets/gallery/honda-crv-2006-12.jpg?v=20260704s1"]'::jsonb,
  '[]'::jsonb,
  'Сімейний кросовер з прозорою історією, охайним салоном та готовністю до перевірки.'
),
(
  'bmw-f10-535-2014','BMW F10 535 2014','BMW','F10 535',2014,'$ 13 599','В кредит від $ 180/міс','commission','бензин','petrol','3.0 бензин','Автомат','auto','296 тис. км','Київ','sedan',
  'assets/gallery/bmw-f10-535-2014-01.jpg?v=20260704s1','assets/gallery/bmw-f10-535-2014-01.jpg?v=20260704s1','assets/gallery/bmw-f10-535-2014-01.jpg?v=20260704s1',
  '["assets/gallery/bmw-f10-535-2014-01.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-02.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-03.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-04.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-05.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-06.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-07.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-08.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-09.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-10.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-11.jpg?v=20260704s1","assets/gallery/bmw-f10-535-2014-12.jpg?v=20260704s1"]'::jsonb,
  '[]'::jsonb,
  'Динамічний седан з багатою комплектацією, акуратним кузовом та сервісною історією.'
),
(
  'citroen-c5-2010','Citroen C5 2010','Citroen','C5',2010,'$ 4 650','В кредит від $ 180/міс','sale','дизель','diesel','2.0 дизель','Автомат','auto','296 тис. км','Київ','sedan',
  'assets/gallery/citroen-c5-2010-01.jpg?v=20260704s1','assets/gallery/citroen-c5-2010-01.jpg?v=20260704s1','assets/gallery/citroen-c5-2010-01.jpg?v=20260704s1',
  '["assets/gallery/citroen-c5-2010-01.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-02.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-03.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-04.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-05.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-06.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-07.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-08.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-09.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-10.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-11.jpg?v=20260704s1","assets/gallery/citroen-c5-2010-12.jpg?v=20260704s1"]'::jsonb,
  '[]'::jsonb,
  'Комфортний автомобіль для міста і траси, економічний дизель та плавна автоматична коробка.'
),
(
  'bmw-730d-f01-2010','BMW 730d F01 2010','BMW','730d F01',2010,'$ 11 800','В кредит від $ 180/міс','sold','дизель','diesel','3.0 дизель','Автомат','auto','296 тис. км','Київ','sedan',
  'assets/gallery/bmw-730d-f01-2010-01.jpg?v=20260704s1','assets/gallery/bmw-730d-f01-2010-01.jpg?v=20260704s1','assets/gallery/bmw-730d-f01-2010-01.jpg?v=20260704s1',
  '["assets/gallery/bmw-730d-f01-2010-01.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-02.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-03.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-04.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-05.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-06.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-07.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-08.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-09.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-10.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-11.jpg?v=20260704s1","assets/gallery/bmw-730d-f01-2010-12.jpg?v=20260704s1"]'::jsonb,
  '[]'::jsonb,
  'Представницький седан з комфортним салоном, потужним дизелем та перевіреною комплектацією.'
)
on conflict (id) do update set
  title = excluded.title,
  brand = excluded.brand,
  model = excluded.model,
  year = excluded.year,
  price = excluded.price,
  credit = excluded.credit,
  status = excluded.status,
  fuel = excluded.fuel,
  fuel_key = excluded.fuel_key,
  engine = excluded.engine,
  gearbox = excluded.gearbox,
  gearbox_key = excluded.gearbox_key,
  mileage = excluded.mileage,
  city = excluded.city,
  body = excluded.body,
  image = excluded.image,
  detail_image = excluded.detail_image,
  featured_image = excluded.featured_image,
  photos = excluded.photos,
  gallery = excluded.gallery,
  description = excluded.description;


drop policy if exists "Public cars delete" on cars;
create policy "Public cars delete"
on cars
for delete
to anon
using (true);
