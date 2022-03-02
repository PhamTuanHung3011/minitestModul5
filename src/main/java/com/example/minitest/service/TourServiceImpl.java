package com.example.minitest.service;

import com.example.minitest.model.Tour;
import com.example.minitest.repository.TourRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourServiceImpl implements ITourService{
    @Autowired
    TourRepo tourRepo;
    @Override
    public List<Tour> findAll() {
        return tourRepo.findAll();
    }

    @Override
    public void saveTour(Tour tour) {
        tourRepo.save(tour);
    }

    @Override
    public void deleteTour(Long id) {
        tourRepo.deleteById(id);
    }

    @Override
    public Tour findTourById(Long id) {
        return tourRepo.findById(id).get();
    }
    @Override
    public List<Tour> findAllByName(String name) {
        return tourRepo.findAllByNameTourContaining(name);
    }

}
