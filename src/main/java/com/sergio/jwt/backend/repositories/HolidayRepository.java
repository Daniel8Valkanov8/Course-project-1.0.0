package com.sergio.jwt.backend.repositories;

import com.sergio.jwt.backend.entites.Holiday;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HolidayRepository extends JpaRepository<Holiday,Long> {
}
