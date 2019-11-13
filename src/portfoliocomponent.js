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
                <div> Description: {portfolio.description} </div>

                <div> Website: {portfolio.livesite} </div>
                <div>
                
                
                </div>
               
                
            </div>
            </div>
        );
    


    
}