package com.todo.server.repository;


import com.todo.server.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface JobRepo extends MongoRepository<Job, String> {

    List<Job> findByStatus(String status);

    @Transactional
    @Query("{id: ?0}")
    void updateJobStatus(String id, String verified);
}
