export default function setSetting(setting, str, prompt) {
  if (typeof setting != "string") throw new Error("Expected a string");
  if (typeof str != "string") throw new Error("Expected a string");
  setting = setting.trim();
  str = str.trim();
  return (prompt ? prompt + " " : "") + "--" + setting + "=" + str;
}
