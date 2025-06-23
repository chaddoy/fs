import { Loader2 } from 'lucide-react';
import {
  Button as ShadcnButton,
  ButtonProps as ShadcnButtonProps,
} from '@shadcn-ui/components/ui/button';

interface ButtonProps extends ShadcnButtonProps {
  loading?: boolean;
  loadingText?: string;
}

export default function Button({
  children,
  loading,
  loadingText = 'Please wait',
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton {...props} disabled={loading || props.disabled}>
      {loading && <Loader2 className="animate-spin" />}
      {loading ? loadingText : children}
    </ShadcnButton>
  );
}
