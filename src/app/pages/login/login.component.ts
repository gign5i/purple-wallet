import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputComponent } from '../../shared/components/input/input.component';
// import { ButtonComponent } from '../../shared/components/button/button.component';
// import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  imports: [ButtonComponent, InputComponent],
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  @Input() disabled = false;

  onClickDisabled() {
    this.disabled = true;
  }
}
