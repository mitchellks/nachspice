import React, { useEffect } from 'react';
import axios from "./axios";
import { useDispatch, useSelector } from 'react-redux';
import {receivePortfolio} from "./actions";
import Iframe from 'react-iframe';

export default function Portfolio() {
    const dispatch = useDispatch();
    const portfolio = useSelector(
        state => state && state.portfolio
      
    );
   
    useEffect(
        () => {
            dispatch(
                receivePortfolio()
            );
            console.log("receivePortfolios in portfolio.js working", portfolio);
        },
        []
    );  

    if (!portfolio) {
        return null;
    }
    
        return (
            <div className="portfoliocomponent" >
                     <div>
                            <div> Project name: {portfolio.projectname}</div>
                            <div> Link to site: {portfolio.link}</div>
                            <div> completed date: {portfolio.date}</div>
                            <div> languages used : {portfolio.languages}</div>
                            <div> frameworks used: {portfolio.frameworks}</div>
                            <div> Description: {portfolio.description} </div>
                            <div> Website: {portfolio.livesite} </div>
                    </div>
            </div>
        );
    


    
}