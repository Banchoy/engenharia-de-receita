-- Tabela para capturar leads antes do redirecionamento para o WhatsApp
create table if not exists leads_capturados (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  device_type text,
  page_url text,
  cliques_whatsapp integer default 1
);

-- Ativar RLS
alter table leads_capturados enable row level security;

-- Política para permitir que qualquer pessoa insira dados (público)
create policy "Permitir inserção pública de leads" 
on leads_capturados for insert 
with check (true);

-- Política para permitir leitura apenas para administradores (opcional)
-- create policy "Apenas admin pode ler" ...
