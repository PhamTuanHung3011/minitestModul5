package com.example.minitest.repository;

import com.example.minitest.model.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TourRepo extends JpaRepository<Tour, Long> {

    List<Tour> findAllByNameTourContaining(String name);

}
