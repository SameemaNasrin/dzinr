import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ninjaJourney = [
    {
      'imgUrl':'assets/Ninja 1.svg',
      'h1':'BUILD',
      'desc':'Subscribe to a plan & request as many designs as you’d like.'
    },
    {
      'imgUrl':'assets/down.svg',
      'h1':'arrows',
    },
    {
      'imgUrl':'assets/Ninja 2.svg',
      'h1':'LAUNCH',
      'desc':'We\'ll revise the designs until you\'re 100% satisfied.'
    },
    {
      'imgUrl':'assets/up.svg',
      'h1':'arrows',
    },
    {
      'imgUrl':'assets/Ninja 3.svg',
      'h1':'GROW',
      'desc':'Receive your design within two business days on average.'
    }
  ]


  title = 'dzinr';
  isHidden = false;
  lastScrollTop = 0;
  
  zoomScale = 1.8; // Start with a zoomed-in scale of 1.8
  videoLastScrollTop = 0; // Track the last scroll position

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > this.lastScrollTop) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

    const currentScrollTopForVideo = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTopForVideo > this.videoLastScrollTop) {
      // Scrolling down - zoom out slightly, but not below 1 scale
      this.zoomScale = Math.max(1.4, this.zoomScale - 0.02);
    } else if (currentScrollTopForVideo < this.videoLastScrollTop) {
      // Scrolling up - zoom in slightly, but not above 1.5 scale
      this.zoomScale = Math.min(1.8, this.zoomScale + 0.02);
    }

    // Apply the scale dynamically to the video player
    const videoElement = document.querySelector('.video-player') as HTMLElement;
    videoElement.style.transform = `scale(${this.zoomScale})`;

    // Update videoLastScrollTop
    this.videoLastScrollTop = currentScrollTopForVideo <= 0 ? 0 : currentScrollTopForVideo;
  }
}
