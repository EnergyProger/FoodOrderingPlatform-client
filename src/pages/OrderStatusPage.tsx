import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusCard from "@/components/OrderStatusCard";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return "Loading...";
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <OrderStatusCard order={order} />
      ))}
    </div>
  );
};

export default OrderStatusPage;
