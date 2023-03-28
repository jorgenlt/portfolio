import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navlinks"
export default class extends Controller {
  static targets = [];

  about() {
    window.location.href = '#1'; // anchors created by fullpage.js
    pushbar.close(); // closes the mobile nav-menu
  }

  portfolio() {
    window.location.href = '#2'
    pushbar.close();
  }

  resume() {
    window.location.href = '#3'
    pushbar.close();
  }

  contact() {
    window.location.href = '#4'
    pushbar.close();
  }
}
