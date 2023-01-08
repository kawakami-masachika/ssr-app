set -e
psql -U postgres ssr_app_db << EOSQL
CREATE TABLE IF NOT EXISTS Category(
  id SERIAL PRIMARY KEY,
  code VARCHAR(5) NOT NULL,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS Payment(
  id  SERIAL PRIMARY KEY,
  price INTEGER NOT NULL,
  name VARCHAR(200),
  category_id INTEGER,
  memo VARCHAR(500),
  purchase_date DATE NOT NULL,
  created_at DATE,
  updated_at DATE,
  CONSTRAINT category_fkey FOREIGN KEY(category_id) REFERENCES Category(id)
);
EOSQL

