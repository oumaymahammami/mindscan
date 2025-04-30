import type { Routes } from "@angular/router"
import { FormsModule } from '@angular/forms';

import { LoginComponent } from "./components/login/login.component"
import { RegisterComponent } from "./components/register/register.component"
import { LayoutComponent } from "./components/layout/layout.component"
import { HomeComponent } from "./components/home/home.component"
import { AboutComponent } from "./components/about/about.component"
import { ContactUsComponent } from "./components/contact-us/contact-us.component"
import { SegmentationComponent } from "./components/segmentation/segmentation.component"
import { UploadCardComponent } from "./components/upload-card/upload-card.component"
import { SegmentationButtonComponent } from "./components/segmentation-button/segmentation-button.component"
import { GenerateSliceComponent } from "./components/generate-slice/generate-slice.component"
import { ConfirmationComponent } from "./components/confirmation/confirmation.component"
import { UsersComponent } from "./components/users/users.component"
import { AdminComponent } from "./components/admin/admin.component"  // ✅ NEW IMPORT

import { AuthGuard } from "./guards/auth.guard"

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "contact-us", component: ContactUsComponent },
      { path: "confirmation", component: ConfirmationComponent },
      { path: "segmentation", component: SegmentationComponent, canActivate: [AuthGuard] },
      { path: "upload-card", component: UploadCardComponent },
      { path: "segmentation-button", component: SegmentationButtonComponent },
      { path: "generate-slice", component: GenerateSliceComponent },
      { path: "users", component: UsersComponent },
      { path: "admin", component: AdminComponent, canActivate: [AuthGuard] }  // ✅ NEW ROUTE
    ],
  },
]
