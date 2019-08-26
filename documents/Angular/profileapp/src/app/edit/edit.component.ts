import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  userProfile: object;

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }
  setUserProfile(profileForm) {
    this.profileService.setUserProfile(
      profileForm.value.name,
      profileForm.value.contactInfo,
      profileForm.value.bio
    );
  }
}
