/**
 * 
 */
package com.raj.opdo.model;

import org.springframework.data.rest.core.config.Projection;

/**
 * @author rajs
 *
 */
@Projection(name="exceprt",types=Todo.class)
public interface TodoExcerpt {

	String getId();
	String getDescription();
	String getParentId();
	String getTaskType();
}
