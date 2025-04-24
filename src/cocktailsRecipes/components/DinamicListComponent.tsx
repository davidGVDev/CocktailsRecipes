import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MinusCircle, PlusCircle } from "lucide-react";

export const DinamicListComponent = ({
  formik,
  type,
  title,
}: {
  formik: any;
  type: string;
  title: string;
}) => {
  const addItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: "",
    };
    formik.setFieldValue(type, [...formik.values[type], newItem]);
  };

  const removeItem = (id: string) => {
    const filteredItems = formik.values[type].filter(
      (item: any) => item.id !== id
    );
    formik.setFieldValue(type, filteredItems);
  };

  return (
    <>
      <div className="div7-1">
        <Label className="mb-2">{title}</Label>
        <div className="add" onClick={addItem}>
          <PlusCircle size={15} />
        </div>
      </div>
      <ScrollArea className="h-50 w-full border rounded-md p-3 bg-white">
        {formik.values[type].map((item: any, index: number) => (
          <div key={item.id} className="general-list">
            <Input
              type="text"
              placeholder={title}
              value={item.name}
              onChange={(e) => {
                const newItems = [...formik.values[type]];
                newItems[index].name = e.target.value;
                formik.setFieldValue(type, newItems);
              }}
            />
            <div className="remove" onClick={() => removeItem(item.id)}>
              <MinusCircle size={15} />
            </div>
          </div>
        ))}
      </ScrollArea>
    </>
  );
};
