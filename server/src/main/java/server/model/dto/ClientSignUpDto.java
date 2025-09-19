package server.model.dto;


public class ClientSignUpDto {
    private String email;
    private String password;

    public ClientSignUpDto() {
        ;
    }
    public String getEmail() {
        return this.email;
    }
    public String getPassword() {
        return this.password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}