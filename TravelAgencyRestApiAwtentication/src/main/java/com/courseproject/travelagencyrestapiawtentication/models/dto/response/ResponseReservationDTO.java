package com.courseproject.travelagencyrestapiawtentication.models.dto.response;


import com.courseproject.travelagencyrestapiawtentication.models.Holiday;
import lombok.Data;


@Data
public class ResponseReservationDTO {
    private Long id;
    private String contactName;
    private String phoneNumber;
    private Holiday holiday;

    public ResponseReservationDTO() {
    }

    public ResponseReservationDTO(Long id, String contactName, String phoneNumber, Holiday holiday) {
        this.id = id;
        this.contactName = contactName;
        this.phoneNumber = phoneNumber;
        this.holiday = holiday;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Holiday getHoliday() {
        return holiday;
    }

    public void setHoliday(Holiday holiday) {
        this.holiday = holiday;
    }
}
