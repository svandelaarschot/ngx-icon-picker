import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: "[text]",
  standalone: false,
})
export class TextDirective {
  @Output() newValue = new EventEmitter<string>();
  @Input() text: string;

  @HostListener("input", ["$event.target.value"])
  changeInput(value: string) {
    this.newValue.emit(value);
  }
}
