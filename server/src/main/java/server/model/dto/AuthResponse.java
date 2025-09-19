package server.model.dto;

import java.util.List;

public record AuthResponse (String accessToken,List<String> roles, String message) {}
