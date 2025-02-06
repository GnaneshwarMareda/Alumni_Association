package com.todo.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "students")
public class Student {
    @Id
    private String id;
    private String name, password, personalEmail, universityEmail, mobile, yearOfStudy, fieldOfStudy, graduationYear, address, universityId;
    private List<Object> interests;

    public Student() {}

    public Student(String name, String password, String personalEmail, String universityEmail, String mobile, String yearOfStudy, String fieldOfStudy, String graduationYear, String address, List<Object> interests, String universityId) {
        this.name = name;
        this.password = password;
        this.personalEmail = personalEmail;
        this.universityEmail = universityEmail;
        this.mobile = mobile;
        this.yearOfStudy = yearOfStudy;
        this.fieldOfStudy = fieldOfStudy;
        this.graduationYear = graduationYear;
        this.address = address;
        this.interests = interests;
        this.universityId=universityId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUniversityId(String universityId) {
        this.universityId=universityId;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPersonalEmail(String personalEmail) {
        this.personalEmail = personalEmail;
    }

    public void setUniversityEmail(String universityEmail) {
        this.universityEmail = universityEmail;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setYearOfStudy(String yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    public void setFieldOfStudy(String fieldOfStudy) {
        this.fieldOfStudy = fieldOfStudy;
    }

    public void setGraduationYear(String graduationYear) {
        this.graduationYear = graduationYear;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setInterests(List<Object> interests) {
        this.interests = interests;
    }

    public String getId() {
        return id;
    }

    public String getUniversityId() {
        return universityId;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getPersonalEmail() {
        return personalEmail;
    }

    public String getUniversityEmail() {
        return universityEmail;
    }

    public String getMobile() {
        return mobile;
    }

    public String getYearOfStudy() {
        return yearOfStudy;
    }

    public String getFieldOfStudy() {
        return fieldOfStudy;
    }

    public String getGraduationYear() {
        return graduationYear;
    }

    public String getAddress() {
        return address;
    }

    public List<Object> getInterests() {
        return interests;
    }
}
