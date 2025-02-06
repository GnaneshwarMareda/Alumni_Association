package com.todo.server.service;

import com.todo.server.model.Alumni;
import com.todo.server.repository.AlumniRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlumniService {

    @Autowired
    AlumniRepo alumniRepo;

    public List<Alumni> getAlumni() {
           return alumniRepo.findAll();
    }

    public Alumni getAlumniProfile(String id) {
        return alumniRepo.findById(id).orElse(new Alumni());
    }

//    public void updateAlumniProfile(String id, Object body) {
//        Alumni updatedData=new Alumni();
//
//        return alumniRepo.save(body);
//    }
}
