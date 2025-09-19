package server;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import config.SecurityConfig;

@SpringBootApplication
@Import({SecurityConfig.class})
public class AvaiPtApplication {

	public static void main(String[] args) {
		SpringApplication.run(AvaiPtApplication.class, args);
	}

}
