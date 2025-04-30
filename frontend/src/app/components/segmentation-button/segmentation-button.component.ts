import { Component } from '@angular/core';
import { UploadService } from '../../services/pythonServices/upload.service';

@Component({
  selector: 'app-segmentation-button',
  templateUrl: './segmentation-button.component.html',
  standalone: true,
  styleUrl: './segmentation-button.component.scss'
})
export class SegmentationButtonComponent {
  constructor(private dataService: UploadService) {}

  uploadResponse: string = '';
  loading: boolean = false;
  private loadingInterval: any;

  DoSegmentation() {
    this.loading = true;
    this.startLoadingAnimation();

    this.dataService.startSegmentation().subscribe({
      next: (res) => {
        this.stopLoadingAnimation();
        this.uploadResponse = res.message;
      },
      error: (err) => {
        console.error(err);
        this.stopLoadingAnimation();
        this.uploadResponse = 'Segmentation failed.';
      }
    });
  }

  private startLoadingAnimation() {
    let dots = '';
    this.uploadResponse = 'Segmentating, please wait';
    this.loadingInterval = setInterval(() => {
      dots = dots.length < 3 ? dots + '.' : '';
      this.uploadResponse = `Segmentating, please wait${dots}`;
    }, 500);
  }

  private stopLoadingAnimation() {
    if (this.loadingInterval) {
      clearInterval(this.loadingInterval);
      this.loadingInterval = null;
    }
    this.loading = false;
  }
}
