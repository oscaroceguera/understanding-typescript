interface Toast {
  template: string;
  title: string;
  body: string;
  postion: string;
  visible: boolean;
  hide(): void;
  render(
    title: string,
    body: string,
    duration: number,
    postion: string
  ): string;
}

class MobileToast implements Toast {
  title: string;
  body: string;
  duration: number;
  visible = false;
  position = "center";
  template = `
  <div class="mobile-toast">
      <div class="mobile-toast--header">
        <h2>${this.title}</h2>
        <span>${this.duration}</span>
      </div>
      <hr/>
      <p class="mobile-toast--body">
        ${this.message}
      </p>
  </div>
`;

  hide() {
    this.visible = false;
  }

  render(title: string, body: string, duration: number, position: string) {
    (this.title = title), (this.body = body);
    this.visible = false;
    this.duration = duration;
    this.position = "center";
    return this.template;
  }
}

class DesktopToast implements Toast {
  title: string;
  body: string;
  position: string;
  visible = false;
  duration: number;
  template = `
      <div class="desktop-toast">
          <div class="desktop-toast--header">
            <h2>${this.title}</h2>
            <span>${this.duration}</span>
          </div>
          <hr/>
          <p class="mobile-toast--body">
            ${this.message}
          </p>
      </div>
  `;
  hide() {
    this.visible = false;
  }
  render(title: string, body: string, duration: number, position: string) {
    (this.title = title), (this.body = body);
    this.visible = true;
    this.duration = duration;
    this.position = position;
    return this.template;
  }
}

class ToastFactory {
  createToast(type: "mobile" | "desktop"): Toast {
    if (type === "mobile") {
      return new MobileToast();
    } else {
      return new DesktopToast();
    }
  }
}

class App {
  toast: Toast;
  factory = new ToastFactory();
  render() {
    this.toast = this.factory.createToast(isMobile() ? "mobile" : "desktop");
    if (this.toast.visible) {
      this.toast.render("Toast Header", "Toast body");
    }
  }
}
