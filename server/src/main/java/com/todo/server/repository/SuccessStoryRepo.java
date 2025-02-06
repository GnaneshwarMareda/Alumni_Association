package com.todo.server.repository;


import com.todo.server.model.SuccessStory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuccessStoryRepo extends MongoRepository<SuccessStory, String> {
}
