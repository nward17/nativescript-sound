import { Device } from "@nativescript/core";
import * as AppleSound from "./sound.ios";
import * as AndroidSound from "./sound.android";

export default function getSound() {
  const os = Device.os;
  return os === "iOS" ? AppleSound : AndroidSound;
}
