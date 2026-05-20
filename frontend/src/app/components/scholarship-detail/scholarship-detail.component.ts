import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ScholarshipService } from '../../services/scholarship.service';

@Component({
  selector: 'app-scholarship-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './scholarship-detail.component.html',
  styleUrls: ['./scholarship-detail.component.css']
})
export class ScholarshipDetailComponent implements OnInit {
  scholarship: any = null;
  loading = true;
  errorMessage = '';
  applied = false;

  constructor(
    private route: ActivatedRoute,
    private scholarshipService: ScholarshipService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchDetail(id);
    } else {
      this.errorMessage = 'Invalid scholarship identifier.';
      this.loading = false;
    }
  }

  fetchDetail(id: string) {
    this.loading = true;
    this.scholarshipService.getScholarshipById(id).subscribe({
      next: (data) => {
        this.scholarship = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching detail:', err);
        this.errorMessage = 'Could not load scholarship details. Please verify the ID.';
        this.loading = false;
      }
    });
  }

  applyMock() {
    this.applied = true;
    // Persist apply locally or just mock it
    setTimeout(() => {
      alert(`Mock Application Submitted!\nYou have successfully applied for: ${this.scholarship.title}.\nWe have forwarded your profile details to ${this.scholarship.provider}.`);
    }, 100);
  }

  getDaysRemaining(deadlineStr: string): number {
    const deadline = new Date(deadlineStr);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }
}