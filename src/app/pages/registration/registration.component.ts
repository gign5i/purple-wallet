import { Component, Input } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-registration-page',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  standalone: true,
})
export class RegistrationComponent {
  @Input() disabled = false;

  onClickDisabled() {
    this.disabled = true;
  }
}
