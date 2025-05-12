import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComboBoxComponente } from "./ComboBoxComponente";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DinamicListComponent } from "./DinamicListComponent";
import { FormValues } from "../interfaces/interfaces";
import { useCallApi } from "../hooks/useCallApi";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";


export const FormCocktailsComponent = () => {
  const {
    distillates_spirits,
    iceTypes,
    garnishTypes,
    glassware,
    mixingMethods,
    callApi,
  } = useCallApi();

  const formik = useFormik<FormValues>({
    initialValues: {
      id: "",
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
      name: Yup.string().required("Name is required"),
      distilled: Yup.string().required("Distilled is required"),
      iceType: Yup.string().required("Ice Type is required"),
      garnish: Yup.string().required("Garnish is required"),
      glass: Yup.string().required("Glass is required"),
      mixingMethod: Yup.string().required("Mixing Method is required"),
      ingredients: Yup.array().of(
        Yup.object().shape({
          id: Yup.string().required(),
          name: Yup.string().required("Ingredients is required"),
        })
      ),
      instructions: Yup.array().of(
        Yup.object().shape({
          id: Yup.string().required(),
          name: Yup.string().required("Instructions is required"),
        })
      ),
      image: Yup.string().required("Image is required"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("distilled", values.distilled);
      formData.append("iceType", values.iceType);
      formData.append("garnish", values.garnish);
      formData.append("glass", values.glass);
      formData.append("mixingMethod", values.mixingMethod);
      formData.append("ingredients", JSON.stringify(values.ingredients));
      formData.append("instructions", JSON.stringify(values.instructions));
      formData.append("image", values.image);
      // console.log(formik.isValid);
      axios
        .post(`${import.meta.env.VITE_API_BASE_URL}cocktails`, formData)
        .then((response) => {
          console.log(response);
          toast.success("Cocktail created successfully", {
            style: {
              background: "green",
              color: "white",
              border: "green",
            },
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
          formik.resetForm();
        })
        .catch((error) => {
          console.log(error);
          toast.error("Cocktail created failed", {
            description: error.response.data.message,
            style: {
              background: "red",
              color: "white",
              border: "red",
            },
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        });
    },
  });

  return (
    <>
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
                className={cn(
                  formik.errors.name &&
                    formik.touched.name &&
                    "border-red-500 focus-visible:ring-red-500"
                )}
              />
              {formik.errors.name && formik.touched.name && (
                <p className="ml-1 text-red-500 text-sm">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className="div2">
              <Label className="mb-2">Distilled</Label>
              <ComboBoxComponente
                data={distillates_spirits}
                value={formik.values.distilled}
                onValueChange={(value) =>
                  formik.setFieldValue("distilled", value)
                }
                onFocus={() => callApi("distillates-spirits")}
                error={formik.errors.distilled}
                touched={formik.touched.distilled}
              />
              {formik.errors.distilled && formik.touched.distilled && (
                <p className="ml-1 text-red-500 text-sm">
                  {formik.errors.distilled}
                </p>
              )}
            </div>
            <div className="div3">
              <Label className="mb-2">Type Ice</Label>
              <ComboBoxComponente
                data={iceTypes}
                value={formik.values.iceType}
                onValueChange={(value) =>
                  formik.setFieldValue("iceType", value)
                }
                onFocus={() => callApi("ice-types")}
                error={formik.errors.iceType}
                touched={formik.touched.iceType}
              />
              {formik.errors.iceType && formik.touched.iceType && (
                <p className="ml-1 text-red-500 text-sm">
                  {formik.errors.iceType}
                </p>
              )}
            </div>
            <div className="div4">
              <Label className="mb-2">Garnish</Label>
              <ComboBoxComponente
                data={garnishTypes}
                value={formik.values.garnish}
                onValueChange={(value) =>
                  formik.setFieldValue("garnish", value)
                }
                onFocus={() => callApi("garnish-types")}
                error={formik.errors.garnish}
                touched={formik.touched.garnish}
              />
              {formik.errors.garnish && formik.touched.garnish && (
                <p className="ml-1 text-red-500 text-sm">
                  {formik.errors.garnish}
                </p>
              )}
            </div>
            <div className="div5">
              <Label className="mb-2">Glass</Label>
              <ComboBoxComponente
                data={glassware}
                value={formik.values.glass}
                onValueChange={(value) => formik.setFieldValue("glass", value)}
                onFocus={() => callApi("glassware")}
                error={formik.errors.glass}
                touched={formik.touched.glass}
              />
              {formik.errors.glass && formik.touched.glass && (
                <p className="ml-1 text-red-500 text-sm">
                  {formik.errors.glass}
                </p>
              )}
            </div>
            <div className="div6">
              <Label className="mb-2">Mixin Method</Label>
              <ComboBoxComponente
                data={mixingMethods}
                value={formik.values.mixingMethod}
                onValueChange={(value) =>
                  formik.setFieldValue("mixingMethod", value)
                }
                onFocus={() => callApi("mixing-methods")}
                error={formik.errors.mixingMethod}
                touched={formik.touched.mixingMethod}
              />
              {formik.errors.mixingMethod && formik.touched.mixingMethod && (
                <p className="ml-1 text-red-500 text-sm">
                  {formik.errors.mixingMethod}
                </p>
              )}
            </div>

            <div className="div7">
              <DinamicListComponent
                formik={formik}
                type="ingredients"
                title="Ingredients"
                error={formik.errors.ingredients as { name?: string }[]}
                touched={formik.touched.ingredients as unknown as boolean}
              />
            </div>
            <div className="div8">
              <DinamicListComponent
                formik={formik}
                type="instructions"
                title="Instructions"
                error={formik.errors.instructions as { name?: string }[]}
                touched={formik.touched.instructions as unknown as boolean}
              />
            </div>

            <div className="div9">
              <Label className="mb-2">Image</Label>
              <Input
                type="file"
                placeholder="Image"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    formik.setFieldValue("image", file);
                  }
                }}
                className={cn(
                  formik.errors.image &&
                    formik.touched.image &&
                    "border-red-500 focus-visible:ring-red-500"
                )}
              />
              {formik.errors.image && formik.touched.image && (
                <p className="ml-1 text-red-500 text-sm">
                  {formik.errors.image}
                </p>
              )}
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
      <Toaster />
    </>
  );
};
