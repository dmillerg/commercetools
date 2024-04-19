export interface Button {
  label?: string;
  icon?: string;
  class?: string;
  type?: ButtonType;
  disable?: () => boolean;
  click: (data?: any) => void;
}

export type ButtonType = 'primary' | 'outline';
