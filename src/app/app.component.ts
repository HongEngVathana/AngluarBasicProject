import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { MasterComponent } from './master/master.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularBasicProject';

  fistName: string = 'Makara';
  hello = 'Welcomde';
  datetime: Date = new Date();
  inputType: string = 'radio';
  ChackBox: string = 'button';
  selectedState: string = '';

  showWelcomeAlert() {
    alert('Welcome to Angular ');
  }
  showMessage(message: string) {
    alert(message);
  }
}
