import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

interface NavItem {
  label: string;
  route: string;
  icon?: string;
}

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"],
})
export class LayoutComponent implements OnInit {
  @Input() appName = "MindScan";
  @Input() logoUrl = "mindscan.png";

  isMenuOpen = false;

  navItems: NavItem[] = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/about" },
    { label: "Segmentation", route: "/login" },
    { label: "Admin", route: "/admin-login" }
  ];

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
