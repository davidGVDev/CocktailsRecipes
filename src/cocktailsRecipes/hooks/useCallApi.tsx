import { useState } from "react";
import axios from "axios";
import { distillates_spirits, iceTypes, garnishTypes, glassware, mixingMethods } from "../interfaces/interfaces";

export const useCallApi = () => {

    const [distillates_spirits, setDistillates_spirits] = useState<distillates_spirits[]>([]);
    const [iceTypes, setIceTypes] = useState<iceTypes[]>([]);
    const [garnishTypes, setGarnishTypes] = useState<garnishTypes[]>([]);
    const [glassware, setGlassware] = useState<glassware[]>([]);
    const [mixingMethods, setMixingMethods] = useState<mixingMethods[]>([]);

  const callApi = async (value: string) => {
    if (value === 'distillates-spirits' && distillates_spirits.length > 0) return;
    if (value === 'ice-types' && iceTypes.length > 0) return;
    if (value === 'garnish-types' && garnishTypes.length > 0) return;
    if (value === 'glassware' && glassware.length > 0) return;
    if (value === 'mixing-methods' && mixingMethods.length > 0) return;

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}${value}`);
      if (value === 'distillates-spirits') {
        setDistillates_spirits(response.data);
      } else if (value === 'ice-types') {
        setIceTypes(response.data);
      } else if (value === 'garnish-types') {
        setGarnishTypes(response.data);
      } else if (value === 'glassware') {
        setGlassware(response.data);
      } else if (value === 'mixing-methods') {
        setMixingMethods(response.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  
  return {
    distillates_spirits,
    iceTypes,
    garnishTypes,
    glassware,
    mixingMethods,
    callApi,
  };
};

