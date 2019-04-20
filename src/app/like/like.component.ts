import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likeBody') likeContent:string;
  @Input('isLike') isLike:boolean;
  @Input('likesCount') likesCount:number;
  filled;

  like(){
    this.isLike = !this.isLike;
    if(this.isLike){
      this.likesCount+=1;
      this.filled = '';
    }else{
      this.likesCount-=1;
      this.filled = 'outline ';
    }
  }

  constructor() { 
    if(this.isLike){
      this.likesCount=1;
      this.filled = '';
    }else{
      this.likesCount=0;
      this.filled = 'outline ';
    }
  }

  ngOnInit() {
  }

}
