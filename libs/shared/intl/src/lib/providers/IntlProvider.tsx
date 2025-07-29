import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import enMessages from '../messages/en.json';

const messages = {
  en: enMessages,
};

interface IntlProviderProps {
  children: React.ReactNode;
  locale?: string;
}

export function IntlProvider({ children, locale = 'en' }: IntlProviderProps) {
  return (
    <ReactIntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}
      defaultLocale="en"
    >
      {children}
    </ReactIntlProvider>
  );
}
