import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navlinks"
export default class extends Controller {
  static targets = ["about", "portfolio", "resume", "contact"]

  about(event) {
    event.preventDefault();
    window.location.href = '#about-anchor';
    pushbar.close(); // closes the mobile nav-menu
  }

  portfolio(event) {
    event.preventDefault();
    window.location.href = '#portfolio-anchor'
    pushbar.close();
  }

  resume(event) {
    event.preventDefault();
    window.location.href = '#resume-anchor'
    pushbar.close();
  }

  contact(event) {
    event.preventDefault();
    window.location.href = '#contact-anchor'
    pushbar.close();
  }
}
