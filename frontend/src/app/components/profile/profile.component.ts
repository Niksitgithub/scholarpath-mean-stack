import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Form fields
  name = '';
  caste = 'General';
  income: number | null = null;
  marks: number | null = null;
  state = '';
  gender = 'Male';
  stream = 'Engineering';
  disability = false;
  area = 'Urban';

  // Status variables
  loading = true;
  saving = false;
  successMessage = '';
  errorMessage = '';

  // Select Options
  castesList = ['General', 'OBC', 'SC', 'ST'];
  gendersList = ['Male', 'Female', 'Other'];
  streamsList = ['Engineering', 'Medicine', 'Science', 'Arts', 'Management'];
  areasList = ['Urban', 'Rural'];
  statesList = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.loading = true;
    this.authService.getProfile().subscribe({
      next: (profile: any) => {
        this.name = profile.name || '';
        this.caste = profile.caste || 'General';
        this.income = profile.income !== undefined ? profile.income : null;
        this.marks = profile.marks !== undefined ? profile.marks : null;
        this.state = profile.state || '';
        this.gender = profile.gender || 'Male';
        this.stream = profile.stream || 'Engineering';
        this.disability = !!profile.disability;
        this.area = profile.area || 'Urban';
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading profile:', err);
        this.errorMessage = 'Failed to load profile details.';
        this.loading = false;
      }
    });
  }

  saveProfile() {
    this.saving = true;
    this.successMessage = '';
    this.errorMessage = '';

    const profileData = {
      name: this.name,
      caste: this.caste,
      income: this.income,
      marks: this.marks,
      state: this.state,
      gender: this.gender,
      stream: this.stream,
      disability: this.disability,
      area: this.area
    };

    this.authService.updateProfile(profileData).subscribe({
      next: (updated: any) => {
        this.successMessage = 'Profile updated successfully! 🎉';
        this.saving = false;
        setTimeout(() => {
          this.router.navigate(['/']); // Redirect to dashboard after a brief delay
        }, 1500);
      },
      error: (err) => {
        console.error('Error saving profile:', err);
        this.errorMessage = 'Failed to update profile details.';
        this.saving = false;
      }
    });
  }
}