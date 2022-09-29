export interface TextInputType {
  placeholder: string;
  placeholderTextColor?: ColorValue | undefined;
  style?: StyleProp<TextStyle>;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  onEndEditing?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
}
