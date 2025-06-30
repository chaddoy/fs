import {
  useIntl as useReactIntl,
  type IntlShape,
  type PrimitiveType,
} from 'react-intl';

interface IntlHook extends IntlShape {
  t: (id: string, values?: Record<string, PrimitiveType>) => string;
}

export function useIntl(): IntlHook {
  const intl = useReactIntl();

  return {
    ...intl,
    t: (id: string, values?: Record<string, PrimitiveType>) =>
      intl.formatMessage({ id }, values),
  };
}
