import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DeleteComponent } from '../delete/delete.component'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'component-configuration',
  templateUrl: './component-configuration.component.html',
  styleUrls: ['./component-configuration.component.scss']
})
export class ComponentConfigurationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  topDropdown = new FormControl()
  compFormControl = new FormControl()

  totalComponents = []
  maxVal: number = 0;
  addComponents(){
    this.maxVal = this.maxVal +1;
    this.totalComponents.push({
      id: this.maxVal,
      name: `Component ${this.totalComponents.length + 1}`
    })
  }
  deleteComponent(comp){
    let deleteDialogRef = this.dialog.open(DeleteComponent, { width: '330px', height: '130px', data: comp })
    deleteDialogRef.afterClosed().subscribe(dialogresponse => {
      if(dialogresponse == 'yes'){
        let index = this.totalComponents.findIndex(c => c.id === comp.id);
        this.totalComponents.splice(index, 1)
      }
    })
  }
}
