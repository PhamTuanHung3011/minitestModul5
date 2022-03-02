package com.example.minitest.controller;

import com.example.minitest.model.Tour;
import com.example.minitest.service.ITourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/tours")
public class TourController {

    @Autowired
    ITourService iTourService;

    @GetMapping
    public ResponseEntity<List<Tour>>findAll() {
        return new ResponseEntity<>(iTourService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<List<Tour>>findAllByName(@PathVariable String name) {
        return new ResponseEntity<>(iTourService.findAllByName(name), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<Tour>> saveTour(@RequestBody Tour tour) {
        iTourService.saveTour(tour);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Tour>> deleteTour(@PathVariable Long id) {
        iTourService.deleteTour(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<List<Tour>> editTour(@RequestBody Tour tour) {
        iTourService.saveTour(tour);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Tour>> detailTour(@PathVariable Long id) {
       Tour tour =  iTourService.findTourById(id);
        return new ResponseEntity( tour, HttpStatus.OK);
    }
}
