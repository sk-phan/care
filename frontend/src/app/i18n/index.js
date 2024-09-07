"use client"
import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'
import { useEffect, useState } from 'react'

const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

export function useTranslation(lng, options = {}) {
  const [t, setT] = useState(() => (key) => key); // Fallback function until i18n is ready
  const [i18n, setI18n] = useState(null);

  useEffect(() => {
    (async () => {
      const i18nextInstance = await initI18next(lng);
      setI18n(i18nextInstance);
      setT(() => i18nextInstance.getFixedT(lng));
    })();
  }, [lng, options.keyPrefix]);

  return { t, i18n };
}