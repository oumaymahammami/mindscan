import { Component } from '@angular/core';
import { UploadCardComponent } from "../../components/upload-card/upload-card.component";
import { SegmentationButtonComponent } from "../../components/segmentation-button/segmentation-button.component";
import { GenerateSliceComponent } from "../../components/generate-slice/generate-slice.component";

@Component({
  selector: 'app-segmentation',
  standalone: true,
  templateUrl: './segmentation.component.html',
  styleUrls: ['./segmentation.component.scss'],
  imports: [
    UploadCardComponent,
    SegmentationButtonComponent,
    GenerateSliceComponent
  ]
})
export class SegmentationComponent {}
