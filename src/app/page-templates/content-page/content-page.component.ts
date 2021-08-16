import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  private _title: string;
  get title(): string {
    return this._title;
  }
  @Input()
  set title(value: string) {
    if (value !== this._title) {
      this._title = value;
      this.metaDataSvc.setTitle(value)
    }
  }

  constructor(
    private metaDataSvc: MetadataService
  ) {this._title = "" }

  ngOnInit(): void {
  }

}
