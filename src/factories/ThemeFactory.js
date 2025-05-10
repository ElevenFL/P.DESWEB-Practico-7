class ThemeFactory {
  createButton() {
    throw new Error("Method 'createButton()' must be implemented");
  }

  createCard() {
    throw new Error("Method 'createCard()' must be implemented");
  }

  getBackgroundColor() {
    throw new Error("Method 'getBackgroundColor()' must be implemented");
  }
}

export default ThemeFactory;