import {
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
  @Input() quantity: number = 0;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() minusClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() plusClicked: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input') myDiv?: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  onChangeClicked(): void {
    this.quantity = Number(this.myDiv?.nativeElement.value);
    if (this.quantity >= 0) {
      this.valueChanged.emit(this.quantity);
    }
  }

  onMinusClicked(): void {
    if (this.quantity >= 0) {
      this.minusClicked.emit('');
    }
  }

  onPlusClicked(): void {
    this.plusClicked.emit('');
  }
}
