import { Ref } from 'react';
import { TextInputProps } from 'react-native';

import { ICountry } from './country';
import { ICountryCca2 } from './countryCca2';
import { ILanguage } from './language';
import { ITheme } from './theme';
import { IModalStyles } from './modalStyles';
import { IPhoneInputStyles } from './phoneInputStyles';
import { IPhoneInputRef } from './phoneInputRef';

interface IPhoneInputPropsWithoutRef extends TextInputProps {
  language?: ILanguage;
  placeholder?: string;
  placeholderTextColor?: string;
  selectionColor?: string;
  phoneInputStyle?: IPhoneInputStyles;
  modalStyle?: IModalStyles;
  theme?: ITheme;
  disabled?: boolean;
  modalDisabled?: boolean;
  modalHeight?: number | string;
  defaultCountry?: ICountryCca2;
  defaultValue?: string;
  value: string;
  onChangePhoneNumber: (phoneNumber: string) => void;
  selectedCountry: ICountry | undefined | null;
  onChangeSelectedCountry: (country: ICountry) => void;
  customMask?: Array<string>;
  showOnly?: Array<ICountryCca2>;
  excludedCountries?: Array<ICountryCca2>;
  modalSearchInputPlaceholder?: string;
  modalNotFoundCountryMessage?: string;
  ref?: never;
}

interface IPhoneInputPropsWithRef extends TextInputProps {
  language?: ILanguage;
  placeholder?: string;
  placeholderTextColor?: string;
  selectionColor?: string;
  phoneInputStyle?: IPhoneInputStyles;
  modalStyle?: IModalStyles;
  theme?: ITheme;
  disabled?: boolean;
  modalDisabled?: boolean;
  modalHeight?: number | string;
  defaultCountry?: ICountryCca2;
  defaultValue?: string;
  value?: never;
  onChangePhoneNumber?: never;
  selectedCountry?: never;
  onChangeSelectedCountry?: never;
  customMask?: Array<string>;
  showOnly?: Array<ICountryCca2>;
  excludedCountries?: Array<ICountryCca2>;
  modalSearchInputPlaceholder?: string;
  modalNotFoundCountryMessage?: string;
  ref: Ref<IPhoneInputRef>;
}

export type PhoneInputProps =
  | IPhoneInputPropsWithRef
  | IPhoneInputPropsWithoutRef;
