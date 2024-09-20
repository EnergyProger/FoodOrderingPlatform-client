import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FC } from "react";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
}

const CuisineCheckBox: FC<Props> = ({ cuisine, field }) => {
  const onCheckedChange = (checked: boolean) => {
    if (checked) {
      field.onChange([...field.value, cuisine]);
    } else {
      field.onChange(field.value.filter((value: string) => value !== cuisine));
    }
  };

  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(cuisine)}
          onCheckedChange={onCheckedChange}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckBox;
