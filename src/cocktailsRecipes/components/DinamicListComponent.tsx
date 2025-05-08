import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MinusCircle, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const DinamicListComponent = ({
  formik,
  type,
  title,
  error,
  touched,
}: {
  formik: any;
  type: string;
  title: string;
  error?: { name?: string }[];
  touched?: boolean;
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
      <ScrollArea className={cn("h-50 w-full border rounded-md p-3 bg-white", error && error.length > 0 && touched && "border-red-500 focus-visible:ring-red-500")}>
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
      {error && error.length > 0 && touched && (
        <p className="ml-1 text-red-500 text-sm">
          {error.map((item) => item.name).join(", ")}
        </p>
      )}
    </>
  );
};
