package com.courseproject.travelagencyrestapiawtentication.repository;

import java.util.Optional;

import com.courseproject.travelagencyrestapiawtentication.models.ERole;
import com.courseproject.travelagencyrestapiawtentication.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
