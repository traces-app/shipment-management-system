import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShipments, updateShipment } from "@/utils/localStorage";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const DriverDashboard = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const navigate = useNavigate();

  const loadOrders = () => {
    const shipments = getShipments();
    if (Array.isArray(shipments)) {
      const activeOrders = shipments.filter((o) => o.status !== "Delivered");
      setOrders(activeOrders);
    } else {
      setOrders([]);
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
      loadOrders();
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Driver Dashboard</h1>

      {orders.length === 0 ? (
        <p className="text-muted-foreground">No active deliveries.</p>
      ) : (
        <div className="w-full overflow-x-auto shadow border rounded-lg">
          <Table className="min-w-full bg-white text-center">
            <TableHeader className="bg-gray-100 text-gray-600 font-semibold">
              <TableRow>
                <TableHead className="px-4 py-3">Tracking No.</TableHead>
                <TableHead className="px-4 py-3">Receiver</TableHead>
                <TableHead className="px-4 py-3">Status</TableHead>
                <TableHead className="px-4 py-3">Update</TableHead>
                <TableHead className="px-4 py-3">Edit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={`${order.trackingNo}-${index}`} className="border-t hover:bg-gray-50">
                  <TableCell className="px-4 py-3 font-medium">{order.trackingNo}</TableCell>
                  <TableCell className="px-4 py-3">{order.receiverName || order.receiver}</TableCell>
                  <TableCell className="px-4 py-3">
                    <span
                      className={`px-3 py-1 text-sm rounded-md font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <Button
                      onClick={() => handleStatus(order)}
                      size="sm"
                      disabled={order.status === "Delivered"}
                    >
                      {order.status === "Delivered" ? "Completed" : "Update"}
                    </Button>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <Button
                      variant="ghost"
                      onClick={() => navigate(`/order-details/${order.trackingNo}`)}
                    >
                      <Pencil className="w-4 h-4 text-blue-600" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default DriverDashboard;
