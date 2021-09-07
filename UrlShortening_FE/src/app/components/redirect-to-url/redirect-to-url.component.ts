import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-redirect-to-url',
  templateUrl: './redirect-to-url.component.html',
  styleUrls: ['./redirect-to-url.component.scss']
})
export class RedirectToUrlComponent implements OnInit {

  isLoading: boolean = false;
  errorMsg: string = 'Invalid link, please create a new one. Redirecting you to main page...';

  constructor(@Inject(DOCUMENT) private document: Document,
    private router: Router,
    private urlService: UrlService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const hashed = location.pathname.substring(1);
    this.urlService.getUrl(hashed).subscribe(res => {
      if (res == null) {
        // redirect to main pg
        this.isLoading = false;

        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 2000);
      } else {
        const url = res.full_Url;
        document.location.href = url;
      }
    },
      error => {
        console.log('ERROR', error);
        this.router.navigateByUrl('');
      });

  }

}
