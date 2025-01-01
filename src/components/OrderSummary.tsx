import { CartItem, Restaurant } from "@/types";
import { FC } from "react";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CURRENCY_SMALLEST_UNIT } from "@/common/constants";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

interface Props {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
}

const OrderSummary: FC<Props> = ({ restaurant, cartItems, removeFromCart }) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / CURRENCY_SMALLEST_UNIT).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between" key={item._id}>
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              $
              {((item.price * item.quantity) / CURRENCY_SMALLEST_UNIT).toFixed(
                2
              )}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>
            ${(restaurant.deliveryPrice / CURRENCY_SMALLEST_UNIT).toFixed(2)}
          </span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
