import ThemeFactory from "./ThemeFactory.js";

// Implementación para tema claro
class LightThemeFactory extends ThemeFactory {
  createButton(text) {
    return new LightButton(text);
  }

  createCard(title, content) {
    return new LightCard(title, content);
  }

  getBackgroundColor() {
    return "#ffffff";
  }
}

export default LightThemeFactory;