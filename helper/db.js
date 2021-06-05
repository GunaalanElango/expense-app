import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("expenses.db");

export const initLogTable = new Promise((resolve, reject) => {
  db.transaction((transaction) => {
    transaction.executeSql(
      "CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY, amount INTEGER NOT NULL, operation TEXT NOT NULL, current_balance INTEGER NOT NULL, previous_balance INTEGER NOT NULL)",
      [],
      () => {
        resolve();
      },
      (_, error) => {
        reject(error);
      }
    );
  });
});

export const insertLog = (amount, operation, current, previous) => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        "INSERT INTO logs (amount, operation, current_balance, previous_balance) VALUES (?, ?, ?, ?)",
        [amount, operation, current, previous],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const selectLog = () => {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        "SELECT * FROM logs",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};
