import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  submit() {
    const result = true;
    if (result) {
      console.log('true');
    } else {
      console.log('false');
    }

  }
}
