package com.prueba.models.DAO;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.prueba.models.entity.Cliente;

@Repository
public interface IClienteDAO extends CrudRepository<Cliente, Long> {

}
