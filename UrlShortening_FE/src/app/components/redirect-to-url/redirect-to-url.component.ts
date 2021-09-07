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

  constructor(@Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private urlService: UrlService) { }

  ngOnInit(): void {
    const hashed = location.pathname.substring(1);
    this.urlService.getUrl(hashed).subscribe(res => {
      const url = res.full_Url;
      document.location.href = url;
    },
      error => {
        console.log('ERROR', error);
      });

  }

}
