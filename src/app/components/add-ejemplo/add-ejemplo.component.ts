import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-ejemplo',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './add-ejemplo.component.html',
  styleUrl: './add-ejemplo.component.css'
})
export class AddEjemploComponent {

}
