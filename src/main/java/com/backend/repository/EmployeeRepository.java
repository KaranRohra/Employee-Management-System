package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // It automatically implement all CRUD operations
}

