package com.courseproject.travelagencyrestapiawtentication.models;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String phoneNumber;
    private String contactName;

    @ManyToOne
    @JoinColumn(name = "holiday_id", nullable = false)
    private Holiday holiday;

    public Reservation() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public Holiday getHoliday() {
        return holiday;
    }

    public void setHoliday(Holiday holiday) {
        this.holiday = holiday;
    }
}
