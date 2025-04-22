import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComboBoxComponente } from "./ComboBoxComponente";
import { Button } from "@/components/ui/button";
import { distillates_spirits } from "../../data";
import { mixingMethods } from "../../data";
import { glassware } from "../../data";
import { iceTypes } from "../../data";
import { garnishTypes } from "../../data";
export const FormCocktailsComponent = () => {
  return (
    <div className="m-2 p-2 h-auto w-100%">
      <div className="parent">
        <div className="div1">
          <Label className="mb-2">Name</Label>
          <Input type="text" placeholder="Name" />
        </div>
        <div className="div2">
          <Label className="mb-2">Distilled</Label>
          <ComboBoxComponente data={distillates_spirits} />
        </div>
        <div className="div3">
          <Label className="mb-2">Type Ice</Label>
          <ComboBoxComponente data={iceTypes} />

        </div>
        <div className="div4">
          <Label className="mb-2">Garnish</Label>
          <ComboBoxComponente data={garnishTypes} />
        </div>
        <div className="div5">
          <Label className="mb-2">Glass</Label>
          <ComboBoxComponente data={glassware} />
        </div>
        <div className="div6">
          <Label className="mb-2">Mixin Method</Label>
          <ComboBoxComponente data={mixingMethods} />
        </div>
        <div className="div7">
          <Label className="mb-2">Ingredients</Label>
          <Input type="text" placeholder="Ingredients" />
          <Input type="text" placeholder="Ingredients" />
          <Input type="text" placeholder="Ingredients" />
          <Input type="text" placeholder="Ingredients" />
          <Input type="text" placeholder="Ingredients" />
        </div>
        <div className="div8">
          <Label className="mb-2">Instructions</Label>
          <Input type="text" placeholder="Instructions" />
          <Input type="text" placeholder="Instructions" />
          <Input type="text" placeholder="Instructions" />
          <Input type="text" placeholder="Instructions" />
          <Input type="text" placeholder="Instructions" />
        </div>
        <div className="div9">
          <Label className="mb-2">Image</Label>
          <Input type="file" placeholder="Image" />
        </div>
        <div className="div10">
          <Label className="mb-2">Boton</Label>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};
