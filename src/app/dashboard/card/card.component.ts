import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    this.card.likes++;
    this.httpClient.put(`api/skills/${card.id}`, card).subscribe();    
    //console.log('likes: ' + this.card.likes);
    //console.log('id: ' + this.card.id);
  }

  onShare() : void{
    window.open('https://www.linkedin.com/in/ronaldo-de-lelis/', '_blank');
  }

  mudaCor(){
    if(this.card.likes < 5)      
      return 'my-style-grey'
    if(this.card.likes <= 10)
      return 'my-style-blue'
    if(this.card.likes > 10)
      return 'my-style-red'
  }
}
