package com.zen.zenserver.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.base.Predicates;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class SwaggerConfiguration {
	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any()).paths(Predicates.not(PathSelectors.regex("/error.*"))).build();
	}

	@Bean
	public ApiInfo apiInfo() {
		Contact contact = new Contact("Varun Sharma", "https://github.com/coding-with-binaries",
				"coding.with.binaries@gmail.com");
		return new ApiInfoBuilder().title("Zen API").description("Zen API").contact(contact).version("1.0.0").build();
	}
}