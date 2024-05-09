"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../../i18nConfig";
import { ChangeEvent } from "react";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
        
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {

      router.push("/" + newLocale); 
              
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    setTimeout(() => {
      window.location.reload();
    }, 2000);
    // router.refresh();
    // window.location.reload();
    // router.reload();
  };

  return (
    <select className="bg-transparent border-none text-red-400 font-extrabold text-center font-quicksand text-[18px] leading-[28.8px]" onChange={handleChangeLocale} value={currentLocale}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
  );
}