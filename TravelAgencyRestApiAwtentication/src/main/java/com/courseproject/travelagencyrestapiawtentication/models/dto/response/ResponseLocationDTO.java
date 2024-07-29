package com.courseproject.travelagencyrestapiawtentication.models.dto.response;

import lombok.Data;

@Data
public class ResponseLocationDTO {
    private long id;
    private String number;
    private String country;
    private String city;
    private String street;


    public ResponseLocationDTO(long id, String number, String country, String city, String street) {
        this.id = id;
        this.number = number;
        this.country = country;
        this.city = city;
        this.street = street;
    }

    public ResponseLocationDTO() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }
}

