import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Sets initial value to true to show loading spinner on first load
  loading = true;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
  }

  onActivate() {
    window.scroll(0, 0);
  }

}
