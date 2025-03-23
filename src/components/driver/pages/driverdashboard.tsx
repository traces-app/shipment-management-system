import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShipments } from "@/utils/localStorage";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, DollarSign, Users, CreditCard, Activity } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

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

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Driver Dashboard</h1>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          { title: "Total Revenue", icon: DollarSign, value: "$45,231.89", description: "+20.1% from last month" },
          { title: "Subscriptions", icon: Users, value: "+2,350", description: "+180.1% from last month" },
          { title: "Sales", icon: CreditCard, value: "+12,234", description: "+19% from last month" },
          { title: "Active Now", icon: Activity, value: "+573", description: "+201 since last hour" },
        ].map(({ title, icon: Icon, value, description }) => (
          <Card key={title} className="w-full p-6">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <Icon className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Updated recently</p>
            </CardFooter>
          </Card>
        ))}
      </div>

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
                <TableHead className="px-4 py-3">Courier</TableHead>
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
                    {order.returnAssignedTo || order.assignedDriver || "Not Assigned"}
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
