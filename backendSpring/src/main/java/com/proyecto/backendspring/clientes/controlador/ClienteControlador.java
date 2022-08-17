package com.proyecto.backendspring.clientes.controlador;

import com.proyecto.backendspring.clientes.models.Cliente;
import com.proyecto.backendspring.clientes.repositorio.ClienteRepositorio;
import com.proyecto.backendspring.clientes.services.ClienteDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "http://localhost:4200/")
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
    public Cliente guardarCliente(@RequestBody Cliente cliente){
        return repositorio.save(cliente);

    }





    









}
