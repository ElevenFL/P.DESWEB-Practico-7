import ThemeFactory from "./ThemeFactory.js";

// Implementación para tema oscuro
class DarkThemeFactory extends ThemeFactory {
  createButton(text) {
    return new DarkButton(text);
  }

  createCard(title, content) {
    return new DarkCard(title, content);
  }

  getBackgroundColor() {
    return "#121212";
  }
}

export default DarkThemeFactory;