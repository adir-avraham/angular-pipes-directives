import { Component, OnInit } from "@angular/core";
import { DevelopersService } from "src/app/services/developers/developers.service";
import { FormBuilder } from "@angular/forms";
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "app-tasks-page",
  templateUrl: "./tasks-page.component.html",
  styleUrls: ["./tasks-page.component.css"]
})


export class TasksPageComponent implements OnInit {
  public developers: Array<any>;
  public myForm;

  constructor(
    private developersService: DevelopersService,
    private formBuilder: FormBuilder,
    private tasksService: TasksService
  ) {
    this.myForm = this.formBuilder.group({
      developer_id: "",
      task: "",
      createdAt: "",
      done: false
    });
  }

  ngOnInit() {
    this.developersService.getDevelopers().subscribe(
      result => {
        const { developers } = result;
        console.log({developers});
        this.developers = developers;
      },
      err => {
        console.log("some error from developers");
      }
    );
  }

  addTask() {
    const task = {
      developer_id: this.myForm.get("developer_id").value,
      task: this.myForm.get("task").value,
      createdAt: this.myForm.get("createdAt").value,
      done: this.myForm.get("done").value
    };

    this.tasksService.addTask(task).subscribe(result => {
      console.log(result);
    });
    this.myForm.reset();
  }




}