import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private metaDataSvc: MetadataService) { }

  ngOnInit(): void {
    this.metaDataSvc.setTitle("Home");
  }

}
