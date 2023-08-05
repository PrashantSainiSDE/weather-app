import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherApiService } from '../shared/weather-api.service';
import { Observable } from 'rxjs';
import { Weather } from '../shared/weather.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchForm!:FormGroup
  currentWeather$ = new Observable<Weather>;

  fb = inject(FormBuilder);
  api = inject(WeatherApiService);

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.searchForm = this.fb.group({
      search:['',Validators.required]
    })
   }

  search(data:{search: string}): void{

    this.currentWeather$ = this.api.getWeather(data.search).pipe();
  }
}
