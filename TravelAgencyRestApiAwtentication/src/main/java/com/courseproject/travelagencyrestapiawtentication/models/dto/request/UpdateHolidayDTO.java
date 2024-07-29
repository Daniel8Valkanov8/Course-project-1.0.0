package com.courseproject.travelagencyrestapiawtentication.models.dto.request;


import lombok.Data;

import java.util.Date;

@Data
public class UpdateHolidayDTO {
    private Long id;
    private Integer location;
    private String title;
    private Date startDate;
    private Integer duration;
    private String price;
    private Integer freeSlots;

    public UpdateHolidayDTO(Long id, Integer location, String title, Date startDate, int duration, String price, int freeSlots) {
        this.id = id;
        this.location = location;
        this.title = title;
        this.startDate = startDate;
        this.duration = duration;
        this.price = price;
        this.freeSlots = freeSlots;
    }

    public UpdateHolidayDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getLocation() {
        return location;
    }

    public void setLocation(Integer location) {
        this.location = location;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public int getFreeSlots() {
        return freeSlots;
    }

    public void setFreeSlots(int freeSlots) {
        this.freeSlots = freeSlots;
    }
}

