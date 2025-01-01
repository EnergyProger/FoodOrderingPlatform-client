import { FC } from "react";
import { MenuItem as RestaurantMenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CURRENCY_SMALLEST_UNIT } from "@/common/constants";

interface Props {
  menuItem: RestaurantMenuItem;
  addToCart: () => void;
}

const MenuItem: FC<Props> = ({ menuItem, addToCart }) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${(menuItem.price / CURRENCY_SMALLEST_UNIT).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
