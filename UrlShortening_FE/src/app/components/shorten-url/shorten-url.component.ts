import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenUrlComponent implements OnInit {

  hasResult: boolean = false;
  isLoading: boolean = false;
  shortenedUrl: string = 'placeholder.com';

  urlRegEx = "^(https|ftp|http|ftps):\\/\\/([a-z\\d_]+\\.)?(([a-zA-Z\\d_]+)(\\.[a-zA-Z]{2,6}))(\\/[a-zA-Z\\d_\\%\\-=\\+]+)*(\\?)?([a-zA-Z\\d=_\\+\\%\\-&\\{\\}\\:]+)?";


  urlForm: FormGroup = this.formBuilder.group(
    {
      suppliedUrlFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern(this.urlRegEx)
      ])
    }
  )

  constructor(private formBuilder: FormBuilder,
    private urlService: UrlService) { }

  ngOnInit(): void {
  }

  doShorten(): void {
    // I should check if input starts with http:// or https://
    const suppliedUrlFormControl = this.urlForm.get('suppliedUrlFormControl');
    console.log(suppliedUrlFormControl);
    console.log(this.urlForm);

    if (suppliedUrlFormControl && this.urlForm.valid) {
      const input = suppliedUrlFormControl.value;
      this.isLoading = true;
      this.hasResult = true;
      this.urlService.saveNewUrl(input).subscribe(res => {
        setTimeout(() => {
          // Mock a short pause to show some lag
          this.shortenedUrl = location.origin + '/' + res.hashed;
          this.isLoading = false;
        }, 1000)

      });
    }
  }
}
