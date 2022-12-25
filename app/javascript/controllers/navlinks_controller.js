import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navlinks"
export default class extends Controller {
  static targets = ["about", "portfolio", "resume", "contact"]

  about() {
    window.location.href = '#about-anchor';
    pushbar.close(); // closes the mobile nav-menu
  }

  portfolio() {
    window.location.href = '#portfolio-anchor'
    pushbar.close();
  }

  resume() {
    window.location.href = '#resume-anchor'
    pushbar.close();
  }

  contact() {
    window.location.href = '#contact-anchor'
    pushbar.close();
  }
}
