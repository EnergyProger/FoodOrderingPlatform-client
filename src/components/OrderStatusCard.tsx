import { FC } from "react";
import { Order } from "@/types";
import OrderStatusHeader from "./OrderStatusHeader";
import OrderStatusDetail from "./OrderStatusDetail";
import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
  order: Order;
}

const OrderStatusCard: FC<Props> = ({ order }) => {
  return (
    <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
      <OrderStatusHeader order={order} />
      <div className="grid gap-10 md:grid-cols-2">
        <OrderStatusDetail order={order} />
        <AspectRatio ratio={16 / 5}>
          <img
            src={order.restaurant.imageUrl}
            className="rounded-md object-cover h-full w-full"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default OrderStatusCard;
