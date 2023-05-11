/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://kdesldxg:P-D9X-m_5RpTR0H6HzVLMZO0TyZd0Mgr@drona.db.elephantsql.com/kdesldxg",
  DATABASE_URL_DEVELOPMENT = "postgres://lhzkuiou:oaloMV9XRsBinvZ8XOWpTcA8sFN0Wgtt@drona.db.elephantsql.com/lhzkuiou",
  DATABASE_URL_TEST = "postgres://nhofhtcu:Pkz7pVUzuRVTmP4MQ8EbQh8kO4uboS_n@drona.db.elephantsql.com/nhofhtcu",
  DATABASE_URL_PREVIEW = "postgres://lhzkuiou:oaloMV9XRsBinvZ8XOWpTcA8sFN0Wgtt@drona.db.elephantsql.com/lhzkuiou",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
