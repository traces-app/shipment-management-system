import { useEffect, useState } from "react";
import { getShipments, updateShipment } from "@/utils/localStorage";

const DriverDashboard = () => {
  const [orders, setOrders] = useState<any[]>([]);

  // ✅ Safe loader with fallback
  const loadOrders = () => {
    const shipments = getShipments();
    if (Array.isArray(shipments)) {
      const activeOrders = shipments.filter((o) => o.status !== "Delivered");
      setOrders(activeOrders);
    } else {
      setOrders([]); // fallback if data is broken
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatus = (order: any) => {
    const steps = ["Review order", "Packed", "Shipped", "Delivered"];
    const currentIndex = steps.indexOf(order.status);

    if (currentIndex < steps.length - 1) {
      const next = steps[currentIndex + 1];
      updateShipment(order.trackingNo, { status: next });
      loadOrders(); // reload after update
    }
  };

  return (
    <div className="p-10">
      <h1 className="mb-6 text-3xl font-bold">Driver Dashboard</h1>
      {orders.map((order) => (
        <div key={order.trackingNo} className="p-4 mb-4 border rounded">
          <p><strong>Tracking:</strong> {order.trackingNo}</p>
          <p><strong>Receiver:</strong> {order.receiver}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <button
            onClick={() => handleStatus(order)}
            className="px-4 py-2 mt-2 text-white bg-green-600 rounded"
            disabled={order.status === "Delivered"}
          >
            {order.status === "Delivered" ? "Completed" : "Update Status"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DriverDashboard;
