import LightThemeFactory from "./factories/LightThemeFactory.js";
import DarkThemeFactory from "./factories/DarkThemeFactory.js";

class UIApplication {
  constructor(themeFactory) {
    this.themeFactory = themeFactory;
    this.container = document.getElementById("app");
  }

  renderUI() {
    // Limpiar contenedor
    this.container.innerHTML = "";
    
    // Establecer color de fondo
    this.container.style.backgroundColor = this.themeFactory.getBackgroundColor();
    
    // Crear componentes usando la fábrica
    const button = this.themeFactory.createButton("Click me");
    const card = this.themeFactory.createCard(
      "Example Card",
      "This is a card created with the current theme"
    );
    
    // Renderizar componentes
    this.container.appendChild(button.render());
    this.container.appendChild(card.render());
  }

  changeTheme(themeFactory) {
    this.themeFactory = themeFactory;
    this.renderUI();
  }
}

// Configuración inicial
const lightFactory = new LightThemeFactory();
const darkFactory = new DarkThemeFactory();
const app = new UIApplication(lightFactory);

// Renderizar UI inicial
app.renderUI();

// Exportar para acceso desde la consola (para demo)
window.app = app;
window.lightFactory = lightFactory;
window.darkFactory = darkFactory;