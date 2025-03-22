import { useEffect, useState } from "react";
import { getShipments } from "@/utils/localStorage";

const DriverDeliveries = () => {
  const [completed, setCompleted] = useState<any[]>([]);

  useEffect(() => {
    const all = getShipments();
    const delivered = all.filter((o: any) => o.status === "Delivered");
    setCompleted(delivered);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Completed Deliveries</h1>
      {completed.length === 0 ? (
        <p>No deliveries marked as delivered yet.</p>
      ) : (
        <ul className="space-y-2">
          {completed.map((order: any) => (
            <li key={order.trackingNo} className="p-3 border rounded">
              <p><strong>Tracking:</strong> {order.trackingNo}</p>
              <p><strong>Receiver:</strong> {order.receiver}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriverDeliveries;
