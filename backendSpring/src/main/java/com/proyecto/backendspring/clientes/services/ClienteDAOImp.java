package com.proyecto.backendspring.clientes.services;

import com.proyecto.backendspring.clientes.models.Cliente;
import com.proyecto.backendspring.clientes.repositorio.ClienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClienteDAOImp implements ClienteDAO{

    @Autowired
    private ClienteRepositorio clienteRepositorio;


    @Override
    public Optional<Cliente> buscarClientePorEmail(String email) {
        Optional<Cliente> cliente = clienteRepositorio.findClienteByEmail(email); // implemento el método y mappeo "mail"
        return cliente;
    }

    @Override
    public Cliente altaNuevoCliente(Cliente cliente) throws Exception {
        if(this.clienteRepositorio
                .findClienteByEmail(cliente.getEmail().trim()) // busco al cliente por email, trimmeo los espacios en blanco si hay
                .isPresent()){ // si está presente, no hago nada, para no duplicar al cliente
            throw new Exception("El cliente con email "+ cliente.getEmail() + ", ya existe"); // Excepción, error
        }
        //El condicional de arriba no es necesario en este proyecto, lo puse solo para probar lo visto en clase

        return this.clienteRepositorio.save(cliente); // guardo al cliente en la DB
    }
}


// RuntimeException no se catchea, es una mala práctica. Se usa directamente Exception.