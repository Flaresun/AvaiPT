package server.filter;

import java.io.IOException;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import server.utility.JwtUtility;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter{

    private final JwtUtility jwtUtility;
    
    public JwtAuthenticationFilter(JwtUtility jwtUtility) {
        this.jwtUtility = jwtUtility;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
                final String authHeader = request.getHeader("Authorization");

                if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                    filterChain.doFilter(request, response);
                    return;
                }
                final String token = authHeader.substring(7);

                if (jwtUtility.isAccessToken(token)) {
                    Claims claims = jwtUtility.parseAccessToken(token);
                    String username = claims.getSubject();

                    if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                        List<String> roles = ((List<?>) claims.get("roles"))
                                                    .stream()
                                                    .map(Object::toString)
                                                    .toList();

                        List<SimpleGrantedAuthority> authorities = roles.stream()
                                                .map(SimpleGrantedAuthority::new)
                                                .toList();
                        
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username,null, authorities);
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    }
                }
                
                filterChain.doFilter(request, response);
    }
    
}
