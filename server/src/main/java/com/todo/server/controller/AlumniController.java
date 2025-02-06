package com.todo.server.controller;

import com.todo.server.model.Alumni;
import com.todo.server.service.AlumniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/alumni")
public class AlumniController {

    @Autowired
    AlumniService alumniService;

    @GetMapping("/directory")
    public ResponseEntity<Object> getAlumni() {
        Map<String, Object> response=new HashMap<>();
        List<Alumni> alumniList= alumniService.getAlumni();
        response.put("message", "Data retrieved successfully.");
        response.put("data", alumniList);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<Object> getAlumniProfile(@PathVariable String id) {
        Map<String, Object> response=new HashMap<>();
        Alumni profile=alumniService.getAlumniProfile(id);
        response.put("message", "Alumni data retrieved successfully.");
        response.put("data", profile);
        return ResponseEntity.ok(response);
    }

//    @PutMapping("/profile/{id")
//    public ResponseEntity<Object> updateAlumniProfile(@PathVariable String id, @RequestBody Object body) {
//        Map<String, Object> response=new HashMap<>();
//        alumniService.updateAlumniProfile(id, body);
//        response.put("message", "Alumni details updated successfully.");
//        return ResponseEntity.ok(response);
//    }
}
