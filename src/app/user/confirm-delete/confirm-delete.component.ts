import { Component, Input, Output, EventEmitter, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss'
})
export class ConfirmDeleteComponent implements OnInit{
     @Input() userToDelete:any;
     @Output() showConfirmUserPopup:EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit() {
      console.log("user to delete",this.userToDelete);
    }

    cancelConfirmDelete(value:boolean) {
      this.showConfirmUserPopup.emit(value);
    }
}
