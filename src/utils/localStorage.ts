const STORAGE_KEY = "shipments";

// Get all shipments
export const getShipments = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Add a new shipment
export const addShipment = (shipment: any) => {
  const current = getShipments();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, shipment]));
};

// Update an existing shipment by tracking number
export const updateShipment = (trackingNo: string, updates: any) => {
  const current = getShipments();
  const updated = current.map((item: any) =>
    item.trackingNo === trackingNo ? { ...item, ...updates } : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

// Get a single shipment by tracking number
export const getShipmentByTrackingNo = (trackingNo: string) => {
  const current = getShipments();
  return current.find((s: any) => s.trackingNo === trackingNo);
};

