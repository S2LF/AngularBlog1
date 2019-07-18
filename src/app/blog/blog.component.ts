import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: string;

  constructor() { }

  ngOnInit() {
  }


// Compteur de like

loveIts = 0;

  onLike() {
    this.loveIts += 1;
    console.log(this.loveIts)
    
  };
  onDislike() {
    this.loveIts -= 1;
    console.log(this.loveIts)
  };
}
