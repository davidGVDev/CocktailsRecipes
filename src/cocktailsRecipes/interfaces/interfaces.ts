export interface selectOptions {
  value: string;
  label: string;
}
export interface essentialEquipment {
  name_english: string;
  name_spanish: string;
  description_english: string;
  description_spanish: string;
}
export interface mixingMethods {
  value: string;
  name_english: string;
  name_spanish: string;
  description_english: string;
  description_spanish: string;
}
export interface glassware {
  value: string;
  name_spanish: string;
  name_english: string;
  description_spanish: string;
  description_english: string;
  examples_cocktails: string[];
}
export interface iceTypes {
  value: string;
  name_english: string;
  name_spanish: string;
  description_spanish: string;
  description_english: string;
  examples_cocktails: string[];
}
export interface garnishTypes {
  value: string;
  name_english: string;
  name_spanish: string;
  description_spanish: string;
  description_english: string;
  examples_cocktails: string[];
}
export interface distillates_spirits {
  value: string;
  name_english: string;
  name_spanish: string;
  description_spanish: string;
  description_english: string;
  examples_cocktails: string[];
  history: string;
}

export interface Ingredient {
  id: string;
  name: string;
}

export interface FormValues {
  id: string;
  name: string;
  distilled: string;
  iceType: string;
  garnish: string;
  glass: string;
  mixingMethod: string;
  ingredients: Ingredient[];
  instructions: Ingredient[];
  image: string;
}
