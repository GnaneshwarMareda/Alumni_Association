package com.todo.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection ="alumnis" )
public class Alumni {
    @Id
    private String id;
    private String name, password, personalEmail, mobile, graduationYear, fieldOfStudy, address, degree, jobRole, company, location, universityId;
    private List<Object> interests, successStories;

    public Alumni() {}

    public Alumni(String name, String password, String personalEmail, String mobile, String graduationYear, String fieldOfStudy, String address, String degree, String jobRole, String company, String location, List<Object> interests, List<Object> successStories, String universityId) {
        this.name = name;
        this.password = password;
        this.personalEmail = personalEmail;
        this.mobile = mobile;
        this.graduationYear = graduationYear;
        this.fieldOfStudy = fieldOfStudy;
        this.address = address;
        this.degree = degree;
        this.jobRole = jobRole;
        this.company = company;
        this.location = location;
        this.interests = interests;
        this.successStories = successStories;
        this.universityId=universityId;
    }

    public void setUniversityId(String id) {
        this.universityId=universityId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPersonalEmail(String personalEmail) {
        this.personalEmail = personalEmail;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setGraduationYear(String graduationYear) {
        this.graduationYear = graduationYear;
    }

    public void setFieldOfStudy(String fieldOfStudy) {
        this.fieldOfStudy = fieldOfStudy;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public void setJobRole(String jobRole) {
        this.jobRole = jobRole;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setInterests(List<Object> interests) {
        this.interests = interests;
    }

    public void setSuccessStories(List<Object> successStories) {
        this.successStories = successStories;
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

    public String getPersonalEmail() {
        return personalEmail;
    }

    public String getPassword() {
        return password;
    }

    public String getMobile() {
        return mobile;
    }

    public String getGraduationYear() {
        return graduationYear;
    }

    public String getFieldOfStudy() {
        return fieldOfStudy;
    }

    public String getAddress() {
        return address;
    }

    public String getDegree() {
        return degree;
    }

    public String getJobRole() {
        return jobRole;
    }

    public String getCompany() {
        return company;
    }

    public String getLocation() {
        return location;
    }

    public List<Object> getInterests() {
        return interests;
    }

    public List<Object> getSuccessStories() {
        return successStories;
    }
}
