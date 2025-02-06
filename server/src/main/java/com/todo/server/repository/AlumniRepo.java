package com.todo.server.repository;

import com.todo.server.model.Alumni;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlumniRepo extends MongoRepository<Alumni, String> {

}
