import { Platform } from "react-native";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const BG_COLOR = "#323344";
export const HIGHLIGHT_BG_COLOR = "#24263b";

export const TEXT = {
  color: "#fff",
  textAlign: "center",
};

export const TEXT_LABEL = {
  fontSize: 15,
  textAlign: "center",
  color: "#848694",
};

export const TEXT_VALUE = {
  ...TEXT,
  fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
  fontSize: 35,
  lineHeight: 55,
  fontWeight: "bold",
};

export const ROW = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
};

export const CENTER = {
  justifyContent: "center",
  alignItems: "center",
};

export const BOX = {
  flex: 1,
  backgroundColor: BG_COLOR,
  padding: 15,
  borderRadius: 10,
};