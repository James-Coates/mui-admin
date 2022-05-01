import Button from "./Button";
import { Theme } from "@mui/material";
import List from "./List";

export default function ComponentsOverride(theme: Theme) {
  return Object.assign(Button(theme), List(theme));
}
