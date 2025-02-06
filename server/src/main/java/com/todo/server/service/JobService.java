package com.todo.server.service;

import com.todo.server.model.Job;
import com.todo.server.repository.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    JobRepo jobRepo;

    public List<Job> getUnVerifiedJobs() {
        return jobRepo.findByStatus("PENDING");
    }

    public List<Job> getVerifiedJobs() {
        return jobRepo.findByStatus("VERIFIED");
    }

    public String updateJobStatus(String id) {
        jobRepo.updateJobStatus(id,"VERIFIED");
        return "sdf";
    }
}
