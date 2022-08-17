package com.proyecto.backendspring.clientes.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "clientes")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre", length = 60, nullable = false)
    private String nombre;

    @Column(name = "email", length = 60, nullable = false, unique = true)
    private String email;

    @Column(name = "motivo_de_consulta", length = 60, nullable = false)
    private String motivoConsulta;

    @Column(name = "mensaje", length = 1000, nullable = false)
    private String mensaje;

//    @Column(name = "fecha", length = 30)
//    private Date fecha;


    public Cliente() {
    }

    public Cliente(Long id, String nombre, String email, String motivoConsulta, String mensaje, Date fecha) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.motivoConsulta = motivoConsulta;
        this.mensaje = mensaje;
       // this.fecha = fecha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMotivoConsulta() {
        return motivoConsulta;
    }

    public void setMotivoConsulta(String motivoConsulta) {
        this.motivoConsulta = motivoConsulta;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

//    public Date getFecha() {
//        return fecha;
//    }
//
//    public void setFecha(Date fecha) {
//        this.fecha = fecha;
//    }
}
