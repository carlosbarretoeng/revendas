// Sync Worker para PDV Offline-First
// Monitora vendas pendentes e sincroniza com o servidor quando online

const PENDING_SYNC_STORE = 'vendas';

export const getPendingCount = async (db) => {
  return new Promise((resolve) => {
    const transaction = db.transaction(PENDING_SYNC_STORE, 'readonly');
    const store = transaction.objectStore(PENDING_SYNC_STORE);
    const countRequest = store.count();
    countRequest.onsuccess = () => resolve(countRequest.result);
  });
};

export const syncData = async (db, syncEndpoint) => {
  if (!navigator.onLine) {
    console.log('Sistema offline. Sincronização pausada.');
    return;
  }

  const transaction = db.transaction(PENDING_SYNC_STORE, 'readwrite');
  const store = transaction.objectStore(PENDING_SYNC_STORE);
  const getAllRequest = store.getAll();

  getAllRequest.onsuccess = async () => {
    const pendingSales = getAllRequest.result;

    for (const sale of pendingSales) {
      try {
        const response = await fetch(syncEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sale)
        });

        if (response.ok) {
          store.delete(sale.id);
          console.log(`Venda ${sale.id} sincronizada.`);
        } else {
          console.error(`Erro ao sincronizar venda ${sale.id}: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Falha de conexão durante sync:', error);
        break; // Para a fila e tenta novamente no próximo ciclo
      }
    }
  };
};
