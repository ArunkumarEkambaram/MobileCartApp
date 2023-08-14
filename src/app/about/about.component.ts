import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private route: Router) { }

  goHome() {
    //this.route.navigate(['/home']);
    this.route.navigateByUrl('/home');
  }
}
