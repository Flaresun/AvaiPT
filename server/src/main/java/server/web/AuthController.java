package server.web;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.Duration;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import server.model.dto.AuthResponse;
import server.model.dto.LoginRequest;
import server.model.dto.Role;
import server.model.dto.SignupRequest;
import server.model.entities.User;
import server.security.CustomUserDetailsService;
import server.service.UserService;
import server.utility.JwtUtility;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtility jwtUtility;
    private final UserService userService;
    private final CustomUserDetailsService userDetailsService;
    

    public AuthController(AuthenticationManager authenticationManager, JwtUtility jwtUtility,UserService userService, CustomUserDetailsService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtility = jwtUtility;
        this.userService = userService;
        this.userDetailsService = userDetailsService;
    }


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(@RequestBody SignupRequest req) {
        if (req.email() == null || req.password() == null || req.email().isBlank() || req.password().isBlank()) {
            return ResponseEntity.badRequest().body(new AuthResponse(null,null,"Email and password are required"));
        }

        if (userService.findUserByEmail(req.email()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new AuthResponse(null,null,"Email already in use"));
        }

        User u = userService.registerUser(req.email(), req.password(), Role.ROLE_PATIENT);


        // Right now allow users to log in. Later we will verify their accounts
        UserDetails user = userDetailsService.loadUserByUsername(u.getEmail());
        String access = jwtUtility.generateAccessToken(user);
        String refresh = jwtUtility.generateRefreshToken(user);
        List<String> roles = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();
        AuthResponse res = new AuthResponse(access,roles,"Signup Successful");

        ResponseCookie cookie = ResponseCookie.from("refreshToken", refresh).httpOnly(true)
                                                                                 .secure(true)
                                                                                 .sameSite("Strict")
                                                                                 .path("/api/auth/refresh")
                                                                                 .maxAge(Duration.ofDays(14))
                                                                                 .build();

        return ResponseEntity.ok()
                            .header(HttpHeaders.SET_COOKIE, cookie.toString())
                            .body(res);        

    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest req) {

        // Calls CustomUserDetailsService to loadUserByUsername and then compares the password to the hashed req.password()
        // utilizing a PasswordEncoder configured in our SecurityConfig
        Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(req.email(), req.password())
        );

        UserDetails user = (UserDetails) auth.getPrincipal();


        String accessToken = jwtUtility.generateAccessToken(user);
        String refreshToken = jwtUtility.generateRefreshToken(user);

        List<String> roles = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();

        AuthResponse res = new AuthResponse(accessToken,roles, "Login Successful");

        ResponseCookie cookie = ResponseCookie.from("refreshToken", refreshToken).httpOnly(true)
                                                                                 .secure(true)
                                                                                 .sameSite("Strict")
                                                                                 .path("/api/auth/refresh")
                                                                                 .maxAge(Duration.ofDays(14))
                                                                                 .build();

        return ResponseEntity.ok()
                            .header(HttpHeaders.SET_COOKIE, cookie.toString())
                            .body(res);
                                
        

    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestParam String refreshToken) {
        if (!jwtUtility.isRefreshToken(refreshToken)) {
            return ResponseEntity.badRequest().body(new AuthResponse(null,null,"Invalid refresh token"));
        }

        String email = jwtUtility.parseRefreshToken(refreshToken).getSubject();
        UserDetails user = userDetailsService.loadUserByUsername(email);
        String newAccess = jwtUtility.generateAccessToken(user);
        String newRefresh = jwtUtility.generateRefreshToken(user); // rotate

        List<String> roles = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();

        AuthResponse res = new AuthResponse(newAccess,roles, "Refresh Token valid");
        
        ResponseCookie cookie = ResponseCookie.from("refreshToken", newRefresh).httpOnly(true)
                                                                                 .secure(true)
                                                                                 .sameSite("Strict")
                                                                                 .path("/api/auth/refresh")
                                                                                 .maxAge(Duration.ofDays(14))
                                                                                 .build();

        return ResponseEntity.ok()
                            .header(HttpHeaders.SET_COOKIE, cookie.toString())
                            .body(res);
    }
    
}
