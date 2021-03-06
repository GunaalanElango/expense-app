import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("expenses.db");

const executeSqlQuery = (query, args) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        query,
        args,
        (transaction, result) => resolve(result),
        (transaction, error) => reject(error)
      );
    });
  });

  return promise;
};

export const createBalanceTable = () => {
  return executeSqlQuery(
    `CREATE TABLE IF NOT EXISTS balance (
        id INTEGER PRIMARY KEY NOT NULL,
        balance INTEGER NOT NULL,
        deviceId TEXT NOT NULL
    )`,
    []
  );
};

export const createLogTable = () => {
  return executeSqlQuery(
    `CREATE TABLE IF NOT EXISTS log (
        id INTEGER PRIMARY KEY NOT NULL,
        enteredAmount INTEGER NOT NULL,
        operation TEXT NOT NULL,
        currentBalance INTEGER NOT NULL,
        newBalance INTEGER NOT NULL,
        dateAndTime TEXT NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        deviceId TEXT NOT NULL
    )`,
    []
  );
};

export const selectBalance = (deviceId) => {
  return executeSqlQuery(`SELECT * FROM balance WHERE deviceId = ?`, [
    deviceId,
  ]);
};

export const insertOrUpdateBalance = async (balance, deviceId) => {
  const result = await selectBalance(deviceId);
  if (result.rows.length == 0) {
    console.log("INSERT BALANCE");
    return executeSqlQuery(
      `INSERT INTO balance (balance, deviceId) VALUES (?, ?)`,
      [balance, deviceId]
    );
  } else {
    console.log("UPDATE BALANCE");
    return executeSqlQuery(
      `UPDATE balance SET balance = ? WHERE deviceId = ?`,
      [balance, deviceId]
    );
  }
};

export const insertLog = (log) => {
  return executeSqlQuery(
    `INSERT INTO log (
      enteredAmount,
      operation,
      currentBalance,
      newBalance,
      dateAndTime,
      latitude,
      longitude,
      deviceId ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      log.enteredAmount,
      log.operation,
      log.currentBalance,
      log.newBalance,
      log.dateAndTime,
      log.latitude,
      log.longitude,
      log.deviceId,
    ]
  );
};

export const selectLog = (deviceId) => {
  return executeSqlQuery(
    `SELECT 
      enteredAmount,
      operation,
      currentBalance,
      newBalance,
      dateAndTime,
      latitude,
      longitude,
      deviceId,
      id
    FROM log WHERE deviceId = ? ORDER BY id DESC`,
    [deviceId]
  );
};

export const deleteLog = (id) => {
  return executeSqlQuery(`DELETE FROM log WHERE id = ?`, [id]);
};

export const updateLog = (id, operation, enteredAmount) => {
  return executeSqlQuery(
    `UPDATE log SET operation = ?, enteredAmount = ? WHERE id = ?`,
    [operation, enteredAmount, id]
  );
};
