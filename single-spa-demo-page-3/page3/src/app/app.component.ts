import { Component } from '@angular/core';
// @ts-ignore
import { clearA } from '@mahdi/api'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  onClear (): void {
    clearA()
  }

}
