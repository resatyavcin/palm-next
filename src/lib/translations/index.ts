import { en } from "./en";
import { tr } from "./tr";

export const translations = {
  en,
  tr,
};

export type TranslationKey = keyof typeof en;
