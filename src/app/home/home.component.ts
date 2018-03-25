import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { FishesService } from '../service/fishes-service.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { ModalDirective  } from 'angular-bootstrap-md';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentIndex:number = 1;
  totalFishes:number = 1;
  fishes: Array<any> = [];
  errorMessage: string;
  indexArray: Array<string> = [];
  public myInterval: number = 3000;
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
  public items: number = 10;
  /** Edit user modal */
  @ViewChild('demoBasic') public demoBasic: ModalDirective;
  
  constructor(private fishesService: FishesService) { 
    this.getTotalFishes();
  }
  
  ngOnInit() {
    this.onScroll();
  }


  activeSlideChange(){
      console.log(this.activeSlideIndex);
  }

  public slides:Array<Object> = [
      {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg"},
      {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"},
      {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg"},
  ];

  onScroll(){
    if(this.currentIndex <= this.totalFishes){      
      
      const tempIndex:string = String(this.currentIndex);
      const chkIndex: number = this.indexArray.indexOf(tempIndex);
      if(chkIndex != -1){
        this.currentIndex++;
      }
      console.log(this.totalFishes);
      console.log(this.currentIndex);
      this.fishesService.getFishes(this.currentIndex)
      .subscribe(
        aquariumFishes => {          
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

  getTotalFishes(){
    this.fishesService.getTotalFishes()
    .subscribe(
      fishes => {
        this.totalFishes = parseInt(JSON.stringify(fishes.json()), 10);        
      },
      (error: any) => this.errorMessage = <any>error
    );
  }

  onClickAddToCart(index:number){
    console.log(index);
    this.demoBasic.show()
  }

  

}