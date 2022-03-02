package com.example.minitest.service;

import com.example.minitest.model.Tour;

import java.util.List;

public interface ITourService {
    List<Tour> findAll();

    void saveTour(Tour tour);

    void deleteTour(Long id);

    Tour findTourById(Long id);

    List<Tour> findAllByName(String name);
}
