package com.courseproject.travelagencyrestapiawtentication.repository;


import com.courseproject.travelagencyrestapiawtentication.models.Holiday;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HolidayRepository extends JpaRepository<Holiday,Long> {
}
