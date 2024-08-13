package com.courseproject.travelagencyrestapiawtentication.repository;


import com.courseproject.travelagencyrestapiawtentication.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
}
