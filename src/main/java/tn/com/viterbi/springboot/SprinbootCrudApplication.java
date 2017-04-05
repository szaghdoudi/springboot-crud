package tn.com.viterbi.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "tn.com.viterbi.springboot" })
public class SprinbootCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SprinbootCrudApplication.class, args);
	}
}
