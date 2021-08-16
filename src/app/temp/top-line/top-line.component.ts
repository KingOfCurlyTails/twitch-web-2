import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-top-line',
  templateUrl: './top-line.component.html',
  styleUrls: ['./top-line.component.scss']
})
export class TopLineComponent implements OnInit {

 public title = "";

  constructor(private metaDataSvc: MetadataService) { }

  ngOnInit(): void {
    console.log(this.title)
    this.metaDataSvc.title$.subscribe((x)=>{this.title = x})
  }

  triggerMenu() {
    console.log("triggered")
  }

}
