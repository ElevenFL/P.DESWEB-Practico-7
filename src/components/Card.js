class LightCard {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.style = {
      backgroundColor: "#fff",
      color: "#333",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    };
  }

  render() {
    const card = document.createElement("div");
    const titleEl = document.createElement("h3");
    const contentEl = document.createElement("p");

    titleEl.textContent = this.title;
    contentEl.textContent = this.content;

    Object.assign(card.style, this.style);
    card.appendChild(titleEl);
    card.appendChild(contentEl);

    return card;
  }
}

class DarkCard {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.style = {
      backgroundColor: "#333",
      color: "#f0f0f0",
      border: "1px solid #555",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
    };
  }

  render() {
    const card = document.createElement("div");
    const titleEl = document.createElement("h3");
    const contentEl = document.createElement("p");

    titleEl.textContent = this.title;
    contentEl.textContent = this.content;

    Object.assign(card.style, this.style);
    card.appendChild(titleEl);
    card.appendChild(contentEl);

    return card;
  }
}

export { LightCard, DarkCard };