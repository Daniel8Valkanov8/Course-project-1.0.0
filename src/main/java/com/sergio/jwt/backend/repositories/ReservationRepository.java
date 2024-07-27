package com.sergio.jwt.backend.repositories;


import com.sergio.jwt.backend.entites.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
}
