import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-formulario-finalizar-compra',
  styleUrls: ['finalizar-compra.component.css'],
  templateUrl: 'finalizar-compra.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class FormFinalizarCompraComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  onSubmit(): void{
    Swal.fire(
      'Gracias por su compra!',
      'Hasta pronto!',
      'success'
    )
  }
}

@Component({
  selector: 'app-formulario-finalizar-compra-dialog',
  templateUrl: 'finalizar-compra.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
  onSubmit(): void{
    Swal.fire(
      'Gracias por su compra!',
      'Hasta pronto!',
      'success'
    )
  }
}