package server.model.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import server.model.dto.Role;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 

    private String email;

    private String password;

    

    @Enumerated(EnumType.STRING)
    private Role role; // PATIENT, THERAPIST, LEAD THERAPIST, ADMIN 

    private Boolean verified;

    @Column(name="is_active")
    private Boolean isActive;

    @Column(name = "created_at")
    private LocalDate createdAt;
   
    @Column(name="updated_at")
    private LocalDateTime updatedAt;

    private String verificationToken; 

    public User() {
        ;
    }
    public User(String email, String password, Boolean verified, Role role) {
        this.email=email;
        this.password = password;
        this.verified = verified;
        this.role = role; 
    }
    

    // GETTERS

    public Long getId() {
        return this.id;
    }
    public String getEmail() {
        return this.email;
    }
    public Role getRole() {
        return this.role;
    }
    public String getPassword() {
        return this.password;
    }
    public Boolean verified() {
        return this.verified;
    }
    public LocalDate getCreatedAt() {
        return this.createdAt;
    }
    public LocalDateTime getUpdatedAt() {
        return this.updatedAt;
    }
    public String getVerificationToken() {
        return this.verificationToken;
    }

    // SETTERS

    public void setID(Long id) {
        this.id = id;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setRole(Role role) {
        this.role = role;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void verified(Boolean verified) {
        this.verified = verified;
    }
    public void getCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }
    public void getUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
    public void getVerificationToken(String verificationToken) {
        this.verificationToken = verificationToken;
    }
}
