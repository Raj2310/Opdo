package com.raj.opdo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="task")
public class Todo {
	
	@Id private  String id;
	private String description;
	private String parentId;
	private String taskType;
	
	/**
	 * @param id
	 * @param description
	 * @param parentId
	 * @param taskType
	 */
	public Todo(String id, String description, String parentId, String taskType) {
		super();
		this.description = description;
		this.parentId = parentId;
		this.taskType = taskType!=null?taskType:"todo";
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the parentId
	 */
	public String getParentId() {
		return parentId;
	}

	/**
	 * @param parentId the parentId to set
	 */
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	/**
	 * @return the taskType
	 */
	public String getTaskType() {
		return taskType;
	}

	/**
	 * @param taskType the taskType to set
	 */
	public void setTaskType(String taskType) {
		this.taskType = taskType;
	}
	
	
}
