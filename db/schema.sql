\c workspaces_db

DROP TABLE IF EXISTS workspaces;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  u_id SERIAL PRIMARY KEY,
  username VARCHAR (255) UNIQUE,
  email VARCHAR (255),
  password VARCHAR (255)
);

CREATE TABLE workspaces (
  w_id SERIAL PRIMARY KEY,
  -- creator_id INTEGER,
  creator_id VARCHAR(255) REFERENCES users (username) ON DELETE CASCADE,
  w_name VARCHAR (255),
  address VARCHAR (255),
  photo TEXT,
  type_of_space VARCHAR (255),
  power_outlets VARCHAR (255),
  noise_level VARCHAR(255),
  wifi_speed VARCHAR(255),
  dogfriendly boolean,
  comments TEXT,
  overall_rating INTEGER
  );
