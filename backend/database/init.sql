CREATE DATABASE user_db;
\connect user_db

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_username ON users (username);
CREATE INDEX idx_users_email ON users (email);

CREATE DATABASE chat_history_db;
\connect chat_history_db

CREATE TABLE chat_histories (
  chat_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  bot_response TEXT NOT NULL,
  user_message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_chat_histories_user_id ON chat_histories (user_id);
CREATE INDEX idx_chat_histories_created_at ON chat_histories (created_at);

CREATE DATABASE feedback_db;
\connect feedback_db

CREATE TABLE feedbacks (
  feedback_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  chat_id INTEGER NOT NULL,
  rating INTEGER NOT NULL,
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_feedbacks_user_id ON feedbacks (user_id);
CREATE INDEX idx_feedbacks_chat_id ON feedbacks (chat_id);
CREATE INDEX idx_feedbacks_rating ON feedbacks (rating);
