import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComboBoxComponente } from "./ComboBoxComponente";
import { Button } from "@/components/ui/button";
import { distillates_spirits } from "../../data";
import { mixingMethods } from "../../data";
import { glassware } from "../../data";
import { iceTypes } from "../../data";
import { garnishTypes } from "../../data";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PlusCircle, MinusCircle } from "lucide-react";

interface Ingredient {
  id: string;
  name: string;
}

interface FormValues {
  name: string;
  distilled: string;
  iceType: string;
  garnish: string;
  glass: string;
  mixingMethod: string;
  ingredients: Ingredient[];
}

export const FormCocktailsComponent = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      distilled: "",
      iceType: "",
      garnish: "",
      glass: "",
      mixingMethod: "",
      ingredients: [{ id: "1", name: "" }],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      distilled: Yup.string().required("Required"),
      iceType: Yup.string().required("Required"),
      garnish: Yup.string().required("Required"),
      glass: Yup.string().required("Required"),
      mixingMethod: Yup.string().required("Required"),
      ingredients: Yup.array().of(
        Yup.object().shape({
          id: Yup.string().required(),
          name: Yup.string().required("Required"),
        })
      ),
    }),
    onSubmit: () => {},
  });

  const addIngredient = () => {
    const newIngredient = {
      id: Date.now().toString(),
      name: "",
    };
    formik.setFieldValue("ingredients", [
      ...formik.values.ingredients,
      newIngredient,
    ]);
  };

  const removeIngredient = (id: string) => {
    const filteredIngredients = formik.values.ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    formik.setFieldValue("ingredients", filteredIngredients);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="m-2 p-2 h-auto w-100%">
        <div className="parent">
          <div className="div1">
            <Label className="mb-2">Name</Label>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="div2">
            <Label className="mb-2">Distilled</Label>
            <ComboBoxComponente
              data={distillates_spirits}
              value={formik.values.distilled}
              onValueChange={(value) =>
                formik.setFieldValue("distilled", value)
              }
            />
          </div>
          <div className="div3">
            <Label className="mb-2">Type Ice</Label>
            <ComboBoxComponente
              data={iceTypes}
              value={formik.values.iceType}
              onValueChange={(value) => formik.setFieldValue("iceType", value)}
            />
          </div>
          <div className="div4">
            <Label className="mb-2">Garnish</Label>
            <ComboBoxComponente
              data={garnishTypes}
              value={formik.values.garnish}
              onValueChange={(value) => formik.setFieldValue("garnish", value)}
            />
          </div>
          <div className="div5">
            <Label className="mb-2">Glass</Label>
            <ComboBoxComponente
              data={glassware}
              value={formik.values.glass}
              onValueChange={(value) => formik.setFieldValue("glass", value)}
            />
          </div>
          <div className="div6">
            <Label className="mb-2">Mixin Method</Label>
            <ComboBoxComponente
              data={mixingMethods}
              value={formik.values.mixingMethod}
              onValueChange={(value) =>
                formik.setFieldValue("mixingMethod", value)
              }
            />
          </div>

          <div className="div7">
            <div className="div7-1">
              <Label className="mb-2">Ingredients</Label>
              <div className="add" onClick={addIngredient}>
                <PlusCircle size={15} />
              </div>
            </div>
            {formik.values.ingredients.map((ingredient, index) => (
              <div key={ingredient.id} className="general-list">
                <Input
                  type="text"
                  placeholder="Ingredients"
                  value={ingredient.name}
                  onChange={(e) => {
                    const newIngredients = [...formik.values.ingredients];
                    newIngredients[index].name = e.target.value;
                    formik.setFieldValue("ingredients", newIngredients);
                  }}
                />
                <div className="remove" onClick={() => removeIngredient(ingredient.id)}>
                  <MinusCircle size={15} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="div8">
            <div className="div8-1">
              <Label className="mb-2">Instructions</Label>
              <div className="add">
                <PlusCircle size={15} />
              </div>
            </div>
            <div className="general-list">
              <Input type="text" placeholder="Instructions" />
              <div className="remove">
                <MinusCircle size={15} />
              </div>
            </div>
          </div>
          <div className="div9">
            <Label className="mb-2">Image</Label>
            <Input type="file" placeholder="Image" />
          </div>
          <div className="div10">
            <Label className="mb-2">Boton</Label>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </div>
    </form>
  );
};
