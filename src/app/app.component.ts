import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  list = [{
    name: 'john',
  }, {
    name: 'peter',
  }, {
    name: 'aric',
  }, {
    name: 'johnson',
  }];
  title = 'app-ng-for';
}
