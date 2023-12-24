import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from './shared/models/product';
import { IPagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private backendUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<IPagination<IProduct>>(`${this.backendUrl}/products`)
      .subscribe((response) => {
        console.log(response.count);
      });
  }

  title = 'Onlineshop';
}
