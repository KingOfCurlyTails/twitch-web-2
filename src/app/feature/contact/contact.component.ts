import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private metaDataSvc: MetadataService) { }

  ngOnInit(): void {
    this.metaDataSvc.setTitle("Kontakt");
  }

}
