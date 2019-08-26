import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProfileService } from "./profile.service";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditComponent } from "./edit/edit.component";


//1.Establish routes
const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "edit", component: EditComponent },
  { path: "**", redirectTo: "profile" }
];

@NgModule({
  declarations: [AppComponent, ProfileComponent, EditComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
