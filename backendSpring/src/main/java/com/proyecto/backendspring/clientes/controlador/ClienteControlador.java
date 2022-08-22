package com.proyecto.backendspring.clientes.controlador;

import com.proyecto.backendspring.clientes.models.Cliente;
import com.proyecto.backendspring.clientes.repositorio.ClienteRepositorio;
import com.proyecto.backendspring.clientes.services.ClienteDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "http://localhost:4200/") //para conectar con el frontend sin problemas de CORS (seguridad)
public class ClienteControlador {

    @Autowired
    private ClienteRepositorio repositorio;

    private final ClienteDAO servicio;

    public ClienteControlador(ClienteDAO servicio) {
        this.servicio = servicio;
    }

    //Get = devuelve la lista de los clientes
    @GetMapping()
    public List<Cliente> listarTodosLosClientes(){
        return repositorio.findAll();
    }


    //Método get
    @GetMapping("/{email}") //pongo el mail en la url
    public ResponseEntity<Cliente> buscarClientePorMail(@PathVariable String email){
        return ResponseEntity.ok(this.servicio
                .buscarClientePorEmail(email)
                .orElse(null)); // si no hay presencia de datos, responde null
    }

    //guardar un cliente
    @PostMapping()
    public ResponseEntity<?> guardarCliente(@RequestBody Cliente cliente){ // El '?' va porque el catch Exception puede devolver un objeto que no es el de mi entidad
        Cliente clienteReturn = null; //inicializo variable en null

        //Try Catch, para atajar el error que definí en el servicio. Si el cliente ya existe, devuelve el mensaje de error
        try{
            clienteReturn = this.servicio.altaNuevoCliente(cliente); // si sale bien, se guarda en la variable

        }catch (Exception e){
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
        //Si no hay error, devuelve el cliente con un status de cliente creado
        return new ResponseEntity<>(clienteReturn, HttpStatus.CREATED);
    }
















}
