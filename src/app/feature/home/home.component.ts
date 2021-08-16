import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() title = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.title.emit("Home")
  }

}
