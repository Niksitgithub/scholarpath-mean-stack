import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ScholarshipService } from '../../services/scholarship.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Tabs
  activeTab: 'recommended' | 'explore' = 'recommended';

  // Scholarship Lists
  recommendedScholarships: any[] = [];
  allScholarships: any[] = [];

  // Filter States
  searchQuery = '';
  selectedStream = '';
  selectedCaste = '';
  selectedState = '';

  // Options Lists
  streamsList = ['Engineering', 'Medicine', 'Science', 'Arts', 'Management'];
  castesList = ['General', 'OBC', 'SC', 'ST'];
  statesList = ['Maharashtra', 'Gujarat', 'Delhi', 'Rajasthan', 'Karnataka', 'Tamil Nadu'];

  // Status flags
  loadingRec = true;
  loadingAll = true;
  errorMessage = '';
  studentProfile: any = null;

  constructor(
    private scholarshipService: ScholarshipService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.studentProfile = this.authService.getStudentDetails();
    this.fetchRecommended();
    this.fetchExplore();
  }

  fetchRecommended() {
    this.loadingRec = true;
    this.scholarshipService.getRecommendedScholarships().subscribe({
      next: (data) => {
        this.recommendedScholarships = data;
        this.loadingRec = false;
      },
      error: (err) => {
        console.error('Error fetching recommended:', err);
        this.errorMessage = 'Could not load recommended scholarships.';
        this.loadingRec = false;
      }
    });
  }

  fetchExplore() {
    this.loadingAll = true;
    const filters = {
      search: this.searchQuery,
      stream: this.selectedStream,
      caste: this.selectedCaste,
      state: this.selectedState
    };

    this.scholarshipService.getAllScholarships(filters).subscribe({
      next: (data) => {
        this.allScholarships = data;
        this.loadingAll = false;
      },
      error: (err) => {
        console.error('Error fetching explore list:', err);
        this.errorMessage = 'Could not load explore scholarship list.';
        this.loadingAll = false;
      }
    });
  }

  applyFilters() {
    this.fetchExplore();
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedStream = '';
    this.selectedCaste = '';
    this.selectedState = '';
    this.fetchExplore();
  }

  // Helper Methods for Statistics
  getTotalRecommendedValue(): number {
    return this.recommendedScholarships.reduce((sum, s) => sum + s.amount, 0);
  }

  getDaysRemaining(deadlineStr: string): number {
    const deadline = new Date(deadlineStr);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }

  getClosestDeadlineDays(): string {
    if (this.recommendedScholarships.length === 0) return 'N/A';
    const activeDeadlines = this.recommendedScholarships
      .map(s => this.getDaysRemaining(s.deadline))
      .filter(days => days > 0);
    
    if (activeDeadlines.length === 0) return 'Expired';
    const minDays = Math.min(...activeDeadlines);
    return `${minDays} Days`;
  }
}