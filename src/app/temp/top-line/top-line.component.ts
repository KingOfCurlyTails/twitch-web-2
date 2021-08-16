import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-line',
  templateUrl: './top-line.component.html',
  styleUrls: ['./top-line.component.scss']
})
export class TopLineComponent implements OnInit {

  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.title)
  }

  triggerMenu() {
    console.log("triggered")
  }

}
