import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-generic',
  templateUrl: './button-generic.component.html',
  styleUrls: ['./button-generic.component.scss']
})
export class ButtonGenericComponent implements OnInit {
  @Input() text: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
