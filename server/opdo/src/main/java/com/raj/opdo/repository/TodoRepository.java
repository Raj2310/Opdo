package com.raj.opdo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.raj.opdo.model.Todo;
import com.raj.opdo.model.TodoExcerpt;

@RepositoryRestResource(collectionResourceRel = "task", path = "task",excerptProjection=TodoExcerpt.class)
@CrossOrigin
public interface TodoRepository extends MongoRepository<Todo,String> {
	List<Todo> findAll();
}
