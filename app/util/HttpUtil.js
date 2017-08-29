import React, { Component } from 'react';

module.exports = {
    get: function(url, successCallback, failCallback){
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                successCallback(JSON.parse(result));
            })
            .catch(function(err){
                failCallback(err);
            });
    },
    post: function(url, params, successCallback, failCallback){
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((result) => {
                successCallback(JSON.parse(result));
            })
            .catch(function(err){
                failCallback(err);
            });
    },
}