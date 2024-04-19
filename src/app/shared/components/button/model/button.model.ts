export interface Button {
  label?: string;
  icon?: string;
  class?: string;
  disable?: () => boolean;
  click: () => void;
}
