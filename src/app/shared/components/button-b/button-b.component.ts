import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-b',
  templateUrl: './button-b.component.html',
  styleUrls: ['./button-b.component.scss']
})
export class ButtonBComponent implements OnInit {
  text: string;
  constructor() {
    this.text = 'Button B';
  }

  ngOnInit(): void {
  }

}
