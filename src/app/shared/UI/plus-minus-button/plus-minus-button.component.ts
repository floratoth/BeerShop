import {
  AfterViewInit,
  asNativeElements,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-plus-minus-button',
  templateUrl: './plus-minus-button.component.html',
  styleUrls: ['./plus-minus-button.component.scss'],
})
export class PlusMinusButtonComponent implements OnInit {
  @Input() width?: string;

  @ViewChild('input') myDiv?: ElementRef<HTMLInputElement>;
  inputValue?: number;

  constructor() {}

  ngOnInit(): void {}

  onChangeClicked(): void {
    this.inputValue = Number(this.myDiv?.nativeElement.value);
  }
}
