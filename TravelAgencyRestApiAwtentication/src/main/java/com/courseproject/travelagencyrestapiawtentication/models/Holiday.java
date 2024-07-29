package com.courseproject.travelagencyrestapiawtentication.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;


@Entity
@Data
public class Holiday {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Integer duration;
    private Integer freeSlots;
    private String price;

    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;

    private String title;

    @Temporal(TemporalType.DATE)
    @Column(name = "start_date")
    private Date startDate;

    public Holiday() {
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Integer getFreeSlots() {
        return freeSlots;
    }

    public void setFreeSlots(Integer freeslots) {
        this.freeSlots = freeslots;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
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

    public void setStartDate(Date date) {
        this.startDate = date;
    }

}
