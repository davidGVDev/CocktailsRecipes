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
import { DinamicListComponent } from "./DinamicListComponent";
import { FormValues } from "../interfaces/interfaces";
import { ScrollArea } from "@/components/ui/scroll-area";

export const FormCocktailsComponent = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      distilled: "",
      iceType: "",
      garnish: "",
      glass: "",
      mixingMethod: "",
      ingredients: [{ id: Date.now().toString(), name: "" }],
      instructions: [{ id: Date.now().toString(), name: "" }],
      image: "",
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
      instructions: Yup.array().of(
        Yup.object().shape({
          id: Yup.string().required(),
          name: Yup.string().required("Required"),
        })
      ),
      image: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            <DinamicListComponent formik={formik} type="ingredients" title="Ingredients" />
          </div>
          <div className="div8">
            <DinamicListComponent formik={formik} type="instructions" title="Instructions" />
          </div>

          <div className="div9">
            <Label className="mb-2">Image</Label>
            <Input
              type="file"
              placeholder="Image"
              value={formik.values.image}
              onChange={(e) => formik.setFieldValue("image", e.target.value)}
            />
          </div>
          <div className="div10">
            <Button
              className="cursor-pointer w-full bg-green-500 text-white rounded-md hover:bg-green-600"
              type="submit"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
