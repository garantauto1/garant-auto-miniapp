create extension if not exists "pgcrypto";

create table if not exists public.cars (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  name text not null,
  brand text,
  model text,
  price text,
  year integer,
  mileage text,
  city text,
  fuel text,
  gearbox text,
  body text,
  engine text,
  status text default 'В наявності',
  description text,

  image_url text,
  image_urls text[] default '{}'
);

alter table public.cars enable row level security;

drop policy if exists "cars_select_public" on public.cars;
drop policy if exists "cars_insert_public" on public.cars;
drop policy if exists "cars_update_public" on public.cars;
drop policy if exists "cars_delete_public" on public.cars;

create policy "cars_select_public"
on public.cars
for select
to anon
using (true);

create policy "cars_insert_public"
on public.cars
for insert
to anon
with check (true);

create policy "cars_update_public"
on public.cars
for update
to anon
using (true)
with check (true);

create policy "cars_delete_public"
on public.cars
for delete
to anon
using (true);

insert into storage.buckets (id, name, public)
values ('car-photos', 'car-photos', true)
on conflict (id) do update set public = true;

drop policy if exists "car_photos_select_public" on storage.objects;
drop policy if exists "car_photos_insert_public" on storage.objects;
drop policy if exists "car_photos_update_public" on storage.objects;
drop policy if exists "car_photos_delete_public" on storage.objects;

create policy "car_photos_select_public"
on storage.objects
for select
to anon
using (bucket_id = 'car-photos');

create policy "car_photos_insert_public"
on storage.objects
for insert
to anon
with check (bucket_id = 'car-photos');

create policy "car_photos_update_public"
on storage.objects
for update
to anon
using (bucket_id = 'car-photos')
with check (bucket_id = 'car-photos');

create policy "car_photos_delete_public"
on storage.objects
for delete
to anon
using (bucket_id = 'car-photos');
