import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public gifsItems: string[] = [];

  constructor( private gifsService: GifsService ){}

  public getTags() : string[] {
    return this.gifsService.tagHistory;
  }

  public searchTag( tag:string ): void {
    // console.log({tag});
    this.gifsService.searchTag(tag);
  }



}
