import { useEffect } from "react";
import { preetiMapping } from "@/data/nepali-mappings";

/** This function will convert eng typing
  to preeti font by matching it */
export function useNepaliTyping(): void {
  useEffect(() => {
    const handleInputChange = (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      if (
        inputElement.tagName === "INPUT" &&
        inputElement.type === "text" &&
        inputElement.dataset.nepali === "true"
      ) {
        const englishText = inputElement.value;
        const nepaliText = convertToNepali(englishText);
        inputElement.value = nepaliText;
      }
    };

    const convertToNepali = (englishText: string): string => {
      let nepaliText = "";
      for (let i = 0; i < englishText.length; i++) {
        const char = englishText[i];
        nepaliText += preetiMapping[char as keyof typeof preetiMapping] || char;
      }
      return nepaliText;
    };

    document.addEventListener("input", handleInputChange);

    return () => {
      document.removeEventListener("input", handleInputChange);
    };
  }, []);
}