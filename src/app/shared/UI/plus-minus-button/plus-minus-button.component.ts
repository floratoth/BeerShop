import {
  AfterViewInit,
  asNativeElements,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-plus-minus-button',
  templateUrl: './plus-minus-button.component.html',
  styleUrls: ['./plus-minus-button.component.scss'],
})
export class PlusMinusButtonComponent implements OnInit {
  @Input() width?: string;
  @Input() quantity?: number = 0;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('input') myDiv?: ElementRef<HTMLInputElement>;
  inputValue?: number;

  constructor() {}

  ngOnInit(): void {}

  onChangeClicked(): void {
    this.inputValue = Number(this.myDiv?.nativeElement.value);
    this.valueChanged.emit(this.inputValue);
  }
}
