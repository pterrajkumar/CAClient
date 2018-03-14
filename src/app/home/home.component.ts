import { Component, OnInit } from '@angular/core';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { FishesService } from '../service/fishes-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentIndex = 1;
  fishes: Array<any> = [];
  errorMessage: string;
  
  constructor(private fishesService: FishesService) { 
    this.onScroll();
  }
  
  ngOnInit() {
    this.currentIndex = 0;
  }

  onScroll(){
    this.fishesService.getFishes(this.currentIndex)
    .subscribe(
      aquariumFishes => {
        this.currentIndex++;
        console.log(aquariumFishes.json());
        this.fishes = this.fishes.concat(aquariumFishes.json());
      },
      (error: any) => this.errorMessage = <any>error  
    );
  }
}
