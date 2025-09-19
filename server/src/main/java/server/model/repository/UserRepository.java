package server.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import server.model.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
        
}
