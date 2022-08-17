package com.proyecto.backendspring.clientes.repositorio;

import com.proyecto.backendspring.clientes.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {

    Optional<Cliente> findClienteByEmail(String email);

}
