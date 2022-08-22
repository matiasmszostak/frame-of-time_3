package com.proyecto.backendspring.clientes.services;

import com.proyecto.backendspring.clientes.models.Cliente;
import org.springframework.stereotype.Service;

import java.util.Optional;


public interface ClienteDAO {

    Optional<Cliente> buscarClientePorEmail(String email);

    Cliente altaNuevoCliente(Cliente cliente) throws Exception;

}
