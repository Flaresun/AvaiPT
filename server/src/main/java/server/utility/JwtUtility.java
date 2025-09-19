package server.utility;

import java.security.Key;
import java.util.Date;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtility {

    @Value("${jwt.access.secret}")
    private String accessSecretB64;

    @Value("${jwt.access.expiration-ms}")
    private long accessExpiryMs;

    @Value("${jwt.refresh.secret}")
    private String refreshSecretB64;

    @Value("${jwt.refresh.expiration-ms}")
    private long refreshExpiryMs;

    private SecretKey accessKey() {return Keys.hmacShaKeyFor(Decoders.BASE64.decode(accessSecretB64));}
    
    private SecretKey refreshKey() {return Keys.hmacShaKeyFor(Decoders.BASE64.decode(refreshSecretB64));}

    // GENERATE TOKENS
    public String generateAccessToken(UserDetails user) {
        Map<String, Object> claims = Map.of(
            "typ", "access",
            "roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList()
        );
        return buildToken(user.getUsername(), claims, accessExpiryMs, accessKey());
    }

    public String generateRefreshToken(UserDetails user) {
        return buildToken(user.getUsername(), Map.of("typ","refresh"), refreshExpiryMs,refreshKey());
    }

    private String buildToken(String subject, Map<String, Object> claims, long ttlMs, Key key) {
        Date now = new Date();
        return Jwts.builder()
                    .claims(claims)
                    .subject(subject)
                    .issuedAt(now)
                    .expiration(new Date(now.getTime() + ttlMs))
                    .signWith(key)
                    .compact();
    }

    // PARSE TOKENS

    public Claims parseAccessToken(String token) {
        return Jwts.parser()
                        .verifyWith(accessKey())
                        .build()
                        .parseSignedClaims(token)
                        .getPayload();

    }
    public Claims parseRefreshToken(String token) {
        return Jwts.parser()
                        .verifyWith(refreshKey())
                        .build()
                        .parseSignedClaims(token)
                        .getPayload();

                        
    }

    // Validation
    public boolean isAccessToken(String token) {
        try {
            return "access".equals(parseAccessToken(token).get("typ", String.class));
        } catch (Exception e) {
            return false;
        }
    }

    public boolean isRefreshToken(String token) {
        try {
            return "refresh".equals(parseRefreshToken(token).get("typ", String.class));
        } catch (Exception e) {
            return false;
        }
    }

    public boolean isTokenValid(String token, UserDetails user) {
        try {
            final String username = getUsername(token);
            return username.equals(user.getUsername()) && !isExpired(token);
        } catch(Exception e) {
            return false;
        }
    }


    // UTILITIES
    public String getUsername(String token) {
        return parseAccessToken(token).getSubject();
    }
    public boolean isExpired(String token) {
        Date exp =  parseAccessToken(token).getExpiration();
        return exp.before(new Date());

    }
    
}
