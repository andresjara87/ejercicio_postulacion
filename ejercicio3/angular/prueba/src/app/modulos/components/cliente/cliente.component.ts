import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup, FormBuilder,Validators, ReactiveFormsModule  } from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})




export class ClienteComponent implements OnInit {

  clientes:Cliente[]=[];
  clienteForm: FormGroup;
  clienteUpdateForm:FormGroup;
  clienteGuardar:Cliente;
  clienteUpdate:Cliente=new Cliente();
  cliente:Cliente=new Cliente();
  closeResult: string;
  modal : NgbModalRef;

  constructor(private clienteService:ClienteService,
  private formBuilder:FormBuilder,
  private router:Router,
  private activatedRoute:ActivatedRoute,
  private modalService: NgbModal,
  public activeModal: NgbActiveModal)
  {
   this.buildForm();
   }

  ngOnInit(): void {
    console.log("entra");

    this.clienteService.getClientes().subscribe(
      (clientes)=> {
        this.clientes = clientes
      }
    )
  }

  private buildForm(){

    this.clienteForm = this.formBuilder.group({
      idCliente:['',[Validators.required]],
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      cuenta:['',[Validators.required]]
    });

    this.clienteUpdateForm = this.formBuilder.group({
      idClienteUpdate:['',[Validators.required]],
      nombreUpdate:['',[Validators.required]],
      apellidoUpdate:['',[Validators.required]],
      cuentaUpdate:['',[Validators.required]]
    });
  }

  open(cliente, clienteModal) {
    this.cliente = cliente;

    this.clienteUpdateForm.get('idClienteUpdate').setValue(this.cliente.idCliente);
    this.clienteUpdateForm.get('nombreUpdate').setValue(this.cliente.nombre);
    this.clienteUpdateForm.get('apellidoUpdate').setValue(this.cliente.apellido);
    this.clienteUpdateForm.get('cuentaUpdate').setValue(this.cliente.cuenta);

    this.modal = this.modalService.open(clienteModal, { centered: true, backdropClass: 'light-blue-backdrop' })
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });
  }

  openSave(clienteModalSave) {
    this.clienteForm.get('idCliente').setValue('');
    this.clienteForm.get('nombre').setValue('');
    this.clienteForm.get('apellido').setValue('');
    this.clienteForm.get('cuenta').setValue('');

    this.modal = this.modalService.open(clienteModalSave, { centered: true, backdropClass: 'light-blue-backdrop' })
    this.modal.result.then((e) => {
        console.log("save dialogo cerrado")
    });
  }

  cerrar() {
    if (this.modal != undefined) {
    this.modal.close();
    }
    this.ngOnInit();
  }



  public create():void{
    console.log("a guardar");
    this.clienteGuardar=new Cliente();
    this.clienteGuardar.idCliente=this.clienteForm.get('idCliente').value;
    this.clienteGuardar.nombre=this.clienteForm.get('nombre').value;
    this.clienteGuardar.apellido=this.clienteForm.get('apellido').value;
    this.clienteGuardar.cuenta=this.clienteForm.get('cuenta').value;

    this.clienteService.create(this.clienteGuardar).subscribe(
      response=>this.cerrar()
    )

  }

  public delete(cliente:Cliente):void{

    swal.fire({
  title: '¿Estás seguro?',
  text: "Tú no podrás revertir esta operación!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si!, quiero borrar este cliente'
}).then((result) => {
  if (result.value) {
    this.clienteService.delete(cliente.idCliente).subscribe(
      response=>{
        this.cerrar()
      }
    )
  }
})
  }

  public update():void{
    console.log("actualizar");
    this.clienteUpdate.idCliente=this.clienteUpdateForm.get('idClienteUpdate').value;
    this.clienteUpdate.nombre=this.clienteUpdateForm.get('nombreUpdate').value;
    this.clienteUpdate.apellido=this.clienteUpdateForm.get('apellidoUpdate').value;
    this.clienteUpdate.cuenta=this.clienteUpdateForm.get('cuentaUpdate').value;
    this.clienteService.update(this.clienteUpdate).subscribe(
      response=>this.cerrar()
    )

  }
}
