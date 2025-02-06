package com.todo.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;


@Document(collection = "SuccessStory")
public class SuccessStory {

    @Id
    private String id;
    private String title, description, image;
    private Date createDate, lastUpdateDate;

    public SuccessStory() {}

    public SuccessStory(String title, String description, String image, Date createDate, Date lastUpdateDate) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public void setLastUpdateDate(Date lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public Date getLastUpdateDate() {
        return lastUpdateDate;
    }
}
