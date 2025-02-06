package com.todo.server.controller;

import com.todo.server.model.Job;
import com.todo.server.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/careers")
public class JobController {

    @Autowired
    JobService jobService;

    @GetMapping("/jobs/admin")
    public ResponseEntity<Object> getUnVerifiedJobs() {
        Map<String, Object> response=new HashMap<>();
        List<Job> jobs=jobService.getUnVerifiedJobs();
        response.put("message", "Jobs retrieved successfully!");
        response.put("jobs", jobs);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/jobs/admin")
    public ResponseEntity<Object> updateJobStatus(@PathVariable Object request) {
        Map<String, Object> response=new HashMap<>();
        String message=jobService.updateJobStatus((String) request.getAttribute("id"), (Stirng) request.getStatus);
        response.put("message", message);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/jobs/students")
    public ResponseEntity<Object> getVerifiedJobs() {
        Map<String, Object> response=new HashMap<>();
        List<Job> jobs=jobService.getVerifiedJobs();
        response.put("message", "Jobs retrieved successfully!");
        response.put("jobs", jobs);
        return ResponseEntity.ok(response);
    }




}
