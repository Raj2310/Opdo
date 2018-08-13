package com.raj.opdo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.raj.opdo.model.Todo;
import com.raj.opdo.repository.TodoRepository;

@RestController
public class TodoController {

	@Autowired
	TodoRepository todoRepo;
	
	@RequestMapping("/todo")
	public List<Todo> getTodo() {
		return  todoRepo.findAll();
	}
	
	@RequestMapping("/save")
	public void saveTodo(){
		todoRepo.save(new Todo(null,"2","3","4"));
	}
}
