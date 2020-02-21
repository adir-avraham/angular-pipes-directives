import { Component, OnInit } from '@angular/core';
import { DevelopersService } from 'src/app/services/developers/developers.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {


  public developers: Array<any>;

  constructor(private developersService: DevelopersService ) { }

  ngOnInit() {
    
    this.developersService.getDevelopers().subscribe(result => {
      const { developers } = result;
      this.developers = developers; 
    }, err => {
      console.log("some error from developers")
    })
    //console.log(this.developers)
  }

}
