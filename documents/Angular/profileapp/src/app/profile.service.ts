import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: object = {
    name: "Grant Chirpus",
    contactInfo: "grant@grandcircus.co",
    bio:
      "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at Angular JS."
  };

  constructor(private router: Router) {}

  getUserProfile(): object {
    return this.userProfile;
  }

  setUserProfile(name: string, contactInfo: string, bio: string) {
    this.userProfile = {
      name: name,
      contactInfo: contactInfo,
      bio: bio
    };

    this.router.navigate(["profile"]);
  }

  //To use -navigate-, we had to import router at the top
  editProfile() {
    this.router.navigate(["edit"]);
  }
}
