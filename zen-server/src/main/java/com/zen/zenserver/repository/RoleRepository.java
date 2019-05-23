package com.zen.zenserver.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zen.zenserver.model.Role;
import com.zen.zenserver.model.Role.RoleName;

public interface RoleRepository extends JpaRepository<Role, Integer> {

	public Optional<Role> findByName(RoleName roleName);
}
