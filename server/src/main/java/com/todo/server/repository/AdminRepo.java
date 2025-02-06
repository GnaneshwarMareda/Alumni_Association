package com.todo.server.repository;

import com.todo.server.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends MongoRepository<Admin, String> {
}
