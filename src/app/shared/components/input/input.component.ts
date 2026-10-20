import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
})
export class InputComponent {
  iconUrl = input<string | null>(null);
  placeholder = input<string>('');
  type = input<'password' | 'text' | 'email'>('text');
  disabled = input<boolean>(false);
  showPassword = false;
  currentType = this.type();
  @Input() value = '';

  @Output() controlValue = new EventEmitter<string>();

  onInput(event: Event) {
    const target = event?.target as HTMLInputElement;

    this.value = target.value;

    this.controlValue.emit(this.value);
  }

  onShowPassword(): void {
    this.showPassword = !this.showPassword;

    this.currentType = this.showPassword ? 'text' : 'password';
  }
}
