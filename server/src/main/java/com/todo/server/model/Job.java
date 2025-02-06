package com.todo.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Persistent;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "jobs")
public class Job {
    @Id
    private String id;
    private String title, company, location, jobType, jobLink, postedBy, posterProfile, status;
    private Date postedAt;
    private long likes, dislikes;

    public Job() {}

    public Job(String title, String company, String location, String jobType, String jobLink, String postedBy, String posterProfile, String status, Date postedAt, long likes, long dislikes) {
        this.title = title;
        this.company = company;
        this.location = location;
        this.jobType = jobType;
        this.jobLink = jobLink;
        this.postedBy = postedBy;
        this.posterProfile = posterProfile;
        this.status = status;
        this.postedAt = postedAt;
        this.likes = likes;
        this.dislikes = dislikes;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
    }

    public void setJobLink(String jobLink) {
        this.jobLink = jobLink;
    }

    public void setPostedBy(String postedBy) {
        this.postedBy = postedBy;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setPosterProfile(String posterProfile) {
        this.posterProfile = posterProfile;
    }

    public void setPostedAt(Date postedAt) {
        this.postedAt = postedAt;
    }

    public void setLikes(long likes) {
        this.likes = likes;
    }

    public void setDislikes(long dislikes) {
        this.dislikes = dislikes;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCompany() {
        return company;
    }

    public String getLocation() {
        return location;
    }

    public String getJobType() {
        return jobType;
    }

    public String getJobLink() {
        return jobLink;
    }

    public String getPostedBy() {
        return postedBy;
    }

    public String getPosterProfile() {
        return posterProfile;
    }

    public String getStatus() {
        return status;
    }

    public Date getPostedAt() {
        return postedAt;
    }

    public long getLikes() {
        return likes;
    }

    public long getDislikes() {
        return dislikes;
    }
}
