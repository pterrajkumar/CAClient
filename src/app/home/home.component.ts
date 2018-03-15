import { Component, OnInit } from '@angular/core';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { FishesService } from '../service/fishes-service.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentIndex = 1;
  fishes: Array<any> = [];
  errorMessage: string;
  indexArray: Array<string> = [];
  constructor(private fishesService: FishesService) { 
    this.onScroll();
  }
  
  ngOnInit() {
    //this.currentIndex = 0;
  }

  onScroll(){    

    this.fishesService.getFishes(this.currentIndex)
    .subscribe(
      aquariumFishes => {
        this.currentIndex++;
        if(aquariumFishes.json().length > 0){
        const index = aquariumFishes.json()[0].index;
        if(this.fishes.length == 0) {
          this.indexArray.push(index);
          this.fishes = this.fishes.concat(aquariumFishes.json());
        }else{
          const bIndex: number = this.indexArray.indexOf(index);
          if (bIndex == -1) {
            this.indexArray.push(index);
            this.fishes = this.fishes.concat(aquariumFishes.json());
          }          
        } 
      }       
      },
      (error: any) => this.errorMessage = <any>error  
    );
  }
}
