// Schema do IndexedDB para o PDV offline-first
// Tabelas: 'vendas', 'orcamentos'

const DB_NAME = 'PDVDatabase';
const DB_VERSION = 1;

export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains('vendas')) {
        db.createObjectStore('vendas', { keyPath: 'id', autoIncrement: true });
      }

      if (!db.objectStoreNames.contains('orcamentos')) {
        db.createObjectStore('orcamentos', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};
