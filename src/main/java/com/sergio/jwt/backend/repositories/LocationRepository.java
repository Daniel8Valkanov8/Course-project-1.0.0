package com.sergio.jwt.backend.repositories;


import com.sergio.jwt.backend.entites.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location,Long> {

}
