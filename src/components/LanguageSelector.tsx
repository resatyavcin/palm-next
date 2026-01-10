"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en" as const, name: "English" },
    { code: "tr" as const, name: "Türkçe" },
  ];

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[120px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
