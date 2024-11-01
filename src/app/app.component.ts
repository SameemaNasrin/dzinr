import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatExpansionModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly panelOpenState = signal(false);

  ninjaJourney = [
    {
      imgUrl: 'assets/Ninja 1.svg',
      h1: 'BUILD',
      desc: 'Subscribe to a plan & request as many designs as you’d like.',
    },
    {
      imgUrl: 'assets/down.svg',
      h1: 'arrows',
    },
    {
      imgUrl: 'assets/Ninja 2.svg',
      h1: 'LAUNCH',
      desc: "We'll revise the designs until you're 100% satisfied.",
    },
    {
      imgUrl: 'assets/up.svg',
      h1: 'arrows',
    },
    {
      imgUrl: 'assets/Ninja 3.svg',
      h1: 'GROW',
      desc: 'Receive your design within two business days on average.',
    },
  ];

  benefitsCards = [
    {
      title: 'Add a Title',
      desc: 'Add paragraph text. Click “Edit Text” to update the font, size and more. To change and reuse text themes, go to Site Styles.',
      bgUrl: "'assets/Benefit Card 1.png'",
    },
    {
      title: 'Add a Title',
      desc: 'Add paragraph text. Click “Edit Text” to update the font, size and more. To change and reuse text themes, go to Site Styles.',
      bgUrl: "'assets/Benefit Card 2.png'",
    },
    {
      title: 'Add a Title',
      desc: 'Add paragraph text. Click “Edit Text” to update the font, size and more. To change and reuse text themes, go to Site Styles.',
      bgUrl: "'assets/Benefit Card 3.png'",
    },
    {
      title: 'Add a Title',
      desc: 'Add paragraph text. Click “Edit Text” to update the font, size and more. To change and reuse text themes, go to Site Styles.',
      bgUrl: "'assets/Benefit Card 4.png'",
    },
    {
      title: 'Add a Title',
      desc: 'Add paragraph text. Click “Edit Text” to update the font, size and more. To change and reuse text themes, go to Site Styles.',
      bgUrl: "'assets/Benefit Card 5.png'",
    },
    {
      title: 'Add a Title',
      desc: 'Add paragraph text. Click “Edit Text” to update the font, size and more. To change and reuse text themes, go to Site Styles.',
      bgUrl: "'assets/Benefit Card 6.png'",
    },
  ];

  pricingCards = [
    {
      title: 'One Time',
      subTitle: 'One Time',
      amt: '$3,799/m',
      buttonText: 'Book a call',
      whatIncludesHeader: "What's included",
      includedItems: [
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
      ],
    },
    {
      title: 'Standard',
      subTitle: 'One Time',
      amt: '$3,799/m',
      buttonText: 'Book a call',
      whatIncludesHeader: "What's included",
      includedItems: [
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
        'Web Design',
      ],
    },
  ];

  faqPanel = [
    {
      ques: 'What we do',
      ans: 'Change the text and add your own content, including any information that is relevant to share.'
    },
    {
      ques: 'How we do it',
      ans: 'This is a paragraph where you can include any information you’d like. It’s an opportunity to tell a story about the company.'
    },
    {
      ques: 'What our client say',
      ans: 'Describe a feature you’d like to share about this company or highlight a particular service it offers.'
    },
    {
      ques: 'item 1',
      ans: 'loreum ipsum'
    },
    {
      ques: 'item 2',
      ans: 'loreum ipsum'
    },
    {
      ques: 'item 3',
      ans: 'loreum ipsum'
    }
  ]

  title = 'dzinr';
  isHidden = false;
  lastScrollTop = 0;

  zoomScale = 1.8; // Start with a zoomed-in scale of 1.8
  videoLastScrollTop = 0; // Track the last scroll position

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

    const currentScrollTopForVideo =
      window.pageYOffset || document.documentElement.scrollTop;

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
    this.videoLastScrollTop =
      currentScrollTopForVideo <= 0 ? 0 : currentScrollTopForVideo;
  }
}
