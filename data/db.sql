alter table reflections
enable row level security;

create policy "Users can read own reflections"
on reflections
for select
using (
    auth.uid() = user_id
);
create policy "Users can insert own reflections"
on reflections
for insert
with check (
    auth.uid() = user_id
);
create policy "Users can update own reflections"
on reflections
for update
using (
    auth.uid() = user_id
);
create policy "Users can delete own reflections"
on reflections
for delete
using (
    auth.uid() = user_id
);
