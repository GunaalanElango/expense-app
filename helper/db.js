// import * as SQLite from "expo-sqlite";

// const db = SQLite.openDatabase("expenses.db");

// const query = (queryString, argument) => {
//   return new Promise((resolve, reject) => {
//     db.transaction((transaction) => {
//       transaction.executeSql(
//         queryString,
//         argument,
//         (_, result) => resolve(result),
//         (_, error) => reject(error)
//       );
//     });
//   });
// };

// export class Balance {
//   static async createBalanceTable() {
//     try {
//       await query(
//         `CREATE TABLE IF NOT EXISTS balance (
//           id INTEGER PRIMARY KEY, 
//           balance INTEGER NOT NULL, 
//           deviceId TEXT NOT NULL
//         )`,
//         []
//       );
//       console.log("[BALANCE TABLE CREATED]");
//     } catch (error) {
//       console.error("[ERROR IN BALANCE TABLE CREATION]", error);
//     }
//   }

//   static async insertBalance(balance, deviceId) {
//     try {
//       const bal = await query("SELECT * FROM balance WHERE deviceId = ?", [
//         deviceId,
//       ]);

//       let result = {};
//       if (bal.rows._array.length == 0) {
//         result = await query(
//           "INSERT INTO balance (balance, deviceId) VALUES (?, ?)",
//           [balance, deviceId]
//         );
//         console.log("[BALANCE INSERTED]");
//       } else {
//         result = await query(
//           "UPDATE balance SET balance = ? WHERE deviceId = ?",
//           [balance, deviceId]
//         );
//         console.log("[BALANCE UPDATED]");
//       }

//       return result;
//     } catch (error) {
//       console.error("[INSERT BALANCE ERROR]", error);
//     }
//   }

//   static async selectBalance(deviceId) {
//     try {
//       const result = await query("SELECT * FROM balance WHERE deviceId = ?", [
//         deviceId,
//       ]);
//       return result;
//     } catch (error) {
//       console.error("[SELECT BALANCE ERROR]", error);
//     }
//   }
// }

// export class Log {
//   static async createLogTable() {
//     try {
//       await query(
//         `CREATE TABLE IF NOT EXISTS logs (
//           id INTEGER PRIMARY KEY,
//           amount INTEGER NOT NULL, 
//           operation TEXT NOT NULL,
//           current_balance INTEGER NOT NULL,
//           previous_balance INTEGER NOT NULL
//         )`,
//         []
//       );
//       console.log("[LOG TABLE CREATED]");
//     } catch (error) {
//       console.error("[ERROR IN LOG TABLE CREATION]", error);
//     }
//   }

//   static async insertLog(amount, operation, current, previous) {
//     try {
//       const result = await query(
//         "INSERT INTO logs (amount, operation, current_balance, previous_balance) VALUES (?, ?, ?, ?)",
//         [amount, operation, current, previous]
//       );
//       return result;
//     } catch (error) {
//       console.error("[INSERT LOG ERROR]", error);
//     }
//   }

//   static async selectLog() {
//     try {
//       const result = await query("SELECT * FROM logs", []);
//       return result;
//     } catch (error) {
//       console.error("[SELECT LOG ERROR]", error);
//     }
//   }
// }

// export class Location {
//   static async createLocationTable() {
//     try {
//       await query(
//         `CREATE TABLE IF NOT EXISTS location (
//         id INTEGER PRIMARY KEY,
//         lat REAL NOT NULL,
//         long REAL NOT NULL,
//         deviceId TEXT NOT NULL
//       )`,
//         []
//       );

//       console.log("[LOCATION TABLE CREATED]");
//     } catch (error) {
//       console.error("[LOCATION TABLE CREATE ERROR]", error);
//     }
//   }
// }
