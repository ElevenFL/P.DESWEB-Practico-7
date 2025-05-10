class LightButton {
  constructor(text) {
    this.text = text;
    this.style = {
      backgroundColor: "#f0f0f0",
      color: "#333",
      border: "1px solid #ddd",
      padding: "8px 16px",
      borderRadius: "4px"
    };
  }

  render() {
    const button = document.createElement("button");
    button.textContent = this.text;
    Object.assign(button.style, this.style);
    return button;
  }
}

class DarkButton {
  constructor(text) {
    this.text = text;
    this.style = {
      backgroundColor: "#333",
      color: "#f0f0f0",
      border: "1px solid #555",
      padding: "8px 16px",
      borderRadius: "4px"
    };
  }

  render() {
    const button = document.createElement("button");
    button.textContent = this.text;
    Object.assign(button.style, this.style);
    return button;
  }
}

export { LightButton, DarkButton };