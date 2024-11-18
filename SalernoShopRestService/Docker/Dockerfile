# First Stage: Build the application with Maven
FROM maven:3.8-openjdk-11 AS build

# Set the working directory inside the container
WORKDIR /app 

# Copy pom.xml and download dependencies (this step will cache Maven dependencies)
COPY ../pom.xml .

#Downloads all dependencies in advance, reducing build time in subsequent builds if dependencies haven’t changed.
RUN mvn dependency:go-offline

# Copy the rest of the application source code and build the app
COPY ../src ./src
RUN mvn clean package -DskipTests

# Second Stage: Run the application with a Java 11 runtime
FROM openjdk:11

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the build stage to this stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your Spring Boot app runs on (default 8080)
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]