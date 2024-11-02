import { Component, HostListener, signal, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}

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
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
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
      desc: 'We begin by understanding your needs and swiftly building the application with ongoing feedback',
    },
    {
      imgUrl: 'assets/down.svg',
      h1: 'arrows',
    },
    {
      imgUrl: 'assets/Ninja 2.svg',
      h1: 'LAUNCH',
      desc: 'Receive your design within two business days, ensuring a smooth launch',
    },
    {
      imgUrl: 'assets/up.svg',
      h1: 'arrows',
    },
    {
      imgUrl: 'assets/Ninja 3.svg',
      h1: 'GROW',
      desc: "We'll refine designs to your satisfaction, working seamlessly as an extension of your internal team",
    },
  ];

  benefitsCards = [
    {
      title: 'Rapid Product Launch',
      desc: 'Accelerate your market entry with efficient processes and quick turnaround times',
      bgUrl: "'assets/Benefit Card 1.png'",
    },
    {
      title: 'Personalized Touch',
      desc: 'Receive tailored solutions that reflect your unique vision and brand identity',
      bgUrl: "'assets/Benefit Card 2.png'",
    },
    {
      title: 'Adaptable and Affordable',
      desc: 'Flexible plans that grow with you—pause or adjust services as needed without hassle',
      bgUrl: "'assets/Benefit Card 3.png'",
    },
    {
      title: 'Effortless Progress Tracking',
      desc: 'Manage designs easily with our Kanban board for clear visibility and streamlined workflows',
      bgUrl: "'assets/Benefit Card 4.png'",
    },
    {
      title: 'Premier Quality Standards',
      desc: 'We uphold the highest quality standards to ensure excellence in every project',
      bgUrl: "'assets/Benefit Card 5.png'",
    },
    {
      title: 'End-to-End Support',
      desc: 'Experience seamless support from start to finish, just like having your own internal team',
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
      ans: 'Change the text and add your own content, including any information that is relevant to share.',
    },
    {
      ques: 'How we do it',
      ans: 'This is a paragraph where you can include any information you’d like. It’s an opportunity to tell a story about the company.',
    },
    {
      ques: 'What our client say',
      ans: 'Describe a feature you’d like to share about this company or highlight a particular service it offers.',
    },
    {
      ques: 'item 1',
      ans: 'loreum ipsum',
    },
    {
      ques: 'item 2',
      ans: 'loreum ipsum',
    },
    {
      ques: 'item 3',
      ans: 'loreum ipsum',
    },
  ];

  bg = {
    hero: 'assets/flowers.png',
    things: 'assets/Montain 2.svg',
    thingsSunBirds: 'assets/Sun w Birds.svg',
    videoTrees: 'assets/trees.png',
    footer: 'assets/bg2.png',
  };

  title = 'dzinr';
  isHidden = false;
  lastScrollTop = 0;

  zoomScale = 4; // Start with a zoomed-in scale of 4
  videoLastScrollTop = 0; // Track the last scroll position

  animal: string = '';
  name: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

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

    // Initial zoom scale and last scroll position
    this.zoomScale = 4; // Start zoomed in
    this.videoLastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // Function to handle scroll event
    window.addEventListener('scroll', () => {
      const currentScrollTopForVideo =
        window.pageYOffset || document.documentElement.scrollTop;

      // Get video element and its position
      const videoElement = document.querySelector(
        '.video-player'
      ) as HTMLElement;
      const videoRect = videoElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check video position relative to viewport
      const isVideoInViewport =
        videoRect.top < viewportHeight && videoRect.bottom > 0; // video is in viewport

      if (isVideoInViewport) {
        // Calculate distance to viewport center
        const distanceToCenter = Math.abs(
          videoRect.top + videoRect.height / 2 - viewportHeight / 2
        );
        const maxDistance = viewportHeight / 2 + videoRect.height / 2;

        // Calculate zoom based on distance to viewport center
        this.zoomScale = 1.4 + (4 - 1.4) * (distanceToCenter / maxDistance);

        // Apply the scale to the video player
        videoElement.style.transform = `scale(${this.zoomScale})`;
      }

      // Update videoLastScrollTop
      this.videoLastScrollTop =
        currentScrollTopForVideo <= 0 ? 0 : currentScrollTopForVideo;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  styleUrl: './form-dialog.component.css',

})
export class DialogOverviewExampleDialog {
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';

  services = ['UI/UX', 'Rebranding', 'Portfolio Website', 'API Integration', 'UI/UX', 'Rebranding', 'Portfolio Website', 'API Integration']
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
}
