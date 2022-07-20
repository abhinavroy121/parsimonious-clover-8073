import React, { useState } from 'react'
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom";

const MainDiv = styled.div`
height: 86px;
width: 100%;
margin-top: 10px;
margin-bottom: 20px;
box-sizing: border-box;
// border: 1px solid black;
`
const UpperDiv = styled.div`
height: 43px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: rgb(67, 42, 191);
gap: 20px;
color: white;
font-size: 15px;
font-weight: 550;
`;

const LowerDiv = styled.div`
height: 43px;
width: 100%;
justify-content: center;
align-items: center;
box-sizing: border-box;
background: rgb(54, 39, 131);
gap: 20px;
font-size: 14px;
font-weight: 550;
`;

const Header = () => {
    const [navLinks, setNavLinks] = useState("myHome");
    console.log(navLinks)
  return (
    <MainDiv>
        <UpperDiv>
            <Link style={{textDecoration:"none",color: navLinks==="myHome"? "rgb(226, 38, 38)":"white"}} to="" onClick={()=>setNavLinks("myHome")}>MY HOME</Link>
            <Link style={{textDecoration:"none",color: navLinks==="food"? "rgb(226, 38, 38)":"white"}} to="food" onClick={()=>setNavLinks("food")}>FOOD</Link>
            <Link style={{textDecoration:"none",color: navLinks==="exercise"? "rgb(226, 38, 38)":"white"}} to="exercise" onClick={()=>setNavLinks("exercise")}>EXERCISE</Link>
            <Link style={{textDecoration:"none",color: navLinks==="reports"? "rgb(226, 38, 38)":"white"}} to="reports" onClick={()=>setNavLinks("reports")}>REPORTS</Link>
            <Link style={{textDecoration:"none",color: navLinks==="apps"? "rgb(226, 38, 38)":"white"}} to="apps" onClick={()=>setNavLinks("apps")}>APPS</Link>
            <Link style={{textDecoration:"none",color: navLinks==="community"? "rgb(226, 38, 38)":"white"}} to="community" onClick={()=>setNavLinks("community")}>COMMUNITY</Link>
            <Link style={{textDecoration:"none",color: navLinks==="blog"? "rgb(226, 38, 38)":"white"}} to="blog" onClick={()=>setNavLinks("blog")}>BLOG</Link>
            <Link style={{textDecoration:"none",color: navLinks==="premium"? "rgb(226, 38, 38)":"white"}} to="premium" onClick={()=>setNavLinks("premium")}>PREMIUM</Link>
        </UpperDiv>
        <LowerDiv style={{display: navLinks==="myHome"? "flex":"none"}}>
            <NavLink to="" style={{textDecoration:"none",color:"white"}}>Home</NavLink>
            <NavLink to="goals" style={{textDecoration:"none",color:"white"}}>Goals</NavLink>
            <NavLink to="check-in" style={{textDecoration:"none",color:"white"}}>Check-In</NavLink>
            <NavLink to="mail" style={{textDecoration:"none",color:"white"}}>Mail</NavLink>
            <NavLink to="profile" style={{textDecoration:"none",color:"white"}}>Profile</NavLink>
            <NavLink to="my-blog" style={{textDecoration:"none",color:"white"}}>My Blog</NavLink>
            <NavLink to="friends" style={{textDecoration:"none",color:"white"}}>Friends</NavLink>
            <NavLink to="settings" style={{textDecoration:"none",color:"white"}}>Settings</NavLink>
        </LowerDiv>
        <LowerDiv style={{display: navLinks==="food"? "flex":"none"}}>
            <NavLink to="food" style={{textDecoration:"none",color:"white"}}>Food Diary</NavLink>
            <NavLink to="database" style={{textDecoration:"none",color:"white"}}>Database</NavLink>
            <NavLink to="my-foods" style={{textDecoration:"none",color:"white"}}>My Foods</NavLink>
            <NavLink to="my-meals" style={{textDecoration:"none",color:"white"}}>My Meals</NavLink>
            <NavLink to="receipes" style={{textDecoration:"none",color:"white"}}>Receipes</NavLink>
            <NavLink to="settings" style={{textDecoration:"none",color:"white"}}>Settings</NavLink>
        </LowerDiv>
        <LowerDiv style={{display: navLinks==="exercise"? "flex":"none"}}>
            <NavLink to="exercise-diary" style={{textDecoration:"none",color:"white"}}>Exercise Diary</NavLink>
            <NavLink to="database" style={{textDecoration:"none",color:"white"}}>Database</NavLink>
            <NavLink to="my-exercise" style={{textDecoration:"none",color:"white"}}>My Exercises</NavLink>
            <NavLink to="settings" style={{textDecoration:"none",color:"white"}}>Settings</NavLink>
        </LowerDiv>
        <LowerDiv style={{display: navLinks==="reports"? "flex":"none"}}>
            <NavLink to="charts" style={{textDecoration:"none",color:"white"}}>Charts</NavLink>
            <NavLink to="export-data" style={{textDecoration:"none",color:"white"}}>Export Data</NavLink>
        </LowerDiv>
        <LowerDiv style={{display: navLinks==="apps"? "flex":"none"}}>
            <NavLink to="app-gallery" style={{textDecoration:"none",color:"white"}}>App Gallery</NavLink>
            <NavLink to="mobile" style={{textDecoration:"none",color:"white"}}>Mobile</NavLink>
            <NavLink to="tickers" style={{textDecoration:"none",color:"white"}}>Tickers</NavLink>
            <NavLink to="badges" style={{textDecoration:"none",color:"white"}}>Badges</NavLink>
            <NavLink to="bmr" style={{textDecoration:"none",color:"white"}}>BMR</NavLink>
            <NavLink to="bmi" style={{textDecoration:"none",color:"white"}}>BMI</NavLink>
            <NavLink to="steps" style={{textDecoration:"none",color:"white"}}>Steps</NavLink>
        </LowerDiv>
        <LowerDiv style={{display: navLinks==="premium"? "none":"none"}}></LowerDiv>
    </MainDiv>
  )
}

export default Header