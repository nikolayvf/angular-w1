import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hello-world-2001261064';
  information = 'Select an item to see the information.';

  showInformation(type: string): void {
    switch (type) {
      case 'name':
        this.information = 'Николай Филипов';
        break;
      case 'hobbies':
        this.information =
          'Обичам да гледам стойностни риалити предавания, които ме обогатяват като личност, като "Ергенът"';
        break;
      case 'creator':
        this.information = 'Моят любим създател на съдържание е Анджела Ташева';
        break;
      case 'channel':
        this.information =
          'В моя канал качвам скучни видеа, които никой не желае да гледа. ';
        break;
      case 'valuation':
        this.information =
          'Тези думи са сложни за разбиране от човек, който гледа "Ергенът". Едва наскоро научих разликата между емпатичен и антипатичен';
        break;
      default:
        this.information = '404';
    }
  }
}
