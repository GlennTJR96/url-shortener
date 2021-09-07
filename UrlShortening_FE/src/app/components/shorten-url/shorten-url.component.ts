import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenUrlComponent implements OnInit {

  hasResult: boolean = false;
  shortenedUrl: string = '';

  urlForm: FormGroup = this.formBuilder.group(
    {suppliedUrlFormControlName: new FormControl('')}
  )

  constructor(private formBuilder: FormBuilder,
    private urlService: UrlService) { }

  ngOnInit(): void {
    console.log('inisssted!');
  }

  doShorten(): void{
    const input = this.urlForm.get('suppliedUrlFormControlName').value;
    this.urlService.saveNewUrl(input).subscribe(res => {
      this.hasResult = true;
      this.shortenedUrl = location.origin + '/' + res.hashed;
    });
  }
}
