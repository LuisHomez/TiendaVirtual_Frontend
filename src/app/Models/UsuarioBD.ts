    export class UsuarioBD{
        usuarioId:number;
        nombreUsuario:string;
        contraseña:string;
        rol:string;
        correoElectronico:string;
        nombres:string;
        apellidos:string;
        estado:string;

        constructor(usuarioId: number, nombreUsuario: string, contraseña: string, rol: string, correoElectronico: string, nombres: string, apellidos: string, estado: string) {
            this.usuarioId = usuarioId;
            this.nombreUsuario = nombreUsuario;
            this.contraseña = contraseña;
            this.rol = rol;
            this.correoElectronico = correoElectronico;
            this.nombres = nombres;
            this.apellidos = apellidos;
            this.estado = estado;
          }
        
        getNombreCompleto():string{
            return this.nombreUsuario+" "+this.apellidos;
        }

    }