package com.raj.opdo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.raj.opdo.model.Todo;

@RepositoryRestResource(collectionResourceRel = "task", path = "task")
public interface TodoRepository extends MongoRepository<Todo,String> {
	List<Todo> findAll();
}
